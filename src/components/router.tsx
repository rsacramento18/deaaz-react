import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link to="/write">Área Escritor</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={ Home }></Route>
                <Route path="/about" exact component={ About }></Route>
                <Route path="/posts" exact component={ Posts }></Route>
                <Route path="/posts" exact component={ Writer}></Route>
            </div>
        </Router>
    );
}

export default AppRouter;




