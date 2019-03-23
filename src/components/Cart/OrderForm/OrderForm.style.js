import styled from 'styled-components';
import {Title as MockTitle} from '../../Contact/ContactForm.style';
import posed from 'react-pose';

const PosedOrderFormShade = posed.div({
    enter: { 
        opacity: 1 
    },
    exit: { 
        opacity: 0 
    }
})
const PosedOrderFormWrapper = posed.div({
    enter: { 
        y: 0, 
        opacity: 1,
        delay: 100,
        transition: {
            y: {
                type: 'spring',
                stiffness: 600,
                damping: 22
            }
        }
    },
    exit: { 
        y: -200, 
        opacity: 0,
    }
})

export const Shade = styled(PosedOrderFormShade)`
    width: 100%;
    height: 100%;
    position: fixed;
    background: hsla(0, 0%, 0%, .9);
    top: 0;
    left: 0;
    display: flex;
    z-index: 20;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 5vw;

    @media all and (max-width: 500px){
        padding: 0 0 0 10vw;
    }
`

export const Wrapper = styled(PosedOrderFormWrapper)`
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