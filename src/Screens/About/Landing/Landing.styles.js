import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
`

export const Video = styled.video`
    position: absolute;
    top: 50%; 
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%; 
    min-height: 100%; 
    width: auto; 
    height: auto;
    z-index: -1000; 
    overflow: hidden;
`


export const ViewButton = styled.button`
    display: flex;
    justify-content: center;
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
       transform: scale(1.09)
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

export const ContactButton = styled.div`
    position: absolute;
    top: 70%; 
    left: 45%;
    @media screen and (max-width: 490px) {
        left: 39%;
    }
`