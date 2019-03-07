import styled from 'styled-components';
import posed from 'react-pose';
import {Button} from '../Shop/Section/Display.style';

export const ItemWrapper = styled.div`
    display: grid;
    margin: 20px 1rem;
    padding-bottom: 10px;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
    border-bottom: 1px solid var(--mainGrey);

    @media all and (max-width: 800px){
        grid-template-columns: repeat(4, 1fr);
    }
`

export const Miniature = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--mainBlack);
    box-shadow: 0 0 15px hsla(0, 0%, 50%, .4), 0 5px 10px hsla(0, 0%, 30%, .6);
    
    @media all and (max-width: 800px){
        grid-column: 1/2;
    }
`

export const Name = styled.h2`
    font-weight: 600;
    text-align: center;

    @media all and (max-width: 800px){
        grid-column: 1/2;
    }
`

export const AmountWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    @media all and (max-width: 800px){
        grid-row: 1/3;
        grid-column: 2/3;
        align-self: center;
    }

    @media all and (max-width: 500px){
        flex-flow: column nowrap;
    }
`

const PosedMore = posed.button({
    hoverable: true,
    init:{
        boxShadow: '0 0 15px hsla(0, 0%, 50%, .4), 0 5px 10px hsla(0, 0%, 30%, .6)',
        y: 0,
        scale: 1
    },
    hover:{
        boxShadow: '0 0 10px hsla(0, 0%, 50%, .4), 0 7px 8px hsla(0, 0%, 30%, .6)',
        y: -2,
        scale: 1.02
    }
})

export const More = styled(PosedMore)`
    width: 50px;
    height: 50px;
    padding-bottom: 5px;
    border-radius: 50%;
    background: var(--mainBlue);
    color: white;
    font-weight: bold;
    font-size: 2rem;
    border: none;
    cursor: pointer;
`

export const Amount = styled.input`
    margin: .8rem;
    font-size: 1.5rem;
    color: white;
    text-shadow: 0 2px 5px black;
    width: 3rem;
    text-align: center;
    border-radius: 5px;
    padding: .3rem;
    border: 1px solid var(--mainGrey);
    background: transparent;

    &:focus{
        outline: none;
    }
`

export const Less = styled(More)`

`

export const SubTotal = styled(Name)`
    @media all and (max-width: 800px){
        grid-row: 1/3;
        grid-column: 3/4;
        align-self: center;
    }
`

export const Delete = styled.svg`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;

    @media all and (max-width: 800px){
        grid-row: 1/3;
        grid-column: -2/-1;
        align-self: center;
    }
`