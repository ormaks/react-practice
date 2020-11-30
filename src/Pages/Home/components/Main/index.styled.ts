import styled from "styled-components";
export const MainSection = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    `

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
        display: flex;
    justify-content: center;
    `
export const MainBackgroundWrapper = styled.div`
    min-width: 100vw;
    height: 100%;
    position: relative;
   
    `
export const MainBackgroundFirst = styled.img`
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    animation-duration: 3s;
    animation-name: fadeOut;
    animation-fill-mode: both;
    animation-delay: 1.1s;
    object-position: center;
    @keyframes fadeOut {
       from {
           opacity: 1;
       }
       to {
           opacity: 0;
       }
    }
   
    `
export const MainBackgroundSecond = styled.img`
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
   
    animation-duration: 1.5s;
    animation-name: fadeIn;
    animation-fill-mode: both;
    animation-delay: 1.1s;
    object-position: center;
    @keyframes fadeIn {
       from {
           opacity: 0;
       }
       to {
           opacity: 1;
       }
    }
    `
export const MainNumber = styled.div`

   
    `
export const NumberWrapper = styled.div`
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
    font-size: 200px;    
    font-family: fantasy;
    color: white;
    opacity: 0.5;
    
    `
export const NumberBlock = styled.div`
    height: 225px;
    width: 110px;
    
    overflow: hidden;
    position: relative;
    &:nth-child(1)>div{
        animation-delay: 1.9s;
    }
    &:nth-child(2)>div{
        animation-delay: 1.6s;
    }
    &:nth-child(3)>div{
        animation-delay: 1.3s;
    }
    &:nth-child(4)>div{
        animation-delay: 1s;
    }
    `
export const NumberItemContainer = styled.div`
    animation-duration: 1.5s;
    animation-name: countDown;
    animation-fill-mode: both;
    @keyframes countDown {
       from {
           transform: 0;
       }
     
       to {
           transform: translateY(calc(-100% + 220px));
       }
    }
    `
export const NumberItem = styled.div`
    
   
    `