import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
    <header className='header'>
      <nav className="header-left"> 
        <Link to="/">Home Page</Link>
        <Link>Write a Review</Link>
        <Link to="/restaurants">Restaurants</Link>
    
      </nav>
      <nav className="header-right">
        <Link to="/login"><button>Log In</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </nav>
    </header>
    <footer>
        <img src={window.headerPhoto} className='footer-photo' />
      </footer>
    </div>
  );
  const personalGreeting = () => (
    <div className="login-signup">
      <h2 className="header-name">Welcome, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
  </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();


};


export default Greeting;
