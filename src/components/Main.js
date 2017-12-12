import React, {Component} from 'react';
import {Route, NavLink,   BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import Page1 from './Stuff';
import Contact from './Contact';

class Main extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/page1">Page</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/page1" component={Page1}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </Router>
        );
    }

}

export default Main