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

