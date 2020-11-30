import React, {FC, useEffect} from 'react'
import {
    MainBackgroundFirst,
    MainBackgroundSecond,
    MainBackgroundWrapper, MainContainer,
    MainNumber,
    NumberBlock,
    NumberItem,
    NumberItemContainer,
    NumberWrapper
} from "Pages/Home/components/Main/index.styled";
import mainImageColored from "../../../../assets/images/main-image-colored.png";
import mainImageBlack from "../../../../assets/images/main-image-black-white.png";


interface IProps {
    progress: number
}

export const Main: FC<IProps> = ({progress}) => {
    const generateNumbersArray = (from: number, to: number) => {
        let yearsArray = [];
        let numbersArray: string[][] = [[], [], [], []];
        for (let i = from; i <= to; i++) {
            yearsArray[yearsArray.length] = i;
            let splitDate = yearsArray[yearsArray.length - 1].toString().split('')
            numbersArray[0][0] = '1';
            numbersArray[0][1] = '2';
            numbersArray[1][0] = '9';
            numbersArray[1][1] = '0';
            numbersArray[3][0] = '3';
            numbersArray[3][1] = '1';
            numbersArray[2][0] = '7';
            numbersArray[2][1] = '8';
            numbersArray[2][2] = '9';
            numbersArray[2][3] = '0';
            numbersArray[2][4] = '1';
            numbersArray[2][5] = '2';
            numbersArray[3][yearsArray.length - 1] = splitDate[3];
        }
        return numbersArray
    }
    const generateNumbers = () => {
        let numbersArray = generateNumbersArray(1974, 2021);

        return (
            <NumberWrapper>
                {numbersArray.map((el, key) => {
                    return <NumberBlock key={key}>
                        <NumberItemContainer>
                            {el.map((number, i) => {
                                return <NumberItem key={i}>{number}</NumberItem>
                            })
                            }
                        </NumberItemContainer>
                    </NumberBlock>
                })}
            </NumberWrapper>
        )
    }

    useEffect(() => {

    })
    return (
        <>
                <MainContainer style={{width: 100 - (progress * 100 / 2) + '%'}}>
                    <MainBackgroundWrapper>
                        <MainBackgroundFirst src={mainImageBlack}/>
                        <MainBackgroundSecond src={mainImageColored}/>
                    </MainBackgroundWrapper>
                    <MainNumber style={{opacity: 1 - progress}}>{generateNumbers()}</MainNumber>
                </MainContainer>
        </>
    )
}