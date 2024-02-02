import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddEmployee from "../form/form";

const HeaderData = [
    {
        title: "DataNeuron",
        form: "add employee",
        details: "list employee"
    }
];

const Header = (props) => {
    return (
        <Router>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {HeaderData.map((item,index) =>(
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" key={index}>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">{item.title}</a>
                        </li>
                        <li class="nav-item">
                            <Link to="/addEmployee"><p>{item.form}</p></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
                ))} 
            </nav>
            <Routes>
                <Route path="/addEmployee" element={<AddEmployee />} />
            </Routes>
        </Router>
    );
};

export default Header;
