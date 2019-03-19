import styled from 'styled-components';
import {Title as MockTitle} from '../../Contact/ContactForm.style';

export const Shade = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: hsla(0, 0%, 0%, .9);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 5vw;

    @media all and (max-width: 500px){
        padding: 0 0 0 10vw;
    }
`

export const Wrapper = styled.div`
    max-width: 90%;
    max-height: 95%;
    border-radius: 3px;
    background: white;
    padding: 20px;
    overflow-y: scroll;
`

export const Title = styled(MockTitle)`
    @media all and (max-width: 500px){
        font-size: 2rem;
    }
`