import  Button  from "@mui/material/Button";
import  TextField from "@mui/material/TextField" ;
import "./SearchBox.css"
import { useState } from "react";
export default function SearchBox() {
    let [city,setCity] =useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY  = "fbec5b7f8ef003bce0f637f0633d96e2";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let jsonResponse = await response.json();
            console.log(jsonResponse);

            
             let result = { 
               temp: jsonResponse.main.temp,
               tempMin: jsonResponse.main.temp_min,
               tempMax: jsonResponse.main.temp_max,
               humidity: jsonResponse.main.humidity,
               feelsLike: jsonResponse.main.feels_like,
               weather: jsonResponse.weather[0].description,
               };
               console.log(result);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

   
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };

    return(
        <div className="SearchBox">
            <h3> Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                 id="City" 
                 label="City Name"
                 variant="outlined"  
                 required 
                 value={city}
                 onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit" > 
                Search
                </Button>
            </form>
        </div>
    )
}