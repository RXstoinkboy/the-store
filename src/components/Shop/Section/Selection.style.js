import styled from 'styled-components';
import posed from 'react-pose';

export const Wrapper = styled.div`
    grid-column: 2/-1;
    display: grid;
    grid-template-columns: 1fr;
    overflow-y: scroll;
    height: 90vh;
`

const PosedContainer = posed.div({
    hoverable: true,
    init: {
        filter: 'brightness(1)'
    },
    hover: {
        filter: 'brightness(1.1)'
    }
})

export const Container = styled(PosedContainer)`
    height: ${props => props.height};
    background: ${props => props.color};
    box-shadow: inset 0 0 70px hsla(0deg, 0%, 50%, .3);
    display: grid;
    grid-template-rows: 4fr 1fr;
    align-items: center;
    justify-items: center;
    cursor: pointer;

    @media all and (max-width: 850px){
        height: 25vh;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }

    @media all and (max-width: 500px){
        height: 25vh;
        grid-template-rows: 4fr 1fr;
        grid-template-columns: 1fr;
    }
`

export const Title = styled.h1`
    color: white;
    text-shadow: 0 0 20px hsla(0, 0%, 60%, 1);
    padding-left: 5vw;
    height: 10vh;
    font-size: 5rem;
    text-align: center;
    text-transform: capitalize;
    margin:0;

    @media all and (max-width: 500px){
        font-size: 3rem;
        height: 3rem;
    }
`

export const Img = styled.img`
    grid-row: 1/2;
    height: 70%;

    @media all and (max-width: 850px){
        grid-row: 1/-1;
        grid-column: 1/2;
    }

    @media all and (max-width: 500px){
        grid-row: 1/2;
        grid-column: 1/-1;
    }
`
export const Name = styled.h3`

`