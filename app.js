// CLIENT ENTRY FILE
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Provider, connect } from 'react-redux';

import store from './client/store';
import { history } from './client/history.js';

import './client/index.scss';

import { Home, About, Bio, Resume, Portfolio, Nav, Footer, Master } from './client/components';


// // specify basename below if running in a subdirectory or set as "/" if app runs in root
// const appHistory = useRouterHistory(createHistory)({
//     basename: "/app2"
// });

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={history}>
            <div>
                <Nav />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/bio" component={Bio} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/portfolio/:cat" component={Portfolio} />
                    <Route exact path="/modal" component={Master} />
                    <Route exact path="/master" component={Master} />
                    <Route component={Home} />
                    <Route path='*' component={Home} />
                </Switch>

                <Footer />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app') // <== the id of the div in your index.html
);

// ReactDOM.render(
// <Provider store={store}>
//   {/* rest of your app goes here! */}
//   </Provider>,
//   document.getElementById('yourApp')
// );