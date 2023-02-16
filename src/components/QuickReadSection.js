import React from 'react'
import QuickRead from './QuickRead'
import '../styles/QuickReadSection.css';
export default function QuickReadSection(props) {
  const fiveReads = [];
  for (let i = 0; i < 3; i++) {
    const rand = Math.ceil(Math.random() * props.posts.length);
    const article = props.posts[rand];
    fiveReads.push(<QuickRead key={i} article={article}/>);
  }
  return (
    <div className='quick-reads-section'>
      <h2 id="quick-reads-title">Quick Read</h2>
      {fiveReads}
    </div>
  )
}
