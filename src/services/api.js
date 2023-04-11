import axios from 'axios';

/*
    * Rodar com IPV4: json-server --watch -d 180 --host ENDERECO_DE_IP db.json
*/

const api = axios.create({
    baseURL: 'http://192.168.18.3:3000'
})

export default api;