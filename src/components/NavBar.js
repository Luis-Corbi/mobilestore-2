import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav>
            <div className="nav-wrapper #000000 black">
                <a href="index.html" className="left brand-logo">Mobilestore</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a><CartWidget /></a></li>
                </ul>
               
            </div>
        </nav>
    )
}
export default NavBar