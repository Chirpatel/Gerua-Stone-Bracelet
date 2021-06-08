import {
    React,
    useState,
    useEffect
} from 'react'
import Loader from '../Loader/Loader';
import menu from './Heading';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

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
                        <Navbar sticky="top" bg="light" expand="lg">
                            <Navbar.Brand href="/">Gerua Stone Bracelet</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {menu &&
                                        menu.map((data,key) => {
                                            return <Nav.Link key={key} href={data.url}>{data.name}</Nav.Link>
                                        })
                                    }
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-dark">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                        <Switch>
                            <Route path="/categories">
                                <Categories />
                            </Route>
                            <Route path="/contact">
                                <ContactUs />
                            </Route>
                            <Route path="/newarrivals">
                                <NewArrivals />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/">
                                <Home />
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
