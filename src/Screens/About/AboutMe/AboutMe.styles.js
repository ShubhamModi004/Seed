import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    overflow: hidden;
    position: relative;
    padding: 8% 20%;
    @media screen and (max-width: 490px) {
        padding: 2% 8%;
    }
`

export const Section = styled.div`
    height: 10rem;
    border-bottom: 1px solid #000000;
    @media screen and (max-width: 490px) {
        height: 25rem;
    }
    
`

export const GreenSpan = styled.h2`
    text-align: center;
    font-family: Raleway;
    font-size: 1.4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    color: #1ead7c;
`

export const Content = styled.p`
    font-family: Raleway;
    font-size: 2rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    margin-bottom: 10;
`

export const AboutContainer = styled.div`
    background: #fff;
    border-radius: 5;
    min-height: 20rem;
    box-shadow: 2px 3px 6px 1px rgba(229, 223, 223, 0.46);
    padding: 5% 5%;
    margin: 10% 0;
`

export const AboutHeader = styled.h1`
    font-family: Raleway;
    font-size: 3rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    @media screen and (max-width: 490px) {
        text-align: center;
    }
`

export const AboutContent = styled.p`
    font-family: Raleway;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin: 4% 0;
    @media screen and (max-width: 490px) {
        text-align: center;
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



export const CategRow = styled.div`
`

export const Categ = styled.div`
    width: 100%;
    height: 20rem;
    padding: 0 !important;
    cursor: pointer;
    margin-top: 25px;
    border-radius: 18px;
    box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.35);
`