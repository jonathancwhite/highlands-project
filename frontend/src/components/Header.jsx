import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__branding">
                    <h2>Inventory Project</h2>
                </div>
                <div className="header__navigation">
                    <ul>
                        <li>Create Product</li>
                        <li>Products</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
