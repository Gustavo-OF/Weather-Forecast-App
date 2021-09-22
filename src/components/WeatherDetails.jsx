import { React } from "react";

import {
    Background,
    NextDaysDiv,
    NextDays,
    DivSpaceHighlights,
    DivHighlightsLeft,
    DivHighlightsRight,
    IconImg
} from "./ui/WeatherDetails";
import { WeekDays, Highlights, H1, H5 } from "./ui/WeatherDetails/fonts"
import { returnDate } from "./useCases/formatingDate";



function WeatherDetails(props) {
    let day = []
    day[0] = returnDate(props.weather.consolidated_weather[1].applicable_date)
    day[1] = returnDate(props.weather.consolidated_weather[2].applicable_date)
    day[2] = returnDate(props.weather.consolidated_weather[3].applicable_date)
    day[3] = returnDate(props.weather.consolidated_weather[4].applicable_date)
    day[4] = returnDate(props.weather.consolidated_weather[5].applicable_date)



    let link = []
    link[0] = `https://www.metaweather.com/static/img/weather/${props.weather.consolidated_weather[1].weather_state_abbr}.svg`
    link[1] = `https://www.metaweather.com/static/img/weather/${props.weather.consolidated_weather[2].weather_state_abbr}.svg`
    link[2] = `https://www.metaweather.com/static/img/weather/${props.weather.consolidated_weather[3].weather_state_abbr}.svg`
    link[3] = `https://www.metaweather.com/static/img/weather/${props.weather.consolidated_weather[4].weather_state_abbr}.svg`
    link[4] = `https://www.metaweather.com/static/img/weather/${props.weather.consolidated_weather[5].weather_state_abbr}.svg`




    return (
        <Background>
            <NextDaysDiv>
                <NextDays>
                    <WeekDays>
                    <p>Tomorrow</p>
                        <IconImg>
                            <img src={link[0]} alt="icon"></img>
                        </IconImg>
                        <p>{props.weather.consolidated_weather[1].min_temp.toFixed(1)}℃ {props.weather.consolidated_weather[1].max_temp.toFixed(1)}℃</p>
                    </WeekDays>
                </NextDays>
                <NextDays>
                    <WeekDays>
                        <p>{day[1][1]}, {day[1][0]} {day[1][2]}</p>
                        <IconImg>
                            <img src={link[1]} alt="icon"></img>
                        </IconImg>
                        <p>{props.weather.consolidated_weather[2].min_temp.toFixed(1)}℃ {props.weather.consolidated_weather[2].max_temp.toFixed(1)}℃</p>
                    </WeekDays>
                </NextDays>
                <NextDays>
                    <WeekDays>
                        <p>{day[2][1]}, {day[2][0]} {day[2][2]}</p>
                        <IconImg>
                            <img src={link[2]} alt="icon"></img>
                        </IconImg>
                        <p>{props.weather.consolidated_weather[3].min_temp.toFixed(1)}℃ {props.weather.consolidated_weather[3].max_temp.toFixed(1)}℃ </p>
                    </WeekDays>
                </NextDays>
                <NextDays>
                    <WeekDays>
                        <p>{day[3][1]}, {day[3][0]} {day[3][2]}</p>
                        <IconImg>
                            <img src={link[3]} alt="icon"></img>
                        </IconImg>
                        <p>{props.weather.consolidated_weather[4].min_temp.toFixed(1)}℃ {props.weather.consolidated_weather[4].max_temp.toFixed(1)}℃</p>
                    </WeekDays>
                </NextDays>
                <NextDays>
                    <WeekDays>
                        <p>{day[4][1]}, {day[4][0]} {day[4][2]}</p>
                        <IconImg>
                            <img src={link[4]} alt="icon"></img>
                        </IconImg>
                        <p>{props.weather.consolidated_weather[5].min_temp.toFixed(1)}℃ {props.weather.consolidated_weather[5].max_temp.toFixed(1)}℃</p>
                    </WeekDays>
                </NextDays>
            </NextDaysDiv>

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