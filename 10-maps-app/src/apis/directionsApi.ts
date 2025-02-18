import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibXlrM3MiLCJhIjoiY2xnYjh3OGtjMDFlcjNrbGkzdXhwOGl3eCJ9.4FzeV3kSLsOeSOWGAfCn5A'
    }
});


export default directionsApi;


