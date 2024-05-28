import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1IjoibXlrM3MiLCJhIjoiY2xnYjh3OGtjMDFlcjNrbGkzdXhwOGl3eCJ9.4FzeV3kSLsOeSOWGAfCn5A';

if ( !navigator.geolocation ) {
    alert('Tu navegador no soporta el GeoLocation');
    throw new Error('Tu navegador no soporta el GeoLocation');
}



createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
