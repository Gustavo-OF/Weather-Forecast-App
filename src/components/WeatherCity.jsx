import React, { useState, useEffect } from "react";
import CloudIcon from "@material-ui/icons/Cloud";
import RoomIcon from "@material-ui/icons/Room";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";


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
import api from "./useCases/returnWeather/api";
import { getLocation } from "./useCases/getPosition/getPosition";



function WeatherCity(props) {
    let today = new Date();
    let dayOfWeek = today.toLocaleDateString("en-us", { weekday: "short" });
    let month = today.toLocaleDateString("en-us", { month: "short" });
    today = today.toLocaleDateString().split("/");

    const [weather, setWeather] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/location/455827").then((response) => {
            setWeather(response.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(weather);

    return (

        <Background>
            <DivSearch>
                <SearchCitiesButton>Search for places</SearchCitiesButton>
                <GetLocalizationButton onClick={getLocation}>
                    <IconLocalization>
                        <GpsFixedIcon></GpsFixedIcon>
                    </IconLocalization>
                </GetLocalizationButton>
            </DivSearch>
            <DivIcon>
                <IconCenter>
                    <CloudIcon />
                </IconCenter>
                <IconLeftBottom>
                    <CloudIcon />
                </IconLeftBottom>
                <IconRightBottom>
                    <CloudIcon />
                </IconRightBottom>
                <IconLeftUp>
                    <CloudIcon />
                </IconLeftUp>
                <IconRightUp>
                    <CloudIcon />
                </IconRightUp>
                <Temperature> {weather.consolidated_weather[0].the_temp.toFixed(1)}℃ </Temperature>
                <WeatherState>{weather.consolidated_weather[0].weather_state_name}</WeatherState>
            </DivIcon>
            <DivInformations>
                <DateInfo>
                    Today . {dayOfWeek}, {today[0]} {month}
                </DateInfo>
                <Location>
                    <RoomIcon></RoomIcon>
                    São Paulo
                </Location>
            </DivInformations>
        </Background>
    )
}

export { WeatherCity }