import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibXlrM3MiLCJhIjoiY2xnYjh3OGtjMDFlcjNrbGkzdXhwOGl3eCJ9.4FzeV3kSLsOeSOWGAfCn5A'
    }
});


export default searchApi;


