import React, { Component } from 'react';
import {Wrapper, Container, Title, Img, Name, ShopWrapper} from './Shop.style.js';
import categories from './categories';
import {Link} from 'react-router-dom';

class Shop extends Component {
    render() {
        const colors = ['var(--mainPink)', 'var(--mainYellow)', 'var(--mainBlue)', 'var(--mainGreen)'];
        return (
            <ShopWrapper>
                <Title>Categories</Title>
                <Wrapper>
                    {Object.keys(categories).map((item, index) => {
                        return (
                            <Link to={`/shop/${categories[item].link}`} key={index}>
                                <Container height='45vh' color={colors[index]}>
                                    <Img src={categories[item].img}/>
                                    <Name>{categories[item].name}</Name>
                                </Container>
                            </Link>
                        )
                    })}
                </Wrapper>
            </ShopWrapper>
        );
    }
}

export default Shop;

