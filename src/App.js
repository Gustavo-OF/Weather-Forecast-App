import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Alert } from "@material-ui/core"

import { WeatherCity } from "./components/WeatherCity";
import { WeatherDetails } from "./components/WeatherDetails";
import { SearchForPlaces } from "./components/SearchPlaces"
import { getWeather } from "./components/useCases/returnWeather/api";
import { Loader, DivError } from "./components/ui/Loader"


/**
 * APP para verificar o clima das cidades
 * 
 * Requisitos:
 *  [] Ver o clima da cidade padrão, de preferencia a cidade em que o usuário está acessando
 *  [] Pode pesquisar por outras cidades
 *  [] Pode ver o clima de hoje e dos próximos 5 dias
 *  [] Posso ver a data e a localização do clima
 *  [] Posso ver de acordo com a imagem para cada tipo de clima
 *  [] Posso ver o grau mínimo e máximo a cada dia
 *  [] Posso ver o status e a direção do vento
 *  [] Posso ver a porcentagem da umidade
 *  [] Posso ver o indicador de visibilidade
 *  [] Posso ver o número da pressão do ar
 *  [] Posso solicitar o clima da minha localização atual
 *  [] Posso converter a temperatura de Celsius para Farenheit e vice-versa
 */

function App() {

  const [weather, setWeather] = useState();
  const [isLoading, setLoading] = useState(true);
  const [httpCode, setHttpCode] = useState(200)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getWeather(position.coords.latitude, position.coords.longitude).then((response) => {
        if (response !== 429) {
          setWeather(response);
          setLoading(false);
        } else {
          setHttpCode(response)
        }
      })
    });
  }, []);

  if (httpCode === 429) {
    return (
      <DivError>
        <Alert severity="error" variant="filled">
          Você ultrapassou a cota de 50 requisições por hora. Por favor, tente novamente mais tarde.
        </Alert>
      </DivError>

    );
  } else if (isLoading) {

    return (
      <Loader>
      </Loader>
    );
  }

  let link = `https://www.metaweather.com/static/img/weather/${weather.consolidated_weather[0].weather_state_abbr}.svg`;

  return (
    <Router>
      <Switch>
      <Route path="/search">
          <SearchForPlaces/>
          <WeatherDetails weather={weather}/>
        </Route>
        <Route path="/">
          <WeatherCity weather={weather} link={link} />
          <WeatherDetails weather={weather}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
