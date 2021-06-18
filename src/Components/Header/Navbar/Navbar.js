import React from 'react'
import "./Navbar.css";

function Navbar({menu}) {
    return (
        <div>
            <div className="navbar-part1">
                <div className="navbar-part1-container">
                    <div className="navbar-part1-row">
                        <div className="logo"> Gerua Agate </div>
                        <div className="search"> <input type="text" placeholder="Search Product"/> <i className="fas fa-search fa-3x"></i> </div>
                    </div>
                </div>
                <div className="navbar-part2-container">
                    <div className="navbar-part1-row">
                        {menu &&
                            menu.map((data,index)=>{
                                return <div key={index} className="href"> <a href={data.url}>{data.name}</a> </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
