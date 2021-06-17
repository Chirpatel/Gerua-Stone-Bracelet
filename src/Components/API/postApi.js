import axios from 'axios';

const getApi = async (config) =>{
    return ( await axios(config)).data;
}
export default getApi;