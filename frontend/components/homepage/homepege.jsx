import React from 'react';
import { Link } from 'react-router-dom';
import Search_bar_container from '../search_bar/search_bar_container';


class Homepage extends React.Component {
  constructor(props){
    super(props)
  }
  render() { 
    const { currentUser, logout } = this.props

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
      <div className='homepage-container'>
        <header className='header'>

          <nav className="header-left">
            <Link to="/restaurants" style={{ textDecoration: 'none' }}>Restaurants</Link> 
            {/* <p>Write a Review</p> */}
          </nav>

          <nav className="header-middle"> 
            <Link to="/" style={{ textDecoration: 'none' }}>Home Page</Link>
          </nav>

          <nav className="header-right"> 
            {session}
          </nav>
          
          {/* <div className='homepage-video'>
              <iframe title="background video" src="https://player.vimeo.com/video/685610054?background=1&autoplay=1&autopause=0&loop=1&muted=1&playsinline=1&quality=1080p" 
                frameborder="0" allow="autoplay; fullscreen" data-ready="true">
              </iframe>
          </div> */}
        </header>

          {/* 
          <div className="homepage-footerphoto">
            <img src={window.footerphoto}/>
          </div> */}
          <Search_bar_container/>
      </div>
    )
  }
}

export default Homepage;

          {/* <div className="homepage-headerphoto">
            <img src={window.headerphoto}/>
          </div> */}

//     const sessionLinks = () => (
//       <div>
//       <header className='header'>
//         <nav className="header-left"> 
//           <Link to="/">Home Page</Link>
//           <Link>Write a Review</Link>
//           <Link to="/restaurants">Restaurants</Link>
      
//         </nav>
//         <nav className="header-right">
//           <Link to="/login"><button>Log In</button></Link>
//           <Link to="/signup"><button>Sign Up</button></Link>
//         </nav>
//       </header>
  
//       </div>
//     );
//     const personalGreeting = () => (
//       <div className="login-signup">
//         <h2 className="header-name">Welcome, {currentUser.username}!</h2>
//         <button className="header-button" onClick={logout}>Log Out</button>
//     </div>
//     );
//     return (
      
//       currentUser ? personalGreeting() : sessionLinks()
//     );


// const Greeting = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <div>
//     <header className='header'>
//       <nav className="header-left"> 
//         <Link to="/">Home Page</Link>
//         <Link>Write a Review</Link>
//         <Link to="/restaurants">Restaurants</Link>
    
//       </nav>
//       <nav className="header-right">
//         <Link to="/login"><button>Log In</button></Link>
//         <Link to="/signup"><button>Sign Up</button></Link>
//       </nav>
//     </header>

//     </div>
//   );
//   const personalGreeting = () => (
//     <div className="login-signup">
//       <h2 className="header-name">Welcome, {currentUser.username}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//   </div>
//   );

//   return currentUser ? personalGreeting() : sessionLinks();


// };


// export default Greeting;
