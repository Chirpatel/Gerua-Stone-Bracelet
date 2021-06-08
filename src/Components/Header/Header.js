import {
    React,
    useState,
    useEffect
} from 'react'
import Loader from '../Loader/Loader';
import menu from './Heading';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CustomNavbar from './Navbar/Navbar';
import Categories from '../Body/Categories/Categories'
import ContactUs from '../Body/ContactUs/ContactUs'
import Home from '../Body/Home/Home'
import NewArrivals from '../Body/NewArrivals/NewArrivals'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import './Header.css'


function Header() {
    const [Loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [])
    return (
        <div>
            {Loading &&
                <Loader/>
            }
            {!Loading && 
                <>
                <Router>
                    <CustomNavbar menu={menu} />
                        <Switch>
                            <Route path="/categories">
                                <Categories/>
                            </Route>
                            <Route path="/contact">
                                <ContactUs/>
                            </Route>
                            <Route path="/newarrivals">
                                <NewArrivals/>
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                            
                        </Switch>
                    </Router>
                    <Footer />
                </>
            }
        </div>
    )
}

export default Header
