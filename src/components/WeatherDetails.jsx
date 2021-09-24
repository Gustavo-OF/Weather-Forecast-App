import { React } from "react";

import {
    Background,
    NextDaysDiv,
    NextDays,
    DivSpaceHighlights,
    DivHighlightsLeft,
    DivHighlightsRight,
    IconImg,
    ChangeMeasureDiv,
    CelsiusDiv
} from "./ui/WeatherDetails";
import { WeekDays, Highlights, H1, H5 } from "./ui/WeatherDetails/fonts"
import { Celsius, Farenheit } from "./ui/WeatherDetails/buttons"

import { returnDate } from "./useCases/formatingDate";
import { toFahrenheit } from "./useCases/changeMeasure"


function WeatherDetails(props) {

    function ListItem(props) {
        
        let minTemp = props.value.min_temp.toFixed(1);
        let maxTemp = props.value.max_temp.toFixed(1);
            
        let link = `https://www.metaweather.com/static/img/weather/${props.value.weather_state_abbr}.svg`;
        let date =  returnDate(props.value.applicable_date);
        return (
            <NextDays>
                <WeekDays>
                <p>{date}</p>
                    <IconImg>
                        <img src={link} alt="icon"></img>
                    </IconImg>
                        <CelsiusDiv>{minTemp} {props.measure} {maxTemp} {props.measure}</CelsiusDiv>
                </WeekDays>
            </NextDays>
        )
    }

    function WeatherList(props, measure = "℃") {
                
        const listItems = props.slice(1,6).map((index, i) =>               
            <ListItem key={i} value={index} measure={measure}></ListItem>
        )
        return (
            <NextDaysDiv>
                {listItems}
            </NextDaysDiv>
        )
    }

    return (
        <Background>
            <ChangeMeasureDiv>
                <Celsius value="c" onClick={e => WeatherList(props.weather.consolidated_weather, e.target.value)}>℃</Celsius>
                <Farenheit value="f" onClick={e => WeatherList(props.weather.consolidated_weather, e.target.value)} >℉</Farenheit>
            </ChangeMeasureDiv>
            
            {props.weather !== [] ? WeatherList(props.weather.consolidated_weather) : ""}

            <DivSpaceHighlights>
                <Highlights>Today's Highlights</Highlights>
                <DivHighlightsLeft>
                    <H5> Wind status </H5>
                    <H1> {Math.round(props.weather.consolidated_weather[0].wind_speed)} MPH</H1>
                    <H5> WSW </H5>
                </DivHighlightsLeft>
                <DivHighlightsRight>
                    <H5> Humidity </H5>
                    <H1> {Math.round(props.weather.consolidated_weather[0].humidity)}% </H1>
                    <hr />
                </DivHighlightsRight>
                <DivHighlightsLeft>
                    <H5> Visibility </H5>
                    <H1> {props.weather.consolidated_weather[0].visibility.toFixed(1)} miles</H1>
                </DivHighlightsLeft>
                <DivHighlightsRight>
                    <H5> Air Pressure </H5>
                    <H1> {props.weather.consolidated_weather[0].air_pressure} mb</H1>
                </DivHighlightsRight>
            </DivSpaceHighlights>
        </Background>
    )
}

export { WeatherDetails }