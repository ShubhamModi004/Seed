import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    overflow: hidden;
    position: relative;
`

export const ContactHeader = styled.h2`
    font-family: Raleway;
    font-size: 4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    @media screen and (max-width: 490px) {
        text-align: center;
        font-size: 3rem;
    }
    
`

export const ContactSection = styled.div`
    z-index: 10;
    position: absolute;
    height: 400px;
    width: 400px;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -200px;
`

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    opacity: 0.76;
    background-color: rgba(128, 128, 128, 0.74);
`

export const InputField = styled.input`
    background: none;
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #fff;
    margin: 25px 0;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #fff;
        opacity: 1; /* Firefox */
        font-family: Raleway;
        font-size: 2rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: normal;
        text-align: left;
    }
`

export const TextField = styled.textarea`
    background: none;
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #fff;
    margin: 25px 0;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #fff;
        opacity: 1; /* Firefox */
        font-family: Raleway;
        font-size: 2rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: normal;
        text-align: left;
    }
`

export const SendButton = styled.button`
    background: #fff;
    border-radius: 2px;
    align-self: center;
    margin-left: 150px ;
    margin-top: 20px;
    width: 100px;
    min-height: 3.8rem;
    font-family: Raleway;
    font-size: 1.4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: center;
    color: #1ead7c;
`