import React from 'react'

export default function Comment (props) {
	const {name, body} = props.commentData;
	return (
		<div className='comment'>
			<p className='comment-title'>{name}</p>
			<p className='comment-body'>{body}</p>
		</div>
	)
}
