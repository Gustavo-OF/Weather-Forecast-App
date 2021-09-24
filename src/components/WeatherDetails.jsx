//  Importação do React.
import { React } from "react";
//  Fim importação do React.

//  Importação dos estilos.
import {
    Background,
    NextDaysDiv,
    NextDays,
    DivSpaceHighlights,
    DivHighlightsLeft,
    DivHighlightsRight,
    IconImg,
} from "./ui/WeatherDetails";
import { WeekDays, Highlights, H1, H5 } from "./ui/WeatherDetails/fonts"
//  Fim importação dos estilos

//  Importação da classe de formatação de data.
import { returnDate } from "./useCases/formatingDate";
//  Fim da classe de formatação de data. 

/**
 * Função para listar a informação do tempo nos próximos cinco dias, apresentando
 * temperatura miníma e máxima. Recebe como parametro as informações dos próximos 
 * 6 dias, contando com o dia atual.
 * @param {*} props 
 * @returns 
 */
function WeatherDetails(props) {
    
    //  Lista os itens do array
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
                        <p>{minTemp} {props.measure} {maxTemp} {props.measure}</p>
                </WeekDays>
            </NextDays>
        )
    }

    //  Separa o array e chama a função de listar
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