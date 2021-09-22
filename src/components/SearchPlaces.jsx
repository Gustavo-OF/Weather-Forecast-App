import React from "react";
import { Link } from "react-router-dom";
import Search from "@material-ui/icons/Search"

import { 
    Background, 
    Back, 
    // Input, 
    SearchButton,
    SearchDiv 
} from "./ui/SearchPlaces"
import { InputAdornment } from "@material-ui/core";
import Input from "@material-ui/core/Input"

function SearchForPlaces(props) {
    return (
        <Background>
            <Link to="/">
            <Back>
                X
            </Back>
            </Link>
            <SearchDiv>
                <Input placeholder="Search places" id="input-with-icon-adornment" startAdornment={
                <InputAdornment position="start"> <Search></Search> </InputAdornment>
            }/>
            <SearchButton>Search</SearchButton>
            </SearchDiv>
        </Background>
    )
}

export { SearchForPlaces }