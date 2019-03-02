import React, { Component } from 'react';
import {Wrapper, Container} from './Shop.style.js'

class Shop extends Component {
    render() {
        return (
            <Wrapper>
                <Container color='var(--mainPink)'/>
                <Container color='var(--mainBlue)'/>
                <Container color='var(--mainYellow)'/>
                <Container color='var(--mainGreen)'/>
            </Wrapper>
        );
    }
}

export default Shop;