import React, { Component } from 'react';
import {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import Cart from './Cart/Cart';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;