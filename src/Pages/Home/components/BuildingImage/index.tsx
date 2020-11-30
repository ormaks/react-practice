import React, {FC, useEffect} from 'react'
import {} from "Pages/Home/components/MainIntro/index.styled";
import {BuildingMainImage} from "Pages/Home/components/BuildingImage/index.styled";
import buildingMainImage from "../../../../assets/images/building.png";


interface IProps {
    progress?: number
}

export const BuildingMain: FC<IProps> = ({progress}) => {

    useEffect(() => {
        const mainSection = document.getElementsByClassName('main-section')[0] as HTMLElement;
        mainSection.style.opacity = String(1 - progress);
        const mainIntroSection = document.getElementsByClassName('main-intro-section')[0] as HTMLElement;
        mainIntroSection.style.opacity = String(1 - progress);
    })
    return (
        <>
            <BuildingMainImage src={buildingMainImage}/>
        </>
    )
}