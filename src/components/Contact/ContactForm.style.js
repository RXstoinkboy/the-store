import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    justify-items: stretch;
    align-items: center;

    @media all and (max-width: 500px){
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`

export const Title = styled.h2`
    padding: .5rem;
    margin: .5rem;
    font-size: 2.5rem;
`

export const Input = styled.input`
    padding: .5rem 0;
    margin: .3rem 0;
    font-size: 1rem;
    background: transparent;
    border: none;
    box-shadow: 0 1px 0 gray;
`

export const Name = styled.label`
    grid-column: 1/2;
    display: flex;
    flex-flow: column nowrap;
    padding: .5rem;
    margin: .5rem;
    font-weight: bold;
    flex-flow: 'Lato';
    font-size: .7rem;

    @media all and (max-width: 500px){
        grid-column: 1/-1;
    }
`

export const LastName = styled(Name)`
    grid-column: 2/3;

    @media all and (max-width: 500px){
        grid-column: 1/-1;
    }
`

export const Mail = styled(Name)`
    grid-column: 1/-1;

    @media all and (max-width: 500px){
        grid-column: 1/-1;
    }
`

export const Message = styled(Name)`
    grid-column: 1/-1;

    @media all and (max-width: 500px){
        grid-column: 1/-1;
    }
`