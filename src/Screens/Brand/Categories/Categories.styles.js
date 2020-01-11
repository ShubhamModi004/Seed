import styled from 'styled-components'
import { Link } from "gatsby"

export const Container = styled.div`
    width: 100vw;
    overflow: hidden;
    position: relative;
    padding: 4% 15%;
    @media screen and (max-width: 490px) {
        padding: 2% 8%;
    }
`


export const Header = styled.h1`
    font-family: Raleway-ExtraBold;
    font-size: 4.3rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-top: 4rem;
    margin-bottom: 3rem;
     @media screen and (max-width: 490px) {
       text-align: center;
       font-size: 3rem;
       margin-bottom: 1rem;
       margin-top: ${(props) => props.mobileHeader ? "1rem" : "4rem"};
    }
`

export const GreenSpan = styled.span`
    color: #1ead7c;
`


export const CategRow = styled.div`
`

export const Categ = styled(Link) `
    width: 100%;
    height: 20rem;
    padding: 0 !important;
    cursor: pointer;
    margin-top: 25px;
    border-radius: 18px;
    box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.35);
`