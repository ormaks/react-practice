import React, {FC, useEffect, useState} from 'react'
import {Controller, Scene} from 'react-scrollmagic';
import {Main} from "Pages/Home/components/Main";
import {MainIntro} from "Pages/Home/components/MainIntro";
import {BuildingMain} from "Pages/Home/components/BuildingImage";
import {HomeWrapper} from "Pages/Home/index.styled";
import {MainSection} from "Pages/Home/components/Main/index.styled";
import {BuildingReasons} from "Pages/Home/components/BuildingReasons";
import {BuildingReasonsSection} from "Pages/Home/components/BuildingReasons/index.styled";
import {BuildingMainSection} from "Pages/Home/components/BuildingImage/index.styled";
import {MainIntroSection} from "Pages/Home/components/MainIntro/index.styled";

export const Home: FC = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {

        let item = document.getElementsByTagName('html')[0];

        window.addEventListener('wheel', function (e) {
            if (e.deltaY >= 0) item.scrollLeft += 50;
            else item.scrollLeft -= 50;
        });
    })
    return (
        <>
            <HomeWrapper className="main">
                <Controller vertical={false}>
                    <Scene
                        duration={'40%'}
                        triggerHook={'onLeave'}
                    >
                        {function (progress: number) {
                            return (
                                <MainSection className={'main-section'}>
                                    <Main progress={progress}/>
                                </MainSection>
                            );
                        }}
                    </Scene>
                    <Scene
                        duration={'40%'}
                        triggerHook={'onEnter'}
                    >
                        {function (progress: number) {
                            return (
                                <MainIntroSection className={'main-intro-section'}>
                                    <MainIntro progress={progress}/>
                                </MainIntroSection>
                            );
                        }}
                    </Scene>
                    <Scene
                        duration={'80%'}
                        triggerHook={1}
                    >
                        {function (progress: number) {
                            return (
                                <BuildingMainSection>
                                    <BuildingMain progress={progress}/>
                                </BuildingMainSection>
                            );
                        }}
                    </Scene>
                    <Scene
                        duration={'100%'}
                        triggerHook={'onEnter'}
                        indicators={true}
                    >
                        {function (progress: number) {
                            console.log(progress);
                            return (
                                <BuildingReasonsSection className={'main-intro-section'}>
                                    <BuildingReasons progress={progress}/>
                                </BuildingReasonsSection>
                            );
                        }}
                    </Scene>
                    <Scene
                        duration={'100%'}
                        triggerHook={'onEnter'}
                    >
                        {function (progress: number) {
                            return (
                                <MainSection style={{background: 'blue'}}/>
                            );
                        }}
                    </Scene>
                </Controller>
            </HomeWrapper>
        </>
    )
}