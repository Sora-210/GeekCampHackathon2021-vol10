import baseAxios from 'axios'
const api = baseAxios.create({
  baseURL: "http://localhost:8000"
})

export { api }