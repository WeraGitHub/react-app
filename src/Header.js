import React , {useEffect} from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import NotFound from './NotFound';
import AboutUs from './AboutUs';
import Hello from './hello';
import Bye from './bye';
import Home from './Home';
import FutureTime from './FutureTime';
import List from './List';


export default function Header() {



    return (
      <div>
           <BrowserRouter basename="/webapp" >
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Nav>
                            <NavItem><Link to="/">Home</Link></NavItem>
                            <NavItem><Link to="/aboutus">About Us</Link></NavItem>
                            <NavItem><Link to="/hello">Hello</Link></NavItem>
                            <NavItem><Link to="/goodbye">Goodbye</Link></NavItem>
                            <NavItem><Link to="/list2">List Routes</Link></NavItem>
                            <NavItem><Link to="/futuretime">Future Time</Link></NavItem>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route path="/aboutus" component={AboutUs} />
                        <Route path="/hello" component={Hello} />
                        <Route path="/goodbye" component={Bye} />
                        <Route path="/list2" component={List} />
                        <Route path="/futuretime" component={FutureTime} />
                        {/* <Route path="/:post_id" component={Posts} /> */}
                        <Route exact path="/" component={Home} />
                        <Route path="/*" component={NotFound} />
                    </Switch>
                </div>
           </BrowserRouter>
           </div>
        );
}