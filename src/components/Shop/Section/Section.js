import React, { Component } from 'react';
// import categories from '../categories';
import Display from './Display';
import Selection from './Selection';
import {Wrapper, SectionWrapper} from './Section.style';
import {Title} from '../Shop.style';

import {connect} from 'react-redux';
import manageItemsInShop from '../../../reducers/manageItemsInShop';
import {selectCurrentItems} from '../../../actions/selectCurrentItems';
import {displayHoveredItem} from '../../../actions/displayHoveredItem';

class Section extends Component {
    state = {
        pathname: window.location.pathname,
        title: '',
        currentHover: {},
        modalOpened: false
    }

    handleMouseEnter =e=>{
        this.setState({currentHover: this.props.items[e.target.id]}, ()=>{console.log(this.state.currentHover)});
    }

    openModal =()=>{
        this.setState(prevState=>{
            return {modalOpened: !prevState.modalOpened}
        })
    }

    componentDidMount(){
        const {pathname} = this.state;

        this.props.selectCurrentItems(pathname);
        
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
                // items: selectCurrentItems(),
                // currentHover: this.props.items
            }, ()=>{console.log(this.state.currentHover);})
            
    }

    render() {
        const {pathname, title, modalOpened, currentHover} = this.state;
        return (
            <SectionWrapper>
                <Title>{title}</Title>
                <Wrapper>
                    <Display 
                        pathname={pathname} 
                        modalOpened={modalOpened}
                        currentHover={currentHover}
                        openModal={this.openModal}/>
                    <Selection 
                        pathname={pathname} 
                        handleMouseEnter={this.handleMouseEnter} 
                        items={this.props.items}/>
                </Wrapper>
            </SectionWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.manageItemsInShop
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        selectCurrentItems: path => {dispatch(selectCurrentItems(path))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Section);