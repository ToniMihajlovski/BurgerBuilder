import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-e786e.firebaseio.com/'
});

export default instance;