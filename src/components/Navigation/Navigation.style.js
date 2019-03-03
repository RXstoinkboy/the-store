import styled from 'styled-components';
import posed from 'react-pose';

const PosedWrapper = posed.div({
    closed:{
        x: '-90%',
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 25
        },
    },
    open:{
        x: '0',
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        },
    }
})

export const Wrapper = styled(PosedWrapper)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    z-index: 100;
    background: white;
    display: flex;
    align-items: center;
`

export const Logo = styled.img`
    position: absolute;
    top: 2rem;
    height: 8rem;
    margin-left: 10vw;

    @media all and (max-width: 850px) and (orientation: landscape){
        display: none;
    }
    @media all and (max-width: 450px) and (orientation: portrait){
        margin-left: 3vw;
        height: 7rem
    }
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
    width: 5vw;
    border: none;
    background: white;
    box-shadow: 0 0 .3rem hsla(0deg, 0%, 90%, 1);
    transition: all .3s ease;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: translateX(0);

    &:focus{
        outline: none;
    }

    &:hover{
        box-shadow: 0 0 1rem hsla(0deg, 0%, 60%, 1);
        transform: scale(1.04);
    }

    @media all and (max-width: 450px) and (orientation: portrait){
        right: -5vw;
        width: 10vw
    }
`

export const Bar = styled.div`
    width: 3vw;
    height: 6px;
    border-radius: 3px;
    margin: 4px;
    background: black;

    @media all and (max-width: 450px) and (orientation: portrait){
        width: 6vw
    }
`

const PosedNavLinks = posed.ul({
    open:{
        delayChildren: 50,
        staggerChildren: 30
    }
})

export const NavLinks = styled(PosedNavLinks)`
    list-style: none;
    width: 50%;
    padding: 0;
    margin-left: 10vw;

    @media all and (max-width: 450px) and (orientation: portrait){
        width: 80%;
        margin-left: 3vw;
    }
`

const PosedNavItem = posed.li({
    closed:{
        opacity: 0
    },
    open: {
        opacity: 1
    },
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

    @media all and (max-width: 850px){
        font-size: 2rem;
    }
`

// social media icons
const PosedMediaWrapper = posed.div({
    closed: {
        rotate: -90,
        x: '36vw',
        originX: '0%',
        bottom: '0rem'
    },  
    open: {
        rotate: 0,
        x: '0',
        bottom: '4rem'
    }
})
export const MediaWrapper = styled(PosedMediaWrapper)`
    position: absolute;
    margin-left: 10vw;
    
    height: 2rem;

    @media all and (max-width: 850px){
        bottom: .5rem;
        height: 1.2rem;
    }
`

export const Img = styled.svg`
    height: 100%;
    margin-right: 1rem;
    cursor: pointer;
    color: black;
    transition: all .3s ease;

    &:hover{
        color: var(--mainPink);
    }
    @media all and (max-width: 850px) and (orientation: landscape){
        display: none;
    }
    @media all and (max-width: 450px) and (orientation: portrait){
        display: none;
    }
`
const PosedShade = posed.div({
    open: { opacity: .85 },
    closed: { opacity: 0 }
  });

export const Shade = styled(PosedShade)`
    position: absolute;
    background: black;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`