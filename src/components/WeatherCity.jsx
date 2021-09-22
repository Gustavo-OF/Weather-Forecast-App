import React from "react";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import RoomIcon from "@material-ui/icons/Room";
import { Link } from "react-router-dom";


import {
    Background,
    DivInformations,
    DivSearch
} from "./ui/WeatherCity";
import {
    DivIcon,
    IconCenter,
    IconLeftBottom,
    IconLeftUp,
    IconRightBottom,
    IconRightUp,
    IconLocalization
} from "./ui/WeatherCity/icons"
import {
    Temperature,
    WeatherState,
    DateInfo,
    Location
} from "./ui/WeatherCity/fonts"
import { SearchCitiesButton, GetLocalizationButton } from "./ui/WeatherCity/buttons";
import { returnDate } from "./useCases/formatingDate";

function WeatherCity(props) {
    let day = returnDate();
    return (

        <Background>
            <DivSearch>
                <Link to="/search">
                    <SearchCitiesButton>
                        Search for places
                    </SearchCitiesButton>
                </Link>
                <GetLocalizationButton>
                    <IconLocalization>
                        <GpsFixedIcon></GpsFixedIcon>
                    </IconLocalization>
                </GetLocalizationButton>
            </DivSearch>
            <DivIcon>
                <IconCenter>
                    <img src={props.link} alt="title"></img>
                </IconCenter>
                <IconLeftBottom>
                    <img src={props.link} alt="title"></img>
                </IconLeftBottom>
                <IconRightBottom>
                    <img src={props.link} alt="title"></img>

                </IconRightBottom>
                <IconLeftUp>
                    <img src={props.link} alt="title"></img>

                </IconLeftUp>
                <IconRightUp>
                    <img src={props.link} alt="title"></img>

                </IconRightUp>
                <Temperature> {props.weather.consolidated_weather[0].the_temp.toFixed(1)}℃ </Temperature>
                <WeatherState>{props.weather.consolidated_weather[0].weather_state_name}</WeatherState>
            </DivIcon>
            <DivInformations>
                <DateInfo>
                    Today . {day[1]}, {day[0]} {day[2]}
                </DateInfo>
                <Location>
                    <RoomIcon></RoomIcon>
                    {props.weather.title}
                </Location>
            </DivInformations>
        </Background>
    )
}

export { WeatherCity }