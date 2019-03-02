import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-left: 5vw;
    height: 100vh;
    width: 100%;
    background: green;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

    @media all and (min-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }
`

export const Container = styled.div`
    height: 50vh;
    background: ${props => props.color};
    box-shadow: inset 0 0 70px hsla(0deg, 0%, 0%, .3);
`