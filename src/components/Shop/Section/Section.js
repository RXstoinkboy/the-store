import React, { Component } from 'react';
// import categories from '../categories';
import Display from './Display';
import Selection from './Selection';
import {Wrapper, SectionWrapper} from './Section.style';
import {Title} from '../Shop.style';

import {connect} from 'react-redux';
import { withRouter } from 'react-router';
// reducers
import {currentCategory} from '../../../reducers/currentCategory';
import {currentlyHoveredItem} from '../../../reducers/currentlyHoveredItem';
import {allShopItems} from '../../../reducers/allShopItems';

//actions
import {addItemToCart} from '../../../actions/addItemToCart';
import {hoverItemToDisplay} from '../../../actions/hoverItemToDisplay';
import {displayCurrentCategory} from '../../../actions/displayCurrentCategory';


class Section extends Component {
    state = {
        pathname: window.location.pathname,
        title: '',
        id: '',
        // this.props.currentCategory
        // currentHover: '',
        modalOpened: false
    }

    handleMouseEnter =e=>{
        this.props.hoverItemToDisplay(e.target.id);
    }

    openModal =()=>{
        this.setState(prevState=>{
            return {modalOpened: !prevState.modalOpened}
        })
    }

    componentDidMount(){
        console.log('mounting');
        
        const {pathname} = this.state;
        
        this.props.displayCurrentCategory(pathname);

        // set initial rendered item in each section
        if(pathname === '/shop/boots' && this.props.currentHover !== 'blackBoots'){
            this.props.hoverItemToDisplay('blackBoots');
        } else if (pathname === '/shop/sneakers' && this.props.currentHover !== 'blackSneakers'){
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
                        openModal={this.openModal}/>
                    <Selection 
                        pathname={pathname} 
                        handleMouseEnter={this.handleMouseEnter}
                        items={getCurrentItems(this.props.allItems, this.props.currentCategory)}
                        />
                </Wrapper>
            </SectionWrapper>
        );
    }
}

// define method to filter items by category
const getCurrentItems = (state, category) => {
    return state.filter(item => {
        if(item.category === category){
            return item
        }
    })
}

// change displayed item based on what is hovered
const displayHoveredItem = (state, id) => {
    return state.find(item => {
        if(item.id === id){
            console.log(item);
            return item;
        }
    })
}

const mapStateToProps = state => {
    return {
        category: state.currentCategory,
        currentCategory: state.currentCategory,
        allItems: state.allShopItems,
        currentHover: state.currentlyHoveredItem,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addItemToCart: id => {dispatch(addItemToCart(id))},
        hoverItemToDisplay: id => {dispatch(hoverItemToDisplay(id))},
        displayCurrentCategory: pathname => {dispatch(displayCurrentCategory(pathname))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Section));