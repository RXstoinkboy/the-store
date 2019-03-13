import styled from 'styled-components';
import posed from 'react-pose';

export const Wrapper = styled.div`
    grid-column: 1/2;
    background: ${props=>props.color};
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 3fr 1fr;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    padding-bottom: 1rem;

    @media all and (orientation: portrait) and (max-width: 450px){
        grid-column: 1/-1;
        grid-row: 1/2;
    }
`
export const Img = styled.img`
    max-height: 80%;
    max-width: 90%;
    padding: 2rem;
    grid-column: 1/-1;
    grid-row: 1/2;
`

export const Controls = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
`

const PosedButton = posed.button({
    pressable: true,
    hoverable: true,
    init: {scale: 1},
    press: {scale: 0.9},
    hover: {scale: 1.05}
})

export const Button = styled(PosedButton)`
    margin: ${props => props.left ? '0 .5rem 0 0' : '0 0 0 .5rem'};
    padding: 10px;
    border-radius: 3px;
    text-transform: uppercase;
    cursor: ${props => props.active ? 'pointer' : 'disabled'};
    transition: all .3s ease;
    color: white;
    background: ${props => props.active ? 'hsla(210deg, 40%, 50%, 1)' : 'hsla(210deg, 15%, 60%, 1)'};
    border: ${props => props.active ? '2px solid hsla(210deg, 40%, 50%, 1)' : '2px solid hsla(210deg, 15%, 60%, 1)'};
    
    &:focus{
        outline: none;
    }

    &:hover{
        background: ${props => props.active ? 'hsla(0deg, 0%, 100%, 1)' : 'hsla(210deg, 15%, 60%, 1)'};
        border: ${props => props.active ? '2px solid white' : '2px solid hsla(210deg, 15%, 60%, 1)'};
        color: ${props => props.active ? 'hsla(210deg, 40%, 50%, 1)' : 'white'};
    }
`

export const Info = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
`

export const Text = styled.h2`
    color: white;
    text-shadow: 0 0 20px hsla(0, 0%, 60%, 1);
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;
    margin: 0 .5rem 0 0;
    padding: .3rem;
    font-family: 'PT Sans Narrow', sans-serif;

    @media all and (max-width: 850px){
        font-size: 1.5rem;
    }
`

const PosedMoreInfo = posed.svg({
    hoverable: true,
    init: {
        scale: 1,
        y: 0,
        filter: `drop-shadow(0 3px 15px hsl(0, 0%, 20%)`
    },
    hover: {
        scale: 1.04,
        y: -2,
        filter: `drop-shadow(0 5px 7px hsl(0, 0%, 20%)`
    }
})

export const MoreInfo = styled(PosedMoreInfo)`
    height: 2rem;
    width: 2rem;
    cursor: pointer;

    @media all and (max-width: 850px){
        height: 1.5rem;
        width: 1.5rem;
    }
`

export const Details = styled.div`
    grid-column: 1/-1;
    grid-row: 2/-1;
    width: 100%;
    height: 100%;
`