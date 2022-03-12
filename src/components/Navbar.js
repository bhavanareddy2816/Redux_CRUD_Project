import React from "react";
import {Link} from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark py-2">
             <Link to="/" className="navbar-brand text-white ms-5">React Redux contact App</Link>
        </nav>
    )
}

export default Navbar;