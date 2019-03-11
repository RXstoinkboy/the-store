import React from 'react';
import {Wrapper} from './Selection.style';
import {Container, Img, Name} from './Selection.style';
import PropTypes from 'prop-types';

const Selection = props => {
    const {items, handleMouseEnter} = props;
    return (
        <Wrapper columns={items.length}>
            {
                items.map(item => {
                    return (
                        <Container 
                            height='30vh' 
                            color={item.color} 
                            onMouseEnter={handleMouseEnter}
                            id={item.id}
                            key={item.id}
                            
                        >
                            <Img 
                                src={item.img} 
                                id={item.id}/>
                            <Name 
                                id={item.id}
                                color={item.color}
                                >
                                {item.name}
                            </Name>
                        </Container>
                    )
                })
            }

            
        </Wrapper>
    );
};

Selection.propTypes = {
    items: PropTypes.array.isRequired,
    handleMouseEnter: PropTypes.func.isRequired
}

export default Selection;