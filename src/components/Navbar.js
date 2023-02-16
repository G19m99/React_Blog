import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
function Navbar(){
  return (
    <header>
    <nav className="navbar">
        <h2>MyBlog</h2>
        <div className="lg-screen">
            <Link to='/' className="navTags" id="homeBtn">Home</Link>
            <Link to='/comingsoon' className="navTags">Contact</Link>
            <Link to='/comingsoon' className="navTags">Sign-in</Link>
            <button className="btn signupBtn">Sign up</button>
        </div>
        <div className="hamburger-menu">
            <div className="bar-top"></div>
            <div className="bar-middle"></div>
            <div className="bar-bottom"></div>
        </div>
        <div className="drop-down">
            <ul className="drop-down-list">
                <li className="list-item">
                    <Link className="navTags" to="./index.html">Home</Link>
                </li>
                <li className="list-item">
                    <Link className="navTags" to="#">Contact</Link>
                </li>
                <li className="list-item">
                    <Link className="navTags" to="#">Sign-in</Link>
                </li>
                <li className="list-item">
                    <button className="btn signupBtn">Sign up</button>
                </li>
            </ul>
        </div>
    </nav>
</header>
  )
}

export default Navbar