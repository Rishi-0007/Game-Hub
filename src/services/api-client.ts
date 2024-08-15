import axios from 'axios'; 

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '145bc56c9f494d9a96b487152be324dc'
    }     
});