import styled from 'styled-components'

export const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    height: 130px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 3% 10%;
`

export const Logo = styled.img`
    width: 80px;
`


export const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

export const Links = styled.h3`
    font-family: Raleway;
    font-size: 1.5rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    cursor: pointer;
    text-decoration: none;
    text-shadow: 4px 3px 3px rgba(48,48,48,0.46);
    &:hover{
        text-decoration: none;
    }
`