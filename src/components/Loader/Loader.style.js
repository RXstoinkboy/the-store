import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    height: 100vh;
    width: 100%;
    background: linear-gradient(20deg, var(--mainBlue), var(--mainGreen));
`

export const TopSection = styled.div`
    position: relative;
    width: 250px;
    height: 40px;
`

export const LowerSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    
`
const leftToRight = keyframes`
    from {
        transform: translate(0, -50%);
    }
    to {
        transform: translate(230px, -50%);
    }
`
export const TopDot = styled.div`
    background: ${props => props.color};
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    transform: translate(0, -50%);
    top: 50%;
    left: 0;
    animation: 1s ${leftToRight} ease-in-out infinite alternate-reverse;
    ${props => `animation-delay: ${props.delay*0.2}s`};
`
const revealDot = keyframes`
    from {
        background: transparent;
    }
    to {
        background: black;
    }
`

export const BotDot = styled.div`
    width: 3px;
    height: 3px;
    margin: 2px;
    transform: translateY(10px);
    animation: 1s ${revealDot} linear infinite;
    ${props => `animation-delay: ${props.delay*0.1}s`};
`