import styled from "styled-components";
export const BuildingReasonsSection = styled.section`
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
    `
export const BuildingReasonsContainer = styled.div`
    display: flex;
    height: 100%;
    `
export const BuildingReasonsTextContainer = styled.div`
    width: calc(300 + 260px);
    height: calc(100% - 260px);
    padding: 130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    `

export const BuildingReasonsIconsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    height: calc(100% - 350px);
    padding: 230px 0 120px;
    `

export const IconItemWrapper = styled.div`
    display: flex;
    margin-right: 120px;
    `

export const Icon = styled.div`
    width: 164px;
    height: 164px;
    margin-right: 25px;
    overflow: hidden;
    > div {
        width: 630px;
        height: 195px;
        margin-top: -15px;
        margin-left: -38px;
    }
    `

export const IconTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: opacity .2s;
    `

export const IconNumber = styled.span`
    text-align: left;
    font: normal normal 300 24px/29px Forma DJR Display;
    letter-spacing: 1.8px;
    color: #41AA6C;
    text-transform: uppercase;
    height: 100%;
    display: flex;
    align-items: center;
    `

export const IconText = styled.p`
    margin: 0;
    text-align: left;
    font: normal normal bold 16px/19px Forma DJR Text;
    letter-spacing: 0.8px;
    color: #41AA6C;
    `
