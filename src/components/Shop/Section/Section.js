import React, { Component } from 'react';
// import categories from '../categories';
import Display from './Display';
import Selection from './Selection';
import {Wrapper, SectionWrapper} from './Section.style';
import {Title} from '../Shop.style';

import {connect} from 'react-redux';

//actions
import {addItemToCart} from '../../../actions/addItemToCart';
import {hoverItemToDisplay} from '../../../actions/hoverItemToDisplay';
import {displayCurrentCategory} from '../../../actions/displayCurrentCategory';

import PropTypes from 'prop-types';

class Section extends Component {
    state = {
        pathname: window.location.pathname,
        title: '',
        // id: '',
        modalOpened: false
    }

    handleMouseEnter =e=>{
        this.props.hoverItemToDisplay(e.target.id);
    }

    handleClick = () => {
        this.props.addItemToCart(this.props.currentHover);
    }

    openModal =()=>{
        this.setState(prevState=>{
            return {modalOpened: !prevState.modalOpened}
        })
    }

    componentDidMount(){        
        const {pathname} = this.state;
        
        this.props.displayCurrentCategory(pathname);

        // set initial rendered item in each section
        if(pathname === '/shop/boots' && this.props.currentHover !== 'blackBoots'){
            this.props.hoverItemToDisplay('blackBoots');
        }else if (pathname === '/shop/sneakers' && this.props.currentHover !== 'blackSneakers'){
            this.props.hoverItemToDisplay('blackSneakers');
        }else if (pathname === '/shop/bags' && this.props.currentHover !== 'brownBag'){
            this.props.hoverItemToDisplay('brownBag');
        }else if (pathname === '/shop/womenshoes' && this.props.currentHover !== 'blackShoes'){
            this.props.hoverItemToDisplay('blackShoes');
        }

        const selectTitle = () => {
            switch(pathname){
                case '/shop/sneakers':
                    return 'sneakers';
                case '/shop/boots':
                    return 'boots';
                case '/shop/bags':
                    return 'bags';
                case '/shop/womenshoes':
                    return `women's shoes`;
                default:
                    return pathname;
                }
            }

        this.setState({
            title: selectTitle(),
        });  
    }

    render() {
        const {pathname, title, modalOpened} = this.state;
        
        return (
            <SectionWrapper>
                <Title>{title}</Title>
                <Wrapper>
                    <Display 
                        pathname={pathname} 
                        modalOpened={modalOpened}
                        currentHover={displayHoveredItem(this.props.allItems, this.props.currentHover)}
                        openModal={this.openModal}
                        handleClick={this.handleClick}
                        handleAddToLocalStorage={this.handleAddToLocalStorage}
                        // active={toggleOrderActivity(this.props.allItems)}
                        />
                    <Selection 
                        pathname={pathname} 
                        handleMouseEnter={this.handleMouseEnter}
                        items={getCurrentItems(this.props.allItems, this.props.category)}
                        />
                </Wrapper>
            </SectionWrapper>
        );
    }
}

// define method to filter items by category
const getCurrentItems = (state, category) => {
    return state.filter(item => item.category === category)
}

// change displayed item based on what is hovered
const displayHoveredItem = (state, id) => {
    return state.find(item => item.id === id)
}

const mapStateToProps = state => {
    return {
        category: state.currentCategory,
        allItems: state.allShopItems,
        currentHover: state.currentlyHoveredItem
    }
}

// // longer regular notation
// const mapDispatchToProps = dispatch =>{
//     return {
//         addItemToCart: item => {dispatch(addItemToCart(item))},
//         hoverItemToDisplay: id => {dispatch(hoverItemToDisplay(id))},
//         displayCurrentCategory: pathname => {dispatch(displayCurrentCategory(pathname))}
//     }
// }

// shorthand notation
const mapDispatchToProps = {
        addItemToCart,
        hoverItemToDisplay,
        displayCurrentCategory
}

Section.propTypes = {
    category: PropTypes.string.isRequired,
    allItems: PropTypes.array.isRequired,
    currentHover: PropTypes.string.isRequired,
    addItemToCart: PropTypes.func.isRequired,
    hoverItemToDisplay: PropTypes.func.isRequired,
    displayCurrentCategory: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Section);