import React from 'react';
import {Wrapper} from './Selection.style';
import {Container, Img, Name} from './Selection.style';

const Selection = props => {
    const {items, handleMouseEnter} = props;
    return (
        <Wrapper>
            {
                Object.keys(items).map(item => {
                    return (
                        <Container 
                            height='30vh' 
                            color={items[item].color} 
                            onMouseEnter={handleMouseEnter}
                            id={items[item].id}>
                            <Img src={items[item].img} id={items[item].id}/>
                            <Name id={items[item].id}>{items[item].name}</Name>
                        </Container>
                    )
                })
            }

            
        </Wrapper>
    );
};

export default Selection;