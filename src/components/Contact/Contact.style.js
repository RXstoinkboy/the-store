import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(-200deg, var(--mainWhite), var(--mainPink));
    min-height: 90vh;
    width: 100%;
    padding: 10px 10px 10px 6vw;

    @media all and (max-width: 500px){
        padding: 10px 10px 10px 11vw;
    }
`