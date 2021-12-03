import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <><nav>
            <div className="nav-wrapper #000000 black">
                <a href="#" className="brand-logo">Mobilestore</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a><CartWidget /></a></li>
                </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Login</a></li>
            </ul></>
    )
}
export default NavBar