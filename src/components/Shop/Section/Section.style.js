import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 0 0 0 5vw;
    width: 100vw;
    height: 90vh;
    margin: 0;

    @media all and (orientation: portrait) and (max-width: 450px){
        grid-template-columns: 1fr;
        grid-template-rows: 4fr 1fr;
    }
`