import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://demometaway.vps-kinghost.net:8485/api' 
})

export const setBearerToken = token => {
  axios.defaults.headers.common['Authorization'] = `bearer ${token}`
}
