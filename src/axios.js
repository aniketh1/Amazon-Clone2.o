import axios from 'axios';

// Update with the URL where your Firebase function is deployed
const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-2676d/us-central1/api',
});

export default instance;


