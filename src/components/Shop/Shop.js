import React, { Component, Fragment } from 'react';
import {Wrapper, Container, Title, Img, Name} from './Shop.style.js';
import categories from './categories';

class Shop extends Component {
    render() {
        const colors = ['var(--mainPink)', 'var(--mainYellow)', 'var(--mainBlue)', 'var(--mainGreen)'];
        return (
            <Fragment>
                <Title>Categories</Title>
                <Wrapper>
                    {Object.keys(categories).map((item, index) => {
                        return (
                            <Container color={colors[index]} key={index}>
                                <Img src={categories[item].img}/>
                                <Name>{categories[item].name}</Name>
                            </Container>
                        )
                    })}
                </Wrapper>
            </Fragment>
        );
    }
}

export default Shop;

