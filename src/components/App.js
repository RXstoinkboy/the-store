import React, { Component, Suspense } from 'react';
import {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';
import posed, {PoseGroup} from 'react-pose';

const About = React.lazy(()=> import('./About/About'));
const Shop = React.lazy(()=> import('./Shop/Shop'));
const Cart = React.lazy(()=> import('./Cart/Cart'));
const Contact = React.lazy(()=> import('./Contact/Contact'));
const Section = React.lazy(()=> import('./Shop/Section/Section'));
const ContactFormSuccess = React.lazy(()=> import('./Contact/ContactFormSuccess'));
const OrderFormSuccess = React.lazy(()=> import('./Cart/OrderForm/OrderFormSuccess'));

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
                        <Suspense fallback={<Loader />}>
                            <PoseGroup>
                                <RoutesContainer key={location.pathname}>
                                    <Switch location={location}>
                                        <Route exact path='/about' render={(props)=><About {...props}/>} key='1'/>
                                        {['/shop', '/'].map(item => {
                                            return <Route exact path={item} render={(props)=><Shop {...props}/>} key='2'/>
                                        })}
                                        <Route exact path='/cart' render={(props)=><Cart {...props}/>} key='3'/>
                                        <Route exact path='/contact' render={(props)=><Contact {...props}/>} key='4'/>
                                        <Route exact path='/shop/:section' render={(props)=> <Section {...props} />} key='5'/>
                                        <Route exact path='/contact/success' render={(props)=> <ContactFormSuccess {...props} />} key='6' />
                                        <Route exact path='/cart/success' render={(props)=> <OrderFormSuccess {...props} />} key='7' />
                                    </Switch>
                                </RoutesContainer>
                            </PoseGroup>
                        </Suspense>
                    </Fragment>
                )}
            />
        );
    }
}

export default App;
