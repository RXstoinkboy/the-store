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
                    <path d="M7,12.09V0H5v12.09C2.164,12.567,0,15.028,0,18c0,2.972,2.164,5.433,5,5.91V48h2V23.91c2.836-0.477,5-2.938,5-5.91
                        C12,15.028,9.836,12.567,7,12.09z M7,21.858C6.679,21.941,6.348,22,6,22s-0.679-0.059-1-0.142c-1.721-0.447-3-2-3-3.858
                        c0-1.858,1.279-3.411,3-3.858C5.321,14.059,5.652,14,6,14s0.679,0.059,1,0.142c1.721,0.447,3,2,3,3.858
                        C10,19.858,8.721,21.411,7,21.858z M43,16.09V0h-2v16.09c-2.836,0.477-5,2.938-5,5.91c0,2.972,2.164,5.433,5,5.91V48h2V27.91
                        c2.836-0.477,5-2.938,5-5.91C48,19.028,45.836,16.567,43,16.09z M43,25.858C42.679,25.941,42.348,26,42,26
                        c-0.348,0-0.679-0.059-1-0.142c-1.721-0.447-3-2-3-3.858c0-1.858,1.279-3.411,3-3.858C41.321,18.059,41.652,18,42,18
                        c0.348,0,0.679,0.059,1,0.142c1.721,0.447,3,2,3,3.858C46,23.858,44.721,25.411,43,25.858z M25,27.09V0h-2v27.09
                        c-2.836,0.477-5,2.938-5,5.91c0,2.972,2.164,5.433,5,5.91V48h2v-9.09c2.836-0.477,5-2.938,5-5.91
                        C30,30.028,27.836,27.567,25,27.09z M25,36.858C24.679,36.941,24.348,37,24,37s-0.679-0.059-1-0.142c-1.721-0.447-3-2-3-3.858
                        c0-1.858,1.279-3.411,3-3.858C23.321,29.059,23.652,29,24,29s0.679,0.059,1,0.142c1.721,0.447,3,1.999,3,3.858
                        C28,34.858,26.721,36.411,25,36.858z"/>
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