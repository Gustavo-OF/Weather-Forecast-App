//  Importações React.
import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom"
//  Fim importações React.

//  Importação do Alert de erro.
import { Alert } from "@material-ui/core"
//  Fim importação do Alert.

//  Importações dos componentes.
import { WeatherCity } from "./components/WeatherCity";
import { WeatherDetails } from "./components/WeatherDetails";
import { SearchForPlaces } from "./components/SearchPlaces"
import { getWeather } from "./components/useCases/returnWeather/api";
import { Loader, DivError } from "./components/ui/Loader"
//  Fim importações dos componentes.

/**
 * Função principal da aplicação. Verifica a URL toda vez que a rota muda 
 * para puxar os parametrôs, caso exista. Após isso, caí na condição e
 * chama a respectiva função para verificar o clima. Se der erro de CORS, 
 * uma mensagem de erro é apresentada.Um gif de Loading é apresentando enquanto 
 * as informações estão sendo resgatadas.
 * @returns 
 */

function App() {
  let location = useLocation()
  const [weather, setWeather] = useState();
  const [isLoading, setLoading] = useState(true);
  const [httpCode, setHttpCode] = useState(200);

  useEffect(() => {
    let uriParams = location.pathname.split("/");
    if(uriParams[1] === "" || uriParams[1] === 'search')  {
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
    }else{
      getWeather(parseFloat(uriParams[1]), parseFloat(uriParams[2])).then((response) => {
        if (response !== 429) {
          setWeather(response);
          setLoading(false);
        } else {
          setHttpCode(response)
        }
      })
    }
  }, [location]);

  if (httpCode === 429) {
    return (
      <DivError>
        <Alert severity="error" variant="filled">
          Houve um erro de CORS. Por favor, tente novamente.
        </Alert>
      </DivError>

    );
  } else if (isLoading) {

    return (
      <Loader>
      </Loader>
    );
  }
  
  //  Gera o link do icone.
  let link = `https://www.metaweather.com/static/img/weather/${weather.consolidated_weather[0].weather_state_abbr}.svg`;

  return (
      <Switch>
      <Route path="/search">
          <SearchForPlaces/>
          <WeatherDetails weather={weather}/>
        </Route>
        <Route path="/:lat?/:long?/:measure?">
          <WeatherCity weather={weather} link={link} />
          <WeatherDetails weather={weather}/>
        </Route>
      </Switch>
  );
}

export default App;
