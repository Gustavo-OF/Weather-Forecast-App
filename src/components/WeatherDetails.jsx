import { React } from "react";
import CloudIcon  from '@material-ui/icons/Cloud';

import { 
    Background, 
    NextDaysDiv,
    DivSpaceHighlights,
    DivHighlights
} from "./ui/WeatherDetails";
import { WeekDays, Highlights, H1, H5 } from "./ui/WeatherDetails/fonts"


function WeatherDetails() {
    return (
        <Background>
            <NextDaysDiv>
                <WeekDays>
                    <p>Wed, 10 Jun</p>
                    <CloudIcon></CloudIcon>
                    <p>16℃ 11℃</p>
                </WeekDays>
            </NextDaysDiv>
            <NextDaysDiv>
                <WeekDays>
                    <p>Tue, 9 Jun</p>
                    <CloudIcon></CloudIcon>
                    <p>16℃ 11℃</p>
                </WeekDays>
            </NextDaysDiv>
            <NextDaysDiv>
                <WeekDays>
                    <p>Mon, 8 Jun</p>
                    <CloudIcon></CloudIcon>
                    <p>16℃ 11℃</p>
                </WeekDays>
            </NextDaysDiv>
            <NextDaysDiv>
                <WeekDays>
                    <p>Sun, 7 Jun</p>
                    <CloudIcon></CloudIcon>
                    <p>16℃ 11℃</p>
                </WeekDays>
            </NextDaysDiv>
            <NextDaysDiv>
                <WeekDays>
                    <p>Tomorrow</p>
                    <CloudIcon></CloudIcon>
                    <p>16℃ 11℃</p>
                </WeekDays>
            </NextDaysDiv>
            <DivSpaceHighlights>
                <Highlights>Today's Highlights</Highlights>
                <DivHighlights>
                    <H5> Wind status </H5> 
                    <H1> 7 MPH</H1>
                    <H5> WSW </H5>
                </DivHighlights>
                <DivHighlights>
                    <H5> Humidity </H5> 
                    <H1> 84% </H1>
                    <hr/>
                </DivHighlights>
                <DivHighlights>
                    <H5> Visibility </H5> 
                    <H1> 6, 4 miles</H1>
                </DivHighlights>
                <DivHighlights>
                    <H5> Air Pressure </H5> 
                    <H1> 998 mb</H1>
                </DivHighlights>
            </DivSpaceHighlights>
        </Background>
    )
}

export { WeatherDetails }