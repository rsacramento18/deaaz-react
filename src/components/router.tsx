import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Posts from '../pages/posts';
import Writer from '../pages/writer';

const AppRouter = () => {

    const [isSticky, setSticky] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if ( offset > 130 ) {
            setSticky(true);
        }
        else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    });

    let navbarClasses=['menu'];
    let contentClasses=['content'];
    if(isSticky) {
        navbarClasses.push('sticky');
        contentClasses.push('margin-100');
    }


    return (
        <Router>
            <header>
                <div className="logo">
                    <div className="high-title">
                        <div className="low-case-title low-letter"><span>de</span></div>
                        <div className="high-case-title border-bottom"><span>A</span></div>
                    </div>
                    <div className="low-title">
                        <div className="low-case-title high-letter lower-title height-line"><span>a</span></div>
                        <div className="high-case-title border-top"><span>Z</span></div>
                    </div>
                </div>
                <div className={navbarClasses.join(" ")}>
                    <nav>
                        <ul>
                            <li>
                                <NavLink activeClassName="active-item" exact to="/">home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-item" exact to="/about">sobre nós</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-item" exact to="/posts">posts</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-item" exact to="/write">área escritor</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={contentClasses.join(" ")}>
                <Route path="/about" exact component={ About }></Route>
                <Route path="/posts" exact component={ Posts }></Route>
                <Route path="/write" exact component={ Writer}></Route>
                <Route path="/" exact component={ Home }></Route>
            </div>
        </Router>
    );
}

export default AppRouter;




