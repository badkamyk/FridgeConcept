import * as React from "react";
import "../styles/Nav.css";
import Button from "./componentElements/Form/Button";

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const handleToggle = () => {
        setNavbarOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setNavbarOpen(false);
    };
    return (
        <nav className="navBar">
            <a className="logo" href="#">
                <img src="../../public/vite.svg" alt="Fridge Checker website" />
            </a>
            <Button onClick={handleToggle} btnText={navbarOpen ? "Close menu" : "Open menu"}/>
            <ul
                role="list"
                className={`menuNav nav--items ${navbarOpen ? "showMenu" : ""}`}
            >
                <li>
                    <a href="#">Add products</a>
                </li>
                <li>
                    <a href="#">My Fridge</a>
                </li>
                <li>
                    <a href="#">Recipes</a>
                </li>
                <li>
                    <a href="#">Shopping Cart</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
