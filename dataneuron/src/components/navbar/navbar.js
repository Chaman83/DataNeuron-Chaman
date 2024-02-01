import React from "react";

const data = [
    {
        title : "DataNeuron",
        form : "add employee",
        details : "list employee"
    }
]
const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">{props.title}</a>
            {data.map((item,index)=>(
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">{item.form}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{item.details}</a>
                    </li>
                </ul>
            </div>
            ))}
            
        </nav>
    )
}

export default Navbar;
