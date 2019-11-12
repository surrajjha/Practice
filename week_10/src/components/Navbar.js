import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav  mt-3 bg-dark" style={{height:"100px"}}>
        <Link className="nav-item nav-link text-white" to="/"> <h1 style={{ marginLeft: "20px", marginRight: "10px",fontSize: "40px",marginTop:"-10px" ,padding:"5px"}}><span>CricScore</span></h1></Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"560px" }} to="/adminlog">ADMIN LOGIN</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"20px" }} to="/login">LOG IN</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"20px" }} to="/signup">SIGN UP</Link>

      </nav>
    </div>
  )
    ;
};
export default Navbar;  