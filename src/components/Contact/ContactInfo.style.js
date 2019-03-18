import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 1rem 0;
`

export const Address = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 1rem;
`

export const Line = styled.p`
    margin: .3rem 0;
    font-family: ${props => props.main ? 'Kaushan Script' : 'PT Sans Narrow'};
    font-size: ${props => props.main ? '1.5rem' : '1.2rem'};
    text-decoration: ${props => props.main ? 'underline' : 'none'};
    margin-bottom: ${props => props.main ? '.5rem' : '0'};
`
