import styled from 'styled-components';
import posed from 'react-pose';
import {Button} from './Display.style';

const PosedShade = posed.div({
    enter: { 
        opacity: 1 
    },
    exit: { 
        opacity: 0 
    }
})
const PosedModalDiv = posed.div({
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
        y: 200, 
        opacity: 0,
    }
})

export const Shade = styled(PosedShade)`
    position: fixed;
    top: 0;
    left: 5vw;
    right: 0;
    bottom: 0;
    background: hsla(0,0%,0%,.9);
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 450px){
        left: 10vw;
    }
`


export const ModalDiv = styled(PosedModalDiv)`
    position: absolute;
    display: grid;
    max-width: 500px;
    border-radius: 10px;
    padding: 2rem;
    color: white;
    font-size: 1.2rem;
    background: linear-gradient(135deg, hsla(222, 50%, 80%, .3), hsla(100, 50%, 80%, .8));
    text-align: justify;
`

export const CloseModal = styled(Button)`
    margin-top: 2rem;
`