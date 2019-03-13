import React, { Component } from 'react';
import {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About/About';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Section from './Shop/Section/Section';
import Navigation from './Navigation/Navigation';
import posed, {PoseGroup} from 'react-pose';

const RoutesContainer = posed.div({
    enter:{
        opacity: 1,
        delay: 200,
        beforeChildren: true
    },
    exit: {opacity: 0}
})

class App extends Component {
    render() {
        return (
            <Route
                render={({location}) => (

                    <Fragment>
                        <Navigation />
                        <PoseGroup>
                            <RoutesContainer key={location.key}>
                                <Switch location={location}>
                                    <Route exact path='/about' render={(props)=><About {...props}/>} key='1'/>
                                    {['/shop', '/'].map(item => {
                                        return <Route exact path={item} render={(props)=><Shop {...props}/>} key='2'/>
                                    })}
                                    <Route exact path='/cart' render={(props)=><Cart {...props}/>} key='3'/>
                                    <Route exact path='/contact' render={(props)=><Contact {...props}/>} key='4'/>
                                    <Route exact path='/shop/:section' render={(props)=> <Section {...props} />} key='5'
                                    />
                                </Switch>
        
                            </RoutesContainer>
                        </PoseGroup>
                    </Fragment>
                )}
            />
        );
    }
}

export default App;