import * as React from 'react';
import './navbar.css';
import cinewizardlogo from '../assets/images/cinewizardlogo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar(){
return(
  <>
    {/* navbar code */}
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src={cinewizardlogo} alt="Loading Logo :)"  height={50} width={50}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav stylefont">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/tv-shows" className="nav-link">TV Shows</Link>
        <Link to="/watchlist" className="nav-link">WatchList</Link>
        <Link to="/searchmovie" className="nav-link">Searchmovie</Link>
        <li className="nav-item dropdown">
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
);


}
export default Navbar;