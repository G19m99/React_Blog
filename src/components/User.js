import { Link } from 'react-router-dom';
import icon from '../images/profile.png';

export default function User(props) {
  const { title } = props.posts[0];
  const { id, name, username, company } = props.userData;
  return (
    <Link to={`/posts/${id}`} className='blog' >
      <div className="blog-header" >
        <p>Posted by {username} 01/01/2021</p>
      </div>
      <div className="blog-body">
        <div className="blog-title">
          <img src={icon} width="50px" alt="person icon" />
          <div className="companyInfo">
            <h4 className="username">{name}</h4>
            <h5 className="company">comany: {company.name}</h5>
          </div>
        </div>
        <p className="blog-post">
          {title}
        </p>
      </div>
    </Link>
  )
}
