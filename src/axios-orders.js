import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://form-validation-react.firebaseio.com/'
});

export default instance;