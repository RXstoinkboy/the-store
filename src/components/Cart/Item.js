import React from 'react';
import image from '../../images/boots/blackBoots.png';
import {ItemWrapper, Miniature, Name, AmountWrapper, More, Amount, Less, SubTotal} from './Item.style';

const Item = () => {
    return (
        <ItemWrapper>
            <Miniature src={image}/>
            <Name>Black shoes</Name>
            <AmountWrapper>
                <More>+</More>
                <Amount>1</Amount>
                <Less>-</Less>
            </AmountWrapper>
            <SubTotal>$90</SubTotal>
        </ItemWrapper>
    );
};

export default Item;