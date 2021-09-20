import React, { useEffect, useState } from "react";
// import api from "../services/api";
import CloudIcon  from '@material-ui/icons/Cloud';
import RoomIcon from '@material-ui/icons/Room';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

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
        Date,
        Location
} from "./ui/WeatherCity/fonts" 
import { SearchCitiesButton, GetLocalizationButton } from "./ui/WeatherCity/buttons"



function WeatherCity() {
    // const [weather, setWeather] = useState();

    // useEffect(() => {
    //   api
    //     .get("/search/?query=tor")
    //     .then((response) => console.log(response.data))
    // }, []);
    return (
        <Background>
            <DivSearch>
                <SearchCitiesButton>Search for places</SearchCitiesButton>
                <GetLocalizationButton>
                    <IconLocalization>
                        <GpsFixedIcon></GpsFixedIcon>
                    </IconLocalization>
                </GetLocalizationButton>
            </DivSearch>
            <DivIcon>
                <IconCenter>
                    <CloudIcon/>
                </IconCenter>
                <IconLeftBottom>
                    <CloudIcon/>
                </IconLeftBottom>
                <IconRightBottom>
                    <CloudIcon/>
                </IconRightBottom>
                <IconLeftUp>
                    <CloudIcon/>
                </IconLeftUp>
                <IconRightUp>
                    <CloudIcon/>
                </IconRightUp>
                <Temperature> 15℃ </Temperature>
                <WeatherState>Shower</WeatherState>
            </DivIcon>
            <DivInformations>
                <Date>
                     . Fri, 5 Jun
                </Date>
                <Location>
                    <RoomIcon></RoomIcon>
                    {/* {weather.name} */}
                </Location>
            </DivInformations>
        </Background>
    )
}

export { WeatherCity }