import React, { Component } from 'react';
import categories from '../categories';
import Display from './Display';
import Selection from './Selection';
import {Wrapper} from './Section.style';
import {Title} from '../Shop.style';
import sneakers from './sneakers';

class Section extends Component {
    state = {
        pathname: window.location.pathname,
        title: '',
        items: sneakers,
        currentHover: {}
    }

    handleMouseEnter =e=>{
        this.setState({
            currentHover: this.state.items[e.target.id]
        })
    }

    componentDidMount(){
        const {pathname} = this.state;
        console.log(pathname);
        const selectTitle = () => {
            switch(pathname){
                case '/shop/sneakers':
                console.log('sneakers');
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
            title: selectTitle()
        })
    }

    render() {
        const {pathname, title} = this.state;
        return (
            <React.Fragment>
                <Title>{title}</Title>
                <Wrapper>
                    <Display pathname={pathname} currentHover={this.state.currentHover}/>
                    <Selection pathname={pathname} handleMouseEnter={this.handleMouseEnter} items={this.state.items}/>
                </Wrapper>
            </React.Fragment>
        );
    }
}

export default Section;