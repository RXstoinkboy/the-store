import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 5px;
    right: 5px;
    width: 50px;
    height: 50px;
    z-index: 50;
    background: var(--mainWhite);
    border-radius: 25px;
    transition: all .5s ease-out;

    &:hover{
        width: 80vw;
        background: var(--mainGrey);
    }
`

export const SearchInput = styled.input`
    position: absolute;
    top: 5px;
    left: 5px;
    height: 40px;
    width: 80%;
    border-radius: 20px;
    background: transparent;
    border: none;
    color: transparent;
    padding: 0 15px;
    transition: all .3s ease-out;
    
    ${Wrapper}:hover > &{
        background: var(--mainWhite);
        color: black;
    }

    &:focus{
        outline: none;
    }

    @media all and (max-width: 500px){
        width: 65%;
    }
`

export const Icon = styled.svg`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
`

export const FilterIcon = styled(Icon)`
    right: 60px;
    fill: transparent;
    background: transparent;
    transition: all .3s ease-out;
    cursor: pointer;
    
    ${Wrapper}:hover > &{
        fill: black;
    }
`