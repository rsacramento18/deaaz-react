import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Posts from '../pages/posts/posts';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={ Home }></Route>
                <Route path="/about" exact component={ About }></Route>
                <Route path="/posts" exact component={ Posts }></Route>
            </div>
        </Router>
    );
}

export default AppRouter;




