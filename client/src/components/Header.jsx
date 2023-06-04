import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/") {
            setActiveTab("Homme")
        } else if(location.pathname === "/add") {
            setActiveTab("AddUser")
        } else if(location.pathname === "/about") {
            setActiveTab("About")
        }
    }, [location])
    return (
        <div className='header'>
            <p className='logo'>My First MERN-Project (CRUD) </p>
            <div className='header-right'>
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`} 
                    onClick={() => setActiveTab("Home")}>
                        Home
                    </p>
                </Link>
                <Link to="/add">
                    <p className={`${activeTab === "AddUser" ? "active" : ""}`}
                    onClick={() => setActiveTab("AddUser")}>
                        Add Post
                    </p>
                </Link>
            
            </div>
        </div>
    );
}

export default Header;
