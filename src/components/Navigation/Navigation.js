import React, { Component } from 'react';
import {Wrapper, Button, NavLinks,NavItem, Bar, MediaWrapper, Img, Logo, Shade, Cart, CartWrapper, Number} from './Navigation.style';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

class Navigation extends Component {
    state={
        open: false
    }

    handleClick=()=>{
        this.setState({
            open: !this.state.open
        })
    }
    handleClose=()=>{
        this.setState({
            open: false
        })
    }
    render() {
        const trans = this.state.open ? {transform:"rotate(0deg)"} : {transform:"rotate(90deg)"};
        const shade = this.state.open ? 'block': 'none';
        return (
            <React.Fragment>
                <Wrapper key='wrapper' pose={this.state.open ? 'open' : 'closed'}>
                <CartWrapper onClick={()=>{this.setState({open: false})}}>
                    <Link to='/cart'>
                        <Cart viewBox="0 -16 512.00018 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3
                                c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1
                                C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462
                                H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41
                                c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"/>
                        </Cart>
                        <Number>{numberOfItemsInStore(this.props.allItems)}</Number>
                    </Link>
                </CartWrapper>
                <Link to="/">
                    <Logo src={logo}/>
                </Link>
                    <Button onClick={this.handleClick}>
                        <Bar />
                        <Bar />
                        <Bar />
                    </Button>
                    <NavLinks>
                        <Link to='/about' onClick={this.handleClick}>
                            <NavItem>About</NavItem>
                        </Link>
                        <Link to='/shop' onClick={this.handleClick}>
                            <NavItem>Shop</NavItem>
                        </Link>
                        <Link to='/cart' onClick={this.handleClick}>
                            <NavItem>Cart</NavItem>
                        </Link>
                        <Link to='/contact' onClick={this.handleClick}>
                            <NavItem>Contact</NavItem>
                        </Link>
                    </NavLinks>
                    <MediaWrapper>
                        <Img style={trans} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"/></Img>
                        <Img style={trans} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0"/><path d="m407 90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0"/><path d="m257 150c-57.890625 0-105 47.109375-105 105s47.109375 105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0"/></Img>
                        <Img style={trans} viewBox="0 -47 512.00203 512" xmlns="http://www.w3.org/2000/svg"><path d="m191.011719 419.042969c-22.140625 0-44.929688-1.792969-67.855469-5.386719-40.378906-6.335938-81.253906-27.457031-92.820312-33.78125l-30.335938-16.585938 32.84375-10.800781c35.902344-11.804687 57.742188-19.128906 84.777344-30.597656-27.070313-13.109375-47.933594-36.691406-57.976563-67.175781l-7.640625-23.195313 6.265625.957031c-5.941406-5.988281-10.632812-12.066406-14.269531-17.59375-12.933594-19.644531-19.78125-43.648437-18.324219-64.21875l1.4375-20.246093 12.121094 4.695312c-5.113281-9.65625-8.808594-19.96875-10.980469-30.777343-5.292968-26.359376-.863281-54.363282 12.476563-78.851563l10.558593-19.382813 14.121094 16.960938c44.660156 53.648438 101.226563 85.472656 168.363282 94.789062-2.742188-18.902343-.6875-37.144531 6.113281-53.496093 7.917969-19.039063 22.003906-35.183594 40.722656-46.691407 20.789063-12.777343 46-18.96875 70.988281-17.433593 26.511719 1.628906 50.582032 11.5625 69.699219 28.746093 9.335937-2.425781 16.214844-5.015624 25.511719-8.515624 5.59375-2.105469 11.9375-4.496094 19.875-7.230469l29.25-10.078125-19.074219 54.476562c1.257813-.105468 2.554687-.195312 3.910156-.253906l31.234375-1.414062-18.460937 25.230468c-1.058594 1.445313-1.328125 1.855469-1.703125 2.421875-1.488282 2.242188-3.339844 5.03125-28.679688 38.867188-6.34375 8.472656-9.511718 19.507812-8.921875 31.078125 2.246094 43.96875-3.148437 83.75-16.042969 118.234375-12.195312 32.625-31.09375 60.617187-56.164062 83.199219-31.023438 27.9375-70.582031 47.066406-117.582031 56.847656-23.054688 4.796875-47.8125 7.203125-73.4375 7.203125zm0 0"/></Img>
                        <Img style={trans} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0"/></Img>
                        <Img style={trans} viewBox="0 -91 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m166 60c34.667969 0 66.027344 17.789062 84 42.300781l42.597656-42.902343c-25.476562-33.128907-74.511718-59.398438-126.597656-59.398438-91.199219 0-166 73.800781-166 165s74.800781 165 166 165c75.601562 0 139.199219-50.699219 158.699219-120 4.199219-14.402344 6.300781-29.402344 6.300781-45v-15h-150v59.988281h79.5c-16.5 35.402344-52.800781 60.011719-94.5 60.011719-57.898438 0-106-47.101562-106-105s48.101562-105 106-105zm0 0"/><path d="m466 90h-60v45h-45v60h45v45h60v-45h46v-60h-46zm0 0"/></Img>
                    </MediaWrapper>
                </Wrapper>
                <Shade 
                key='shade' 
                style={{display: shade}}
                onClick={()=>{this.setState({open: false})}} 
                pose={this.state.open ? 'open' : 'closed'}/>
            </React.Fragment>
        );
    }
}

const numberOfItemsInStore = (state) => {
    let itemsInStore = 0;
    state.forEach(item => {
        if(item.inCart === true){
            itemsInStore = itemsInStore + item.ordered;
        }
    })
    return itemsInStore;
}

const mapStateToProps = (state) => {
    return {
        allItems: state.allShopItems,
    }
};

export default connect(mapStateToProps, null)(Navigation);

Navigation.propTypes = {
    allItems: PropTypes.array.isRequired
}