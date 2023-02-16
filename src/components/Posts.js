import React, { useState } from 'react';
import Post from './Post';
import '../styles/Posts.css';
import { Link, useLoaderData } from 'react-router-dom';

function Posts() {
  //change pagination to route links
  const [currentPage, setCurrentPage] = useState(0);
  const userData = useLoaderData();
  const { name, username, email, website, phone } = userData.user;
  const allPosts = userData.posts.slice(currentPage * 3, (currentPage * 3) + 3).map((post) => <Post post={post} username={username} key={post.id} />);

  function setCurrentPageClickHandle(next) {
    if (next) {
      userData.posts.length > currentPage * 3 && setCurrentPage(currentPage + 1);
    } else {
      currentPage > 0 && setCurrentPage(currentPage - 1);
    }
  }

  return (
    <>
      <div className='wrap'>
        <div className='left'>
          <header>
            <h1>{name}</h1>
            <p>Contact Me</p>
            {/* fake links */}
            <p>
              <Link to="#">{email}</Link> &mdash;
              <Link to="#">{phone}</Link> &mdash;
              <Link to="#">{website}</Link>
            </p>
          </header>
        </div>
        <div className='right'>
          <div className='right-inner'>
            {allPosts}
            <div className='btnContainer'>
              <button className={currentPage > 0 ? 'sendBtn paginationBtn' : ' sendBtn paginationBtn no-pages'} onClick={() => setCurrentPageClickHandle(false)}>Previous</button>
              <button className={userData.posts.length > (currentPage + 1) * 3 ? 'sendBtn paginationBtn' : ' sendBtn paginationBtn no-pages'} onClick={() => setCurrentPageClickHandle(true)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
async function getter(endpoint) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
    if (!res.ok) {
      throw new Error(`retreivng users resolved in a error code 
                ${res.status} with message ${res.statusText}`);
    }
    const data = await res.json();
    return data;

  } catch (e) {
    console.error(e.message);
  }
}
export async function loader({ params }) {
  const user = await getter(`users/${params.id}`);
  const posts = await getter(`posts?userId=${params.id}`);
  return { user, posts };
}

export default Posts