import styled from 'styled-components';
import { Button } from '../Shop/Section/Display.style';

export const Wrapper = styled.div`
    background: transparent;
    padding-left: 5vw;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-flow: column nowrap;

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
`

export const PurchaseButton = styled(Button)`
margin: 0 10vw 0 auto;
`
