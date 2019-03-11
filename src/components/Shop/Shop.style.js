import styled from 'styled-components';
import posed from 'react-pose';

export const ShopWrapper = styled.div`
    background: linear-gradient(135deg, hsla(222, 50%, 80%, .3), hsla(100, 50%, 80%, .4));
`

export const Wrapper = styled.div`
    padding-left: 5vw;
    width: 100%;
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

    @media all and (min-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }

    @media all and (max-width: 450px){
        grid-template-columns: 1fr;
    }
`

const PosedContainer = posed.div({
    hoverable: true,
    init: {
        filter: 'brightness(1)'
    },
    hover: {
        filter: 'brightness(1.15)'
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
        height: 30vh;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }

    @media all and (max-width: 500px){
        height: 30vh;
        grid-template-rows: 4fr 1fr;
        grid-template-columns: 1fr;
    }
`

export const Title = styled.h1`
    color: white;
    text-shadow: 0 0 20px hsla(0, 0%, 60%, 1);
    padding: 0 0 0 5vw;
    height: 10vh;
    font-size: 8vh;
    text-align: center;
    text-transform: capitalize;
    margin: 0;
    font-family: 'Kaushan Script', cursive;
`

export const Img = styled.img`
    grid-row: 1/2;
    max-height: 70%;
    max-width: 80%;

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
    grid-row: 2/3;
    font-size: 2.5rem;
    margin: 0;
    text-transform: capitalize;
    text-align: center;
    color: white;
    text-shadow: 0 0 15px hsla(0, 0%, 60%, 1);
    font-family: 'PT Sans Narrow', sans-serif;

    @media all and (max-width: 850px){
        grid-row: 1/-1;
        grid-column: 2/3;
    }

    @media all and (max-width: 500px){
        grid-row: 2/3;
        grid-column: 1/-1;
        font-size: 1.7rem;
    }
`