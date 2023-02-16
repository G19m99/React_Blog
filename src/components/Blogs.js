import React, { useEffect, useState } from 'react'
import User from './User';
import '../styles/Blogs.css';
export default function Blogs(props) {
  const [users, setUsers] = useState();
  useEffect(
    () => {
      async function getUsers() {
        const u = await loader();
        setUsers(u);
      }
      getUsers();
    }, []
  );
  const allUsers = users && users.map((user, i) => {
    const userPosts = props.posts.filter((post) => post.userId === user.id);
    return <User userData={user} posts={userPosts} key={user.id} />
  });
  
  return (
    <div className='blogs'>
      {allUsers}
    </div>
  )
}
async function loader() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
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
