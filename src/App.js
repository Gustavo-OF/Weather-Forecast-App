import { React } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"

import { WeatherCity } from "./components/WeatherCity";
import { WeatherDetails } from "./components/WeatherDetails";

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
  return (
    <Router>
      <Switch>
        <Route to="/">
          <WeatherCity/>
          <WeatherDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
