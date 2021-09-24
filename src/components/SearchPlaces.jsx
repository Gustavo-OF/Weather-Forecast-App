//  Importações React.
import React, { useCallback, useState } from "react";
//  Fim importações React.

//  Importação das rotas do React.
import { Link } from "react-router-dom";
//  Fim importação das rotas.

//  Importação de ícones.
import Search from "@material-ui/icons/Search"
import { InputAdornment } from "@material-ui/core";
import Input from "@material-ui/core/Input"
//  Fim importação dos ícones.

//  Importação de estilos do styled-components.
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
//  Fim importação de estilos.

//  Importação da API de pesquisa do tempo
import { searchCity } from "./useCases/returnWeather/api";
//  Fim importação da API

/**
 * Função do componente de pesquisa de cidades. Faz a busca e 
 * apresenta o resultado de todas as cidades de acordo com o retorno 
 * da API e, ao selecionar uma cidade, cria um Link para a pagina 
 * principal com as coordenadas da cidade selecionada para realizar 
 * a pesquisa do tempo.
 * 
 * @returns 
 */
function SearchForPlaces() {

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