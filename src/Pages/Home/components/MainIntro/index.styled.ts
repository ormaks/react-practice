import styled from "styled-components";
export const MainIntroSection = styled.section`
    width: 50vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    `

export const MainIntroContainer = styled.div`
    width: 50vw;
    height: 100%;
    position: fixed;
    right: -50%;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background: white;
    `

export const MainIntroTextContainer = styled.div`
    width: calc(100% - 260px);
    height: calc(100% - 260px);
    padding: 130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    `

export const SectionHeader = styled.h2`
    text-align: left;
    font: normal normal 300 45px/48px Forma DJR Display;
    letter-spacing: 3.38px;
    color: #41AA6C;
    text-transform: uppercase;
    margin: 0 0 50px;
    `

export const SectionLine = styled.span`
    background-color: #41AA6C;
    height: 2px;
    width: 100%;
    max-width: 450px;
    margin: 0 0 25px;
    `
export const SectionText = styled.p`
    text-align: left;
    font: normal normal 300 16px/29px Forma DJR Text;
    letter-spacing: 0.48px;
    color: #000000;
    max-width: 450px;
    margin: 0;
    `