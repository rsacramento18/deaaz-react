import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Posts from '../pages/posts';
import Writer from '../pages/writer';

const AppRouter = () => {
    return (
        <Router>
            <div className="logo">
                <h1>De A a Z</h1>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li>
                            <NavLink activeClassName="active-item" exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active-item" exact to="/about">Sobre</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active-item" exact to="/posts">Posts</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active-item" exact to="/write">Área Escritor</NavLink>
                        </li>
                    </ul>
                </nav>
                <Route path="/about" exact component={ About }></Route>
                <Route path="/posts" exact component={ Posts }></Route>
                <Route path="/posts" exact component={ Writer}></Route>
                <Route path="/" exact component={ Home }></Route>
            </div>
        </Router>
    );
}

export default AppRouter;




