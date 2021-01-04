import React  from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import About from '../pages/about';
import Posts from '../pages/posts';
import Writer from '../pages/writer';

const AppRouter = () => {

    const categories = ['romance', 'poemas', 'curtas', 'crónica', 'notícia'];
    const writers = [
        {
            letter: 'A',
            color: '#fabd2f',
        },
        {
            letter: 'M',
            color: 'blue',
        },
        {
            letter: 'O',
            color: 'red',
        },
    ];

    return (
        <Router>
            <header>
                <div className="logo">
                    <span>de A a Z</span>
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li>
                                <NavLink activeClassName="active-item" exact to="/">home</NavLink>
                            </li>
                            <li><span>escritores</span>
                                <ul>
                                    { writers.map((writer: any, index: number) => {
                                        return (
                                            <li>
                                                <div style={{backgroundColor: writer.color}}>
                                                    <NavLink activeClassName="active-item" exact to={"writer/" + writer.letter}>{writer.letter}</NavLink>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>

                            </li>
                            <li><span>categorias</span>
                                <ul>
                                    { categories.map((category: any, index: number) => {
                                        return (
                                            <li><NavLink activeClassName="active-item" exact to={"categories/" + category }>{category}</NavLink></li>
                                        )
                                    })}
                                </ul>

                            </li>
                            <li>
                                <NavLink activeClassName="active-item" exact to="/about">sobre nós</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="content">
                <Route path="/about" exact component={ About }></Route>
                <Route path="/posts" exact component={ Posts }></Route>
                <Route path="/write" exact component={ Writer}></Route>
                <Route path="/" exact component={ Posts }></Route>
            </div>
        </Router>
    );
}

export default AppRouter;




