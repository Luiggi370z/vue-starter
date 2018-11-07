// For multiple axios instances (different endpoints) you can wrap multiple axios
// instances inside a http class to pass it to every api

// For single axios instance remove this file

// import axios from 'axios'

// export default class Http {
//   constructor() {
//     this.instance = axios.create({
//       baseURL: process.env.VUE_APP_BASE_API_URL
//     })

//     return this.init()
//   }

//   init() {
//     // Extra configuration for axios or interceptors
//   }
// }
