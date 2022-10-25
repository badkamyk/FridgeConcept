import * as React from "react";
import "../styles/Nav.css";
import Button from "./componentElements/Form/Button";
import { Link } from "react-router-dom";
import {Outlet} from "react-router-dom";


const Nav = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const handleToggle = () => {
        setNavbarOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setNavbarOpen(false);
    };

    const handleActiveLink = (e: React.MouseEvent<HTMLElement>) => {
        const activeLink = document.querySelector(".active");
        if (activeLink) {
            activeLink.classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    }

    return (
        <>
        <nav className="navBar">
            <a className="logo" href="/">
                <img src="../../public/vite.svg" alt="Fridge Checker website" />
            </a>
            <Button onClick={handleToggle} text={navbarOpen ? "Close menu" : "Open menu"}/>
            <ul
                role="list"
                className={`menuNav nav--items ${navbarOpen ? "showMenu" : ""}`}
            >

                <li className={"active"} onClick={handleActiveLink}>
                    <Link to={`/`}>Add Products</Link>
                </li>
                <li onClick={handleActiveLink}>
                    <Link to={`/recipes`}>Recipes</Link>

                </li>
                <li onClick={handleActiveLink}>
                    <Link to={`/shopping-cart`}>Shopping Cart</Link>
                </li>
            </ul>
        </nav>
            <Outlet/>
        </>
    );

};

export default Nav;
