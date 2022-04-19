import axios from "axios";
const API = axios.create({

    headers: {
        // "Content-type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    responseType: 'json',
});


export default API;