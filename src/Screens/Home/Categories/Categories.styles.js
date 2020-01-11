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

export const ViewButton = styled(Link) `
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 3.5rem;
    border-radius: 40px;
    border: 0px solid;
    box-shadow: 0 3px 6px 0 rgba(229, 223, 223, 0.16);
    background-color: #15c0d4;
    min-width: 12rem;
    margin: 2rem 0rem;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3);
    -webkit-transition: all 2s; /* Safari prior 6.1 */
    transition: all 2s;
    &:hover {
       transform: scale(1.09);
       text-decoration: none;
    }
`

export const ViewAll = styled.p`
    font-family: Raleway;
    font-size: 1.5rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-bottom: 0;
`

export const Categ = styled.div`
    padding: 8%;
    min-height: 30rem;
    display: ${(props) => props.desktopUnVisible ? "none" : "block"};
    @media screen and (max-width: 490px) {
        padding: 2%;
        display: ${(props) => props.mobile ? "block" : "none"};
        flex-direction: ${(props) => props.reverse ? 'column-reverse' : 'column'};
    }
`

export const TextContainer = styled.div`
    text-align: left;
    display: flex;
    height: 30rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    margin-left: 1rem;
    margin-right: 5rem;
    padding: 10% 0;
    @media screen and (max-width: 490px) {
        margin-left: 0rem;
        margin-right: 0rem;
        height: 18rem;
        padding: 4% 0 ;
    }
    
`

export const TextDesc = styled.p`
    font-family: Raleway;
    font-size: 1.2rem;
    font-weight: normal;
    margin-left: 1rem;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    @media screen and (max-width: 490px) {
       text-align: center;
    }
`

export const WatchButton = styled.button`
    border-left: 12px solid #27f8e8;
    border: 0;
    width: 7rem;
    background: transparent;
    display: flex;
    height: 3rem;
    z-index: 10;
    text-align: center;
    min-width: 12rem;
    transition: all 0.3s;
    &:before {
        content: "";
        width: 4px;
        height: 3rem;
        transition: all 0.3s;
        background: ${(props) => props.purple ? '#ef78e8' : '#27f8e8'};
    }
    &:hover{
        &:before {
            background: ${(props) => props.purple ? '#ef78e8' : '#27f8e8'};
            width: 12rem;
        }
    }
    
    @media screen and (max-width: 490px) {
       align-self: center;
    }
`

export const WatchText = styled.p`
    font-family: Raleway;
    font-size: 1.4rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: 0;
    margin-left: 1.2rem;
    margin-top: 0.5rem;
    @media screen and (max-width: 490px) {
       margin-left: 2.2rem;
    }
`

export const CatImage = styled.div`
    height: 43rem;
    width: 33rem;
    align-self: flex-start;
    .gatsby-image-wrapper {
        height: 43rem;
        width: 33rem;
    }
    @media screen and (max-width: 490px) {
        height: 26rem;
        width: 100%;
        align-self: center;
        margin-top: 2rem;
        .gatsby-image-wrapper {
            height: 26rem;
            width: 100%;
            align-self: center;
        }
    }
`

export const CatImageBg = styled.div`
    position: absolute;
    z-index: -100;
    top: 3rem;
    left: 4rem;
    height: 43rem;
    width: 33rem;
    background-image: linear-gradient(to bottom, #0054d6, #55accb);
    @media screen and (max-width: 490px) {
        display: none;
    }
`
