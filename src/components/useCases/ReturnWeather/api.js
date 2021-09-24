//  Importação do axios  (pacote de requisição)
import axios from "axios";
//  Fim importação do axios

//  Cria uma url base para realizar as pesquisas
const api = axios.create({
  baseURL: "https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location",
});

/**
 * Função para selecionar a cidade de acordo com a latitude e longitude enviada e,
 * com a informação retornada, pesquisa sobre o clima da cidade. Retorna um array 
 * com as informações
 * @param {*} lat 
 * @param {*} long 
 * @returns 
 */
export async function getWeather (lat, long) {
  try{
    let req = await api.get(`/search/?lattlong=${lat},${long}`);
  
    let res = await api.get("/location/"+req.data[0].woeid);
    return res.data;
  }catch(err){
    return 429;
  }
}

/**
 * Função para selecionar as cidades na pesquisa de cidades. O parametro enviado
 * é o que o usuário digita.
 */
export async function searchCity (query) {
  try{

    let req = await api.get(`/search/?query=${query}`)
    return req.data
    
  }catch(err){
    return 429;
    // if(err.response.status) {
    //   return err.response.status
    // }else{
    //   return 429;
    // }
    
  }
}

export default api;