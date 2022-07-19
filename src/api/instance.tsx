import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3001"
});
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
export default instance;
// json-server db.json json-server db.json -m ./node_modules/json-server-auth --port 3001