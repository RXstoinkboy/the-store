import styled from 'styled-components';

export const Wrapper = styled.div`
    grid-column: 1/2;
    background: ${props=>props.color};
    width: 100%;
    /* height: 100%; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 3fr 1fr;
    justify-items: center;
    align-items: center;

    @media all and (orientation: portrait) and (max-width: 450px){
        grid-column: 1/-1;
        grid-row: 1/2;
    }
`
export const Img = styled.img`
    max-height: 90%;
    max-width: 90%;
    padding: 2rem;
    grid-column: 1/-1;
    grid-row: 1/2;
`