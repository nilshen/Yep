import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  constructor(props){
    super(props)
  }

  render() { 

    const { currentUser, logout } = this.props;
    // debugger
    const session = currentUser ? (  
    <div className="login-signup">
      <h2 className="header-name">Welcome, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
    ) : (
      <div>
      <header className='header'>

        <nav className="header-right">
          <Link to="/login"><button>Log In</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </nav>
      </header>
      </div>
    )
    
    return (
     
  
      <div className='homepage-container-top'>
        <div className='header-container'>
          <nav className="header-left">
            <Link to="/restaurants" style={{ textDecoration: 'none' }}>Restaurants</Link> 
            {/* <p>Write a Review</p> */}
          </nav>
          <nav className="header-middle"> 
            <Link to="/">
              <img src="https://yep-seeds.s3.amazonaws.com/images/logo.png" className='logo' />
            </Link>
          </nav>
          <nav className="header-right"> 
            {session}
          </nav>
        </div>
      </div>

  
    
    )
  }
}

export default Header;


