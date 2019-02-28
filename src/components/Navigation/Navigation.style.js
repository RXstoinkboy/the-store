import styled from 'styled-components';
import posed from 'react-pose';

const PosedWrapper = posed.div({
    closed:{
        x: '-90%',
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 25
        }
    },
    open:{
        x: '0',
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 30
        }
    }
})

export const Wrapper = styled(PosedWrapper)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    background: white;
    display: flex;
    align-items: center;
`
export const Logo = styled.img`
    position: absolute;
    top: 2rem;
    height: 8rem;
    margin-left: 10vw;
`

// menu button
const PosedButton = posed.button({
    pressable: true,
    init: {
        scaleX: 1.04
    },
    press: {
        scaleX: .95
    },
    transition: {
        duration: 100
    },
})

export const Button = styled(PosedButton)`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 10%;
    border: none;
    background: white;
    box-shadow: 0 0 .3rem hsla(0deg, 0%, 90%, 1);
    transition: all .3s ease;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:focus{
        outline: none;
    }

    &:hover{
        box-shadow: 0 0 1rem hsla(0deg, 0%, 60%, 1);
        transform: scale(1.04);
    }
`

export const Bar = styled.div`
    width: 40px;
    height: 6px;
    border-radius: 3px;
    margin: 4px;
    background: black;
`

const PosedNavLinks = posed.ul({
    open:{
        staggerChildren: 50
    }
})

export const NavLinks = styled(PosedNavLinks)`
    list-style: none;
    width: 50%;
    padding: 0;
    margin-left: 10vw;
`

const PosedNavItem = posed.li({
    closed:{
        y: '100px',
        opacity: 0
    },
    open: {
        y: '0',
        opacity: 1
    }
})

export const NavItem = styled(PosedNavItem)`
    font-size: 3rem;
    margin: 1rem 0;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        color: var(--mainPink);
    }
`

// social media icons
const PosedMediaWrapper = posed.div({
    closed: {
        rotate: -90,
        x: '36.2vw',
        originX: '0%',
    },  
    open: {
        rotate: 0,
        x: '0'
    }
})
export const MediaWrapper = styled(PosedMediaWrapper)`
    position: absolute;
    bottom: 4rem;
    margin-left: 10vw;
    height: 2rem;

`

export const Img = styled.svg`
    height: 100%;
    margin-right: 1.5rem;
    cursor: pointer;
    color: black;
    transition: all .3s ease;

    &:hover{
        color: var(--mainPink);
    }
`