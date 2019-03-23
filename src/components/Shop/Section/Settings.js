import React from 'react';
import {Wrapper, SearchInput, Icon, FilterIcon} from './Settings.style';

import {connect} from 'react-redux';

class Settings extends React.Component {
    render(){
        return (
            <Wrapper>
                <SearchInput 
                    type='search' 
                    placeholder='search...'
                    value={this.props.text}
                    onChange={this.props.handleChange}
                />
                <Icon 
                    version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                    x="0px" y="0px"
                    viewBox="0 0 48 48" 
                    style={{enableBackground:"new 0 0 48 48"}}
                >
                    <path d="M33.612,31.34c2.693-3.309,4.31-7.545,4.31-12.164c0-10.585-8.489-19.165-18.961-19.165C8.489,0.011,0,8.591,0,19.175
                        S8.489,38.34,18.961,38.34c4.824,0,9.214-1.836,12.56-4.835l11.366,11.488l2.117-2.14L33.612,31.34z M18.961,36.323
                        c-9.355,0-16.965-7.692-16.965-17.147c0-9.455,7.61-17.147,16.965-17.147c9.355,0,16.965,7.692,16.965,17.147
                        C35.927,28.631,28.316,36.323,18.961,36.323z"/>
                </Icon>
            </Wrapper>
        );
    }
};

const mapStateToProps = state => {
    return {
        allItems: state.allShopItems,
        currentCategory: state.currentCategory
    }
}

export default connect(mapStateToProps, null)(Settings);