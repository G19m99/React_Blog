import React, { useState } from 'react'
import Comments from './Comments';

export default function Post(props) {
  const [newComment] = useState('Leave a comment');
  const { id, title, body } = props.post;

  function newCommentHandleClick(){
    window.alert('Comment submitted!');
    const write = document.querySelector('.textarea');
    write.innerHTML = newComment;
  }
  return (
    <>
      <article>
        <h2>{title}</h2>
        <p className="date">Wednesday - 18th Nov ~ by <span>
          {props.username}</span></p>

        <p>{body}</p>

        <div className="tags">
          <ul>
            <li>Insurance</li>
            <li>Scams</li>
            <li>Luxury</li>
            <li>inspection</li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginTop: '1rem' }}>Comments</h3>
          <hr />
          <div className="writing">
            <div contentEditable="true" className="textarea"
              autoFocus spellCheck="false" suppressContentEditableWarning ={true}>
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
    </>
  )
}
export async function loader({params}) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (!res.ok) {
      throw new Error(`retreivng users resolved in a error code 
                ${res.status} with message ${res.statusText}`);
    }
    const post = await res.json();
    return post;
  } catch (e) {
    console.error(e.message);
  }
}
