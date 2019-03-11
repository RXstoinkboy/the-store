import styled from 'styled-components';
import { Button } from '../Shop/Section/Display.style';

export const Wrapper = styled.div`
    background: transparent;
    padding-left: 5vw;
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-flow: column nowrap;
    /* overflow: scroll; */

    @media all and (min-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }

    @media all and (max-width: 450px){
        grid-template-columns: 1fr;
        padding-left: 10vw;
    }
`

export const Total = styled.p`
    display: flex;
    justify-content: flex-end;
    margin-right: 10vw;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'PT Sans Narrow', sans-serif;
`

export const PurchaseButton = styled(Button)`
margin: 0 10vw 5vh auto;
`
