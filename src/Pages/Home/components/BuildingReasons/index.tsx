import React, {FC, useEffect} from 'react'
import {
    SectionHeader, SectionLine, SectionText
} from "Pages/Home/components/MainIntro/index.styled";
import {
    BuildingReasonsContainer, BuildingReasonsIconsContainer,
    BuildingReasonsTextContainer, Icon, IconItemWrapper, IconNumber, IconText, IconTextWrapper
} from "Pages/Home/components/BuildingReasons/index.styled";
// @ts-ignore
import Lottie from 'react-lottie-player';
import Icon1 from './icon2.json';
interface IProps {
    progress: number
}

export const BuildingReasons: FC<IProps> = ({progress}) => {
    useEffect(() => {

    })
    return (
        <>
                <BuildingReasonsContainer>
                    <BuildingReasonsTextContainer>
                        <SectionHeader>
                            The nine<br/>
                            Reasons<br/>
                            Why
                        </SectionHeader>
                        <SectionLine style={{width: progress != 1 ? (progress - 0.15) * 100 + '%' : '100%'}}/>
                        <SectionText>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt
                            ut labore et dolore magna aliquyam
                        </SectionText>
                    </BuildingReasonsTextContainer>

                    <BuildingReasonsIconsContainer>
                        <IconItemWrapper>
                            <Icon>
                                <Lottie
                                    loop={false}
                                    animationData={Icon1}
                                    play={false}
                                    goTo={progress*70}
                                />
                            </Icon>
                            <IconTextWrapper style={{opacity: progress < 0.2 ? 0 : (progress - 0.2) * 2}}>
                                <IconNumber>01</IconNumber>
                                <IconText>
                                    Incredible<br/>
                                    Access from<br/>
                                    Anywhere
                                </IconText>
                            </IconTextWrapper>
                        </IconItemWrapper>
                        <IconItemWrapper>
                            <Icon>
                                <Lottie
                                    loop={false}
                                    animationData={Icon1}
                                    play={false}
                                    goTo={(progress - 0.1) * 60}
                                />
                            </Icon>
                            <IconTextWrapper style={{opacity: (progress - 0.3) * 1.8}}>
                                <IconNumber>02</IconNumber>
                                <IconText>
                                    Metro-link<br/>
                                    At your<br/>
                                    Doorstep
                                </IconText>
                            </IconTextWrapper>
                        </IconItemWrapper>
                        <IconItemWrapper>
                            <Icon>
                                <Lottie
                                    loop={false}
                                    animationData={Icon1}
                                    play={false}
                                    goTo={(progress - 0.2) * 60}
                                />
                            </Icon>
                            <IconTextWrapper style={{opacity: (progress - 0.5) * 2}}>
                                <IconNumber>03</IconNumber>
                                <IconText>
                                    97%<br/>
                                    Walkability<br/>
                                    Score
                                </IconText>
                            </IconTextWrapper>
                        </IconItemWrapper>
                        <IconItemWrapper>
                            <Icon>
                                <Lottie
                                    loop={false}
                                    animationData={Icon1}
                                    play={false}
                                    goTo={(progress - 0.1) * 60}
                                />
                            </Icon>
                            <IconTextWrapper style={{opacity: (progress - 0.3) * 1.8}}>
                                <IconNumber>04</IconNumber>
                                <IconText>
                                    Operable<br/>
                                    Windows<br/>
                                    On each Floor
                                </IconText>
                            </IconTextWrapper>
                        </IconItemWrapper>
                        <IconItemWrapper>
                            <Icon>
                                <Lottie
                                    loop={false}
                                    animationData={Icon1}
                                    play={false}
                                    goTo={(progress - 0.2) * 60}
                                />
                            </Icon>
                            <IconTextWrapper style={{opacity: (progress - 0.5) * 2}}>
                                <IconNumber>05</IconNumber>
                                <IconText>
                                    Internal<br/>
                                    Green<br/>
                                    Courtyard
                                </IconText>
                            </IconTextWrapper>
                        </IconItemWrapper>
                        <IconItemWrapper>
                            <Icon>
                                <Lottie
                                    loop={false}
                                    animationData={Icon1}
                                    play={false}
                                    goTo={(progress - 0.3) * 60}
                                />
                            </Icon>
                            <IconTextWrapper style={{opacity: (progress - 0.7) * 3.5}}>
                                <IconNumber>06</IconNumber>
                                <IconText>
                                    Separate<br/>
                                    Tenant Air<br/>
                                    Filtration
                                </IconText>
                            </IconTextWrapper>
                        </IconItemWrapper>
                        <IconItemWrapper>
                            <Icon>
                                <Lottie
                                    loop={false}
                                    animationData={Icon1}
                                    play={false}
                                    goTo={(progress - 0.2) * 60}
                                />
                            </Icon>
                            <IconTextWrapper style={{opacity: (progress - 0.5) * 2}}>
                                <IconNumber>07</IconNumber>
                                <IconText>
                                    Oversized,<br/>
                                    Touchless,<br/>
                                    Glass Elevators
                                </IconText>
                            </IconTextWrapper>
                        </IconItemWrapper>
                        <IconItemWrapper>
                            <Icon>
                                <Lottie
                                    loop={false}
                                    animationData={Icon1}
                                    play={false}
                                    goTo={(progress - 0.3) * 60}
                                />
                            </Icon>
                            <IconTextWrapper style={{opacity: (progress - 0.7) * 3.5}}>
                                <IconNumber>08</IconNumber>
                                <IconText>
                                    Escalators<br/>
                                    On each<br/>
                                    Floor
                                </IconText>
                            </IconTextWrapper>
                        </IconItemWrapper>
                        <IconItemWrapper>
                            <Icon>
                                <Lottie
                                    loop={false}
                                    animationData={Icon1}
                                    play={false}
                                    goTo={(progress - 0.6) * 110}

                                />
                            </Icon>
                            <IconTextWrapper style={{opacity: (progress - 0.8) * 5}}>
                                <IconNumber>09</IconNumber>
                                <IconText>
                                    80,000 sq ft<br/>
                                    Plaza &<br/>
                                    Gardens
                                </IconText>
                            </IconTextWrapper>
                        </IconItemWrapper>
                    </BuildingReasonsIconsContainer>
                </BuildingReasonsContainer>
        </>
    )
}