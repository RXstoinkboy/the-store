import React, { Component } from 'react';
import {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About/About';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Section from './Shop/Section/Section';
import Navigation from './Navigation/Navigation';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Switch>
                    <Route exact path='/about' render={(props)=><About {...props}/>} key='1'/>
                    {['/shop', '/'].map(item => {
                        return <Route exact path={item} render={(props)=><Shop {...props}/>} key='2'/>
                    })}
                    <Route exact path='/cart' render={(props)=><Cart {...props}/>} key='3'/>
                    <Route exact path='/contact' render={(props)=><Contact {...props}/>} key='4'/>
                    <Route exact path='/shop/:section' render={(props)=> <Section {...props} />} key='5'
                    />
                </Switch>
            </Fragment>
        );
    }
}

export default App;