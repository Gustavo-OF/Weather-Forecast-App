import styled from "styled-components"
import "@fontsource/raleway";

const Temperature = styled.h1`
    font-family: Raleway;
    text-align: center;
    font-weight: 100;
    font-size: 50px;
    margin-left: 8%;
`

const WeatherState = styled.h2`
    font-family: Raleway;
    text-align: center;
    font-weight: 100;
    color: #a09fb1;
`
const DateInfo = styled.h4`
    font-family: Raleway;
    text-align: center;
    font-weight: 100;
    color: #a09fb1;
`
const Location = styled.h4`
    font-family: Raleway;
    text-align: center;
    font-weight: 100;
    color: #a09fb1;
`

export { 
    Temperature,
    WeatherState,
    DateInfo,
    Location
}