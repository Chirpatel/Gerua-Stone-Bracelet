import {React,useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar({menu}) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [toggleMenu, setToggleMenu] = useState(false)

    function toggle(){
        setToggleMenu( preValue => (!preValue))
    }
     
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
          }
          window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    },[])
    return (
        <div>
            {screenWidth > 800 &&
                <>
                    <div className="navbar-part1">
                        <div className="navbar-part1-container">
                            <div className="navbar-part1-row">
                                <div className="logo"> <img src="/main logo.png" alt="Gita Stone Logo" /> </div>
                                <div className="search"> <input type="text" placeholder="Search Product" /> <i className="fas fa-search fa-3x"></i> </div>
                            </div>
                        </div>
                        <div className="navbar-part2-container">
                            <div className="navbar-part1-row">
                                {menu &&
                                    menu.map((data, index) => {
                                        return <div key={index} className="href"> <Link to={data.url}>{data.name}</Link> </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
            <nav>

                {screenWidth <= 800 &&
                    <div class="topnav">
                        <div className="logo"> <img src="/main logo.png" alt="Gita Stone Logo" /> </div>
                        {toggleMenu &&
                            <div id="myLinks">
                                {menu &&
                                    menu.map((data, index) => {
                                        return <div key={index} className="href href-toggle"> <Link to={data.url}>{data.name}</Link> </div>
                                    })
                                }
                            </div>
                        }
                        <button className="icon" onClick={toggle}>
                            <i className={`fa fa-${toggleMenu?"times":"bars"}`}></i>
                        </button>
                    </div>
                }
            </nav>
        </div>
    )
}

export default Navbar
