import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css"


const Navbar = () => {
  const navigate = useNavigate();
  

  return (
    <div className="navbar">
        <h1 onClick={()=>navigate("/")}> HOME PAGE </h1>

    </div>
  );
};

export default Navbar;