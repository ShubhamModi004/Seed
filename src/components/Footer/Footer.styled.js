import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100vw;
    overflow: hidden;
    position: relative;
    min-height: 30rem;
    margin-top: 3rem;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: solid 1px #95989a;
    padding: 4% 15%;
    @media screen and (max-width: 490px) {
        padding: 5% 8%;
        flex-direction: column;
    }
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.28), rgba(128, 128, 128, 0.2));
`

export const Section = styled.div`
    width: 30%;
    height: 20rem;
    @media screen and (max-width: 490px) {
        width: 90%;
        height: 16rem;
    }
`

export const FooterHeader = styled.h2`
    font-family: Raleway;
    font-size: 2.6rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: 4rem;
    @media screen and (max-width: 490px) {
        text-align: center;
        margin-bottom: 2rem;
    }
`

export const CallToActions = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 0.7rem;
    cursor: pointer;
    .Images {
        width: 2.5rem;
        @media screen and (max-width: 490px) {
            margin-left: -2rem;
            justify-content: center;
        }
    }
    @media screen and (max-width: 490px) {
            margin-left: -2rem;
            justify-content: center;
        }
`

export const ActionText = styled.p`
    font-family: Raleway;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-left: 2rem;
    margin-bottom: 0;
     @media screen and (max-width: 490px) {
        text-align: center;
    }
`