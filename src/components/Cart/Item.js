import React from 'react';
import image from '../../images/boots/blackBoots.png';
import {ItemWrapper, Miniature, Name, AmountWrapper, More, Amount, Less, SubTotal, Delete} from './Item.style';
import PropTypes from 'prop-types';

const Item = props => {
    return (
        <ItemWrapper>
            <Miniature src={image}/>
            <Name>Black shoes</Name>
            <AmountWrapper>
                <Less>-</Less>
                <Amount value='10'/>
                <More>+</More>
            </AmountWrapper>
            <SubTotal>$90</SubTotal>
            <Delete version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="357px" height="357px" viewBox="0 0 357 357" style={{enableBackground:'new 0 0 357 357'}}>
	<g id="clear">
		<polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		"/>
	</g>
</Delete>
        </ItemWrapper>
    );
};

export default Item;

Item.propTypes = {
    item: PropTypes.object.isRequired
}