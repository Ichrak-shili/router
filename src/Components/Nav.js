import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Link,Route} from 'react-router-dom';
import MovieList from './MovieList';

const Nav=()=>{

return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom:"50px"}}>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item ">
          <Link className="nav-link" to ='/Home' >Home</Link>
        </li>
      
        <li className="nav-item ">
          <Link className="nav-link" to='/Movies'>Movies</Link>
        </li>
       
        
      </ul>
    </div>
  </nav>
  <Route path="/Home" render={()=><h1>Welcome to Movie-App</h1>}/>
 
  <Route path="/Movies" component={MovieList}/>
 

</>

);


}
export default Nav ;