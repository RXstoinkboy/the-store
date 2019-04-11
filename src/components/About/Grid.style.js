import styled from 'styled-components';
import {Title as MockTitle} from '../Shop/Shop.style';

export const Wrapper = styled.div`
    background: linear-gradient(-34deg, var(--mainGreen), var(--mainYellow));
    min-height: 90vh;
    width: 100%;
    padding: 10px 10px 10px 6vw;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    overflow: hidden;

    @media all and (max-width: 850px){
        overflow: visible;
    }

    @media all and (max-width: 500px){
        padding: 10px 10px 10px 11vw;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, minmax(250px, 1fr));
    }
`

export const Tile = styled.div`
    border-radius: 3px;
    box-shadow: 0px 0px 3px lightgrey;
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    z-index:3;
    transform: translateY(0) scale(1);
    transition: all .2s ease-out;

    &:hover{
        box-shadow: 0px 0px 7px grey;
        transform: translateY(-1px) scale(1.002);
    }

    &:focus{
        background: none;
    }
`
export const Title = styled(MockTitle)`
    font-size: 3rem;
    padding: 0;
    height: auto;
    z-index: 5;
    user-select: none;
    transition: all .3s ease-out;

    ${Tile}:hover > &{
        color: transparent;
        text-shadow: none;
    }

    @media all and (max-width: 850px){
        font-size: 2rem;
    }
`

export const Text = styled.p`
    width: 90%;
    position: absolute;
    font-size: 1.8rem;
    font-family: 'Lato';
    text-align: center;
    color: transparent;
    user-select: none;
    transition: all .3s ease-out;

    ${Tile}:hover > & {
        color: white;
    }

    &::after{
        content: '';
        width: 100px;
        height: 100px;
        background: ${props => props.color};
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        z-index: -1;
        transform: translate(-50%, -50%);
        transition: all .4s ease-out;

        ${Tile}:hover > & {
            width: 100vh;
            height: 100vh;
        }
    }
    @media all and (max-width: 850px){
        font-size: .8rem;
    }

`

export const Img = styled.img`
    opacity: 0;
    width: 100px;
    height: 100px;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 30;
    overflow: visible;
    transform: translate(-50%, -50%);
    transition: all .4s ease-out;
    
    ${Tile}:hover > & {
        opacity: 1;
    }
`

export const Boom = styled.div`
    width: 100px;
    height: 100px;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    border-radius: 50%;
    transition: all .4s ease-out;
    overflow: visible;
    transform: translate(-50%, -50%);
    background: ${props => props.color};
    
    ${Tile}:hover > & {
        opacity: 1;
        width: 200vh;
        height: 200vh;
    }
`
