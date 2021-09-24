//  Importação do React.
import React from "react";
//  Fim importação do React.

//  Importação de ícones
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import RoomIcon from "@material-ui/icons/Room";
//  Fim importação de ícones

//  Importação do Link do Router
import { Link } from "react-router-dom";
//  Fim importação do Link

//  Importação de estilos.
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
//  Fim importação de estilos

//  Importação da classe de formatar datas.
import { returnDate } from "./useCases/formatingDate";
//  Fim importaçao da classe

/**
 * Função de mostrar o clima do dia atual. Recebe como paramêtro as 
 * informações do tempo pelo App.js e apresenta na tela.
 * @param {*} props 
 * @returns 
 */
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
                <Link to="/">
                    <GetLocalizationButton>
                        <IconLocalization>
                            <GpsFixedIcon></GpsFixedIcon>
                        </IconLocalization>
                    </GetLocalizationButton>
                </Link>
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
                    Today . {day}
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