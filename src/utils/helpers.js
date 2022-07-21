import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = "https://forum-express-api.herokuapp.com/api"
//local 版本 const baseURL = 'http://localhost:3000/api'

export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})