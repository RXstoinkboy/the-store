import React, { Component } from 'react';
import {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About/About';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Navigation from './Navigation/Navigation';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Switch>
                    <Route path='/about' component={About} />
                    {['/shop', '/'].map(item => {
                        return <Route exact path={item} component={Shop} />
                    })}
                    <Route path='/cart' component={Cart} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;