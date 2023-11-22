import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__branding">
                    <LinkContainer to={"/"}>
                        <span>Inventory Project</span>
                    </LinkContainer>
                </div>
                <div className="header__navigation">
                    <ul>
                        <LinkContainer to={"/"}>
                            <li>Create Product</li>
                        </LinkContainer>
                        <LinkContainer to={"/products"}>
                            <li>Products</li>
                        </LinkContainer>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
