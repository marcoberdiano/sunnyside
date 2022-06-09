import styled from 'styled-components';

export const Button = styled.button`

    position: relative;
    border: none;
    color: 'hsl(212, 27%, 19%)';
    background-color: transparent;
    font-family: $Fraunces;
    font-size: 1em;
    letter-spacing: 2px;
    font-weight: 9  00;
    text-transform: uppercase;
    
    &:hover{
        cursor: pointer;
    }

    &::before{
        content: '';
        width: 100%;
        background-color: ${ props => props.color === 'Transform your brand' ? 'hsl(51, 100%, 49%)' : 'hsl(7, 99%, 70%)'};
        position: absolute;
        bottom: 0;
        height: 10px;
        z-index: -1;
        border-radius: 5px;
        opacity: 0.3;
    
}`

