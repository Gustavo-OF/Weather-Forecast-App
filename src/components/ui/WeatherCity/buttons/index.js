import styled from "styled-components";

const SearchCitiesButton = styled.button`
    background-color: #6e707a;
    color: #e7e7eb;
    width: 40%;
    height: 25px;
    margin: 15px 10px 10px 10px;
    box-shadow: 2px 2px 2px 2px #17192c;
    border-radius: 0;
    border-style: solid;
`

const GetLocalizationButton = styled.button`
    float: right;
    border-radius: 100%;
    background-color: #6e707a;
    width: auto;
    height: auto;
    margin: 12px 15px 10px 10px; 
    color: #e7e7eb;
    border-style: solid;   
    box-shadow: 2px 2px 2px 2px #17192c; 
`

export { SearchCitiesButton, GetLocalizationButton };