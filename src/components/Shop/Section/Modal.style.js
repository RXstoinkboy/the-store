import styled from 'styled-components';
import {Button} from './Display.style';

export const Shade = styled.div`
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

export const ModalDiv = styled.div`
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