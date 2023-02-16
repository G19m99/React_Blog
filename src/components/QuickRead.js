import React from 'react'
import { Link } from 'react-router-dom';

export default function QuickRead(props) {
    const {id, title, body} = props.article;
    return (
        <Link to={`quickread/${id}`} className='quick-read'>
            <h5 className="postedBy">01/01/2021 &#8226; 3 min read
            </h5>
            <h3 className="quick-read-title">
               {title} 
            </h3>
            {window.innerWidth > 1000 && <p>{body}</p>}
        </Link>
    )
}
