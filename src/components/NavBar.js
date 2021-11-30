import React from "react";

function NavBar() {
    return (
        <nav>
            <div>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Productos</a>
            </li>
            <li>
                <a href="#">Login</a>
            </li>
             <form>
              <input type="search" placeholder="Search" aria-label="Search"/>
              <button type="submit">Search</button>
             </form>
           </div>
        </nav>
    )
}

export default NavBar