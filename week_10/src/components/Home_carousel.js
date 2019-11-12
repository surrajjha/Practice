import React from 'react'
import { Link } from "react-router-dom";
const Home_carousel=()=>{
    return(
 
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{height: "800px"}}>
    <div class="carousel-item active">
      <img style={{height: "800px"}} class="d-block w-100" src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=867&q=80" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
     <Link to="/create"><button className="btn btn-primary ">Create </button></Link>
      <Link to="/show1"><button className="btn btn-primary ml-4">Show</button></Link>
     </div>
   </div>
    <div class="carousel-item">
      <img style={{height: "800px"}} class="d-block w-100" src="https://images.unsplash.com/photo-1552435053-01c010307582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=825&q=80" alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
     <Link to="/signup"> <button className="btn btn-primary">Sign Up </button></Link>
      
     </div>
    </div>
    <div class="carousel-item">
      <img  style={{height: "800px"}} class="d-block w-100" src="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
     
     </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
       
    )
}
export default Home_carousel;