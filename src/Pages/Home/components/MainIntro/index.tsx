import React, {FC, useEffect} from 'react'
import {
    MainIntroContainer,
    MainIntroTextContainer, SectionHeader, SectionLine, SectionText
} from "Pages/Home/components/MainIntro/index.styled";


interface IProps {
    progress: number
}

export const MainIntro: FC<IProps> = ({progress}) => {
    useEffect(() => {

    })
    return (
        <>
                <MainIntroContainer style={{right: -50 + (progress * 100 / 2) + '%'}}>
                    <MainIntroTextContainer>
                        <SectionHeader>
                            History.<br/>
                            Transformation.<br/>
                            Location.
                        </SectionHeader>
                        <SectionLine  style={{width: progress != 1 ? (progress - 0.15) * 100 + '%' : '100%'}}/>
                        <SectionText>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est
                        </SectionText>
                    </MainIntroTextContainer>
                </MainIntroContainer>
        </>
    )
}