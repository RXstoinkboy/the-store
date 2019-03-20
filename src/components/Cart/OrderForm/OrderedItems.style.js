import styled from 'styled-components';

export const Wrapper = styled.article`
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    box-shadow: 0 2px 4px lightgrey;
    transition: all .3s ease;
    font-family: 'PT Sans Narrow';

    &:hover{
        box-shadow: 0 3px 7px grey;
        transform: scale(1.001);
    }
`

export const List = styled.ul`
    list-style: none;
    margin: 0.5rem 0 1.2rem 0;
    
`

export const Item = styled.li`
    margin: 0.3rem 0;
    font-family: 'PT Sans Narrow';
`