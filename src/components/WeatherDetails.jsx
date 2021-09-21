import { React } from "react";
import CloudIcon  from '@material-ui/icons/Cloud';

import { 
    Background,
    NextDaysDiv, 
    NextDays,
    DivSpaceHighlights,
    DivHighlightsLeft,
    DivHighlightsRight
} from "./ui/WeatherDetails";
import { WeekDays, Highlights, H1, H5 } from "./ui/WeatherDetails/fonts"


function WeatherDetails() {
    return (
        <Background>
            <NextDaysDiv>
            <NextDays>
                <WeekDays>
                    <p>Tomorrow</p>
                    <CloudIcon></CloudIcon>
                    <p>16℃ 11℃</p>
                </WeekDays>
            </NextDays>
            <NextDays>
                <WeekDays>
                    <p>Sun, 7 Jun</p>
                    <CloudIcon></CloudIcon>
                    <p>16℃ 11℃</p>
                </WeekDays>
            </NextDays>
            <NextDays>
                <WeekDays>
                    <p>Mon, 8 Jun</p>
                    <CloudIcon></CloudIcon>
                    <p>16℃ 11℃</p>
                </WeekDays>
            </NextDays>
            <NextDays>
                <WeekDays>
                    <p>Tue, 9 Jun</p>
                    <CloudIcon></CloudIcon>
                    <p>16℃ 11℃</p>
                </WeekDays>
            </NextDays>
            <NextDays>
                <WeekDays>
                    <p>Wed, 10 Jun</p>
                    <CloudIcon></CloudIcon>
                    <p>16℃ 11℃</p>
                </WeekDays>
            </NextDays>
            </NextDaysDiv>

            <DivSpaceHighlights>
                <Highlights>Today's Highlights</Highlights>
                <DivHighlightsLeft>
                    <H5> Wind status </H5> 
                    <H1> 7 MPH</H1>
                    <H5> WSW </H5>
                </DivHighlightsLeft>
                <DivHighlightsRight>
                    <H5> Humidity </H5> 
                    <H1> 84% </H1>
                    <hr/>
                </DivHighlightsRight>
                <DivHighlightsLeft>
                    <H5> Visibility </H5> 
                    <H1> 6, 4 miles</H1>
                </DivHighlightsLeft>
                <DivHighlightsRight>
                    <H5> Air Pressure </H5> 
                    <H1> 998 mb</H1>
                </DivHighlightsRight>
            </DivSpaceHighlights>
        </Background>
    )
}

export { WeatherDetails }