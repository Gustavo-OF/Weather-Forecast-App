import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Search from "@material-ui/icons/Search"

import { 
    Background, 
    SearchDiv,
    ResultsDiv,
    ListCitiesUl,
    ResultsLi
} from "./ui/SearchPlaces"

import{
    Back, 
    SearchButton,
} from "./ui/SearchPlaces/buttons"

import { InputAdornment } from "@material-ui/core";
import Input from "@material-ui/core/Input"
import { searchCity } from "./useCases/returnWeather/api";

function SearchForPlaces(props) {

    const [query, setQuery] = useState("");
    const [isSending, setIsSending] = useState(false)
    const [city, setCity] = useState([]);

    function ListItem(props) {
        let coords = props.value.latt_long.split(",");
        return (
            <ResultsLi>
                <Link to={{pathname: `/${coords[0]}/${coords[1]}`}} style={{textDecoration: "inherit", color: "inherit"}}>
                    {props.value.title}
                </Link>
            </ResultsLi>
        )
    }

    function TitleList(props) {
        const listItems = props.map((index,i) =>
            <ListItem key={i.toString()} value={index}></ListItem>
        )
        return (
            <ul>
                {listItems}
            </ul>
        )
    }


    const sendRequest = useCallback(async () => {
        if (isSending) return
        setIsSending(true);
        searchCity(query).then(response => {
            setCity(response)
        });
        setIsSending(false);
      }, [isSending, query])


    return (
        <Background>
            <Link to="/">
            <Back>
                X
            </Back>
            </Link>
            <SearchDiv>
                <Input 
                    style={{color:"#efefef"}} 
                    placeholder="Search places" 
                    id="input-with-icon-adornment" 
                    autoComplete="off"
                    onChange={e => setQuery(e.target.value)} 
                    startAdornment={
                        <InputAdornment position="start"> 
                            <Search style={{color:"#efefef"}}></Search> 
                        </InputAdornment>
            }/>
                <SearchButton disabled={isSending} onClick={sendRequest}>Search</SearchButton>
            </SearchDiv>
            <ResultsDiv>
                <ListCitiesUl>
                    {city !== [] ? TitleList(city) : ""}
                </ListCitiesUl>
            </ResultsDiv>
        </Background>
    )
}

export { SearchForPlaces }