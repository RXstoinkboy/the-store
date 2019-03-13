import styled from 'styled-components';
import posed from 'react-pose';

const PosedSectionWrapper = posed.div({
    enter: {opacity: 1},
    exit: {opacity: 0}
})

export const SectionWrapper = styled(PosedSectionWrapper)`
    max-height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, hsla(222, 50%, 80%, .3), hsla(100, 50%, 80%, .4));
`

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
        padding: 0 0 0 10vw;
    }
`