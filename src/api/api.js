import axios from 'axios';

export const put = async (resource, value) => {
    const {data} = await axios.put("https://61c5e909c003e70017b799a3.mockapi.io/" + resource, value)
    
    console.log(data)
    return data
}
export default axios.create({
    baseURL:"https://61c5e909c003e70017b799a3.mockapi.io/",
});

