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
    return err.response.status;
  }
}

export default api;