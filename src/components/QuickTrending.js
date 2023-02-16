import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import Comments from './Comments';
import '../styles/QuickTrending.css';
export default function QuickTrending() {
  const [user, setUser] = useState();
  const paramData = useLoaderData();
  const [newComment, setNewComment] = useState('Leave a comment');
  const { userId, id, title, body } = paramData;

  useEffect(
    ()=>{
      async function getUserData(){
        try{
          const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
          if(!res.ok){
            throw new Error(`Error occured retreiving users data`);
          }
          const data = await res.json();
          setUser(data);
        } catch(e){
          console.error(e.message);
        }
      }
      getUserData();
    }
  );

  function newCommentHandleClick() {
    const write = document.querySelector('.textarea');
    write.innerHTML = `<p>${newComment}</p>`;
  }
  return (
    <>
      <div className='trendArticle'>
        <article >
          <h2 className='title'>{title}</h2>
          <p className="date">Wednesday - 18th Nov ~ by <span>
            {user && user.username}</span></p>

          <p className='body'>{body}</p>

          <div className="tags">
            <ul>
              <li>Insurance</li>
              <li>Scams</li>
              <li>Luxury</li>
              <li>inspection</li>
            </ul>
          </div>
          <div className='more-articles'>
            for more Articles by {user && user.username} <Link to={`/posts/${user && user.id}`}>click here</Link>
          </div>
          <div>
            <h3 style={{ marginTop: '1rem' }}>Comments</h3>
            <hr />
            <div className="writing">
              <div contentEditable="true" className="textarea"
                autoFocus spellCheck="false" suppressContentEditableWarning={true}>
                <p>{newComment}</p>
              </div>
              <div className="footer">
                <div className="group-button">
                  <button className="sendBtn" onClick={newCommentHandleClick}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </article>
        <Comments postId={id} />
      </div>
    </>
  )
}
export async function loader({ params }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (!res.ok) {
      const url = new URL(window.location.href);
      const path = url.pathname;
      const parts = path.split('/');
      throw new Error(`retreivng ${parts[1]} article with Id of ${parts[2]}, resolved in a error code ${res.status}`);
    }
    const post = await res.json();
    return post;
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }
}
