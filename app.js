// CLIENT ENTRY FILE
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './client/store/';
import './client/index.scss';

import Home from './client/components/Home';
import About from './client/components/About';
import Bio from './client/components/Bio';
import Resume from './client/components/Resume';
import Portfolio from './client/components/Portfolio';
import Nav from './client/components/Nav';
import Footer from './client/components/Footer';


ReactDOM.render(

    <Provider store={store}>
        <Router>
            <div>
                {/* NAV BAR */}
                <Nav />

                {/* BODY */}
                <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/bio" component={Bio} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    {/*<Route exact path="/campuses/new" component={NewCampus} />*/}
                    {/*<Route exact path="/students/edit/:studentId" component={NewStudent} />*/}
                    {/*<Route exact path="/campuses/edit/:campusId" component={NewCampus} />*/}
                    {/*<Route exact path="/students/view/:studentId" component={SingleStudent} />*/}
                    {/*<Route exact path="/campuses/view/:campusId" component={SingleCampus} />*/}
                    {/*<Route path="/readme" component={ReadMe} />*/}
                    {/*<Route path="/video" component={Video} />*/}
                    <Route component={Home} />
                </Switch>

                {/*FOOTER*/}
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