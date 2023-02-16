import React, { useEffect, useState } from 'react'
import Comment from './Comment';
export default function Comments(props) {
  const {id} = props.postId;
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [btnText, setBtnText] = useState('See all comments');
  useEffect(() => {
    async function getComments(){
      try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`);
        if(!res.ok){
          throw new Error(`Error occured while retrieving comments postId ${id}, error code ${res.status}`);
        }
        const commentsData = await res.json();
        setComments(commentsData);
      } catch(e){
        console.error(e.message);
      }
    }
    getComments();
  }, []);
  function commentsBtnHandleClick(){
    if(!showComments){
      setShowComments(true);
      setBtnText('Hide comments');
    } else {
      setShowComments(false);
      setBtnText('See all comments');
    }
  }
  const allComments = comments.length > 0 && comments.map((c,index)=>{ 
    if(!showComments){
      const data = index < 3 ? <Comment commentData={c} key={c.id}/> : null;
      return data;
    } else {
      return <Comment commentData={c} key={c.id}/>
    }
  });

  return (
    <div>
      {allComments}
      {comments.length > 3 ? <button className='seeCommentsBtn' onClick={commentsBtnHandleClick}>{btnText}</button> : null}
    </div>
  )
}
