import { Link } from 'react-router-dom';
import '../styles/Trending.css';
export default function Trending(props) {
  const rand = Math.ceil(Math.random() * props.posts.length);
  const trending = props.posts[rand];
  return (
    <Link to={`trending/${trending.id}`} className='trending'>
      <button id="trending">Trending now</button>
      <p id="trending-title">
        {trending.body}
      </p>
    </Link>
  )
}
