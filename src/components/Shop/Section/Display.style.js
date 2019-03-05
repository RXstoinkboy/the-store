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
    init: {scale: 1},
    press: {scale: 1.1}
})

export const Button = styled(PosedButton)`
    margin: ${props => props.left ? '0 .5rem 0 0' : '0 0 0 .5rem'};
    padding: 10px;
    background: transparent;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .3s ease;

    &:focus{
        outline: none;
    }

    &:hover{
        background: linear-gradient(135deg, hsla(222, 50%, 80%, .3), hsla(100, 50%, 80%, .4));
    }
`

export const Info = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
`

export const Name = styled.h2`

`

export const Price = styled.h3`

`

export const MoreInfo = styled.svg`

`

export const Details = styled.div`
    grid-column: 1/-1;
    grid-row: 2/-1;
    width: 100%;
    height: 100%;
`