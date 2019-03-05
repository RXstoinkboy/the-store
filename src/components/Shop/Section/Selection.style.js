import styled from 'styled-components';
import posed from 'react-pose';

export const Wrapper = styled.div`
    grid-column: 2/-1;
    display: grid;
    grid-template-columns: 1fr;
    overflow-y: scroll;
    height: 90vh;

    @media all and (orientation: portrait) and (max-width: 450px){
        grid-column: 1/2;
        grid-row: 2/3;
        ${props => `grid-template-columns: repeat(${props.columns}, 1fr)`};
        height:100%;
    }
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
    margin: 10px;
    border-radius: 10px;
    justify-items: center;
    cursor: pointer;
    max-width: 400px;

    &:first-child{
        margin: 0 10px 10px 10px;
    }
    &:last-child{
        margin: 10px 10px 0 10px;
    }
    

    @media all and (orientation: landscape) and (max-width: 850px){
        height: 25vh;
        max-height: 250px;
        grid-template-rows: 1fr;
        margin: 5px;
        &:first-child{
            margin: 0 5px 5px 5px;
        }
        &:last-child{
            margin: 5px 5px 0 5px;
        }
    }

    @media all and (orientation: portrait) and (max-width: 450px){
        height: auto;
        width: 40vw;
        grid-template-rows: 4fr 1fr;
        margin: 5px;

        &:first-child{
            margin: 5px 5px 5px 0;
        }
        &:last-child{
            margin: 5px 0 5px 5px;
        }
    }
`

export const Img = styled.img`
    grid-row: 1/2;
    max-height: 90%;
    max-width: 90%;
`
export const Name = styled.h3`
    color: white;
    grid-row: 2/3;
    text-shadow: 0 0 20px hsla(0, 0%, 60%, 1);
    font-size: 1.5rem;
    text-transform: capitalize;
    margin:0;
    text-align: center;

    @media all and (max-width: 850px){
        font-size: 1rem;
        height: 2rem;
    }
`