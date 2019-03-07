import React, { Component } from 'react';
import categories from '../categories';
import Display from './Display';
import Selection from './Selection';
import {Wrapper, SectionWrapper} from './Section.style';
import {Title} from '../Shop.style';
import sneakers from './sneakers';
import boots from './boots';
import heels from './heels';
import bags from './bags';

class Section extends Component {
    state = {
        pathname: window.location.pathname,
        title: '',
        items: {},
        currentHover: {},
        modalOpened: false
    }

    handleMouseEnter =e=>{
        this.setState({currentHover: this.state.items[e.target.id]})
    }

    openModal =()=>{
        this.setState(prevState=>{
            return {modalOpened: !prevState.modalOpened}
        })
    }

    componentDidMount(){
        const {pathname} = this.state;
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

        const selectCurrentItems =()=>{
            switch(pathname){
                case '/shop/sneakers':
                    return sneakers;
                case '/shop/boots':
                    return boots;
                case '/shop/bags':
                    return bags;
                case '/shop/womenshoes':
                    return heels;
                default:
                    return pathname;
            }
        }
        const startItem = Object.keys(selectCurrentItems())[0];

        this.setState({
            title: selectTitle(),
            items: selectCurrentItems(),
            currentHover: (selectCurrentItems())[startItem]
        })
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
                        currentHover={this.state.currentHover}
                        openModal={this.openModal}/>
                    <Selection 
                        pathname={pathname} 
                        handleMouseEnter={this.handleMouseEnter} 
                        items={this.state.items}/>
                </Wrapper>
            </SectionWrapper>
        );
    }
}

export default Section;