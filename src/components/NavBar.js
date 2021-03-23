import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
      <div>
      <nav className="navbar fixed-topnavbar-dark bg-dark">
      <span className="navbar-text">
             <NavLink to="/"><button className="btn btn-light" style={{ margin: '0 6px 6px'}}>Home</button></NavLink>
             <NavLink to="/favorites"><button className="btn btn-light" style={{ margin: '0 6px 6px'}}>My Favorites</button></NavLink>
            <NavLink to="/paintings"><button className="btn btn-light" style={{ margin: '0 6px 6px'}}>Paintings Search</button></NavLink>
         </span>  
     </nav>  
      </div>

  );
};

export default NavBar;

