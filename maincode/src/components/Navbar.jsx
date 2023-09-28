import * as React from 'react';
import './navbar.css';
import cinewizardlogo from '../assets/images/cinewizardlogo.png';

function Navbar(){
return(
  <>
    {/* navbar code */}
    <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src={cinewizardlogo} alt="Loading Logo :)"  height={50} width={50}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> 
          Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">TV Shows</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Wishlist &nbsp;&nbsp;<span class='badge badge-warning' id='lblCartCount'> 5 </span></a>
        
        </li>
        <li class="nav-item dropdown">
      
        <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
);


}
export default Navbar;