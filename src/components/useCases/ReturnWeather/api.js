import axios from "axios";

const api = axios.create({
  baseURL: "https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location",
});

export async function getWeather (lat, long) {
  try{
    let req = await api.get(`/search/?lattlong=${lat},${long}`);
  
    let res = await api.get("/location/"+req.data[0].woeid);
    return res.data;
  }catch(err){
    return err;
  }
}

export async function searchCity (query) {
  try{

    let req = await api.get(`/search/?query=${query}`)
    return req.data
    
  }catch(err){
    return err;
    // if(err.response.status) {
    //   return err.response.status
    // }else{
    //   return 429;
    // }
    
  }
}

export default api;