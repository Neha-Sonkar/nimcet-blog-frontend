import axios from 'axios'
console.log("API URL:", import.meta.env.API_URL)
const API =axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true
})

export default API  
