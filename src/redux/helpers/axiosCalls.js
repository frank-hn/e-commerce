import axios from 'axios'

const token = localStorage.getItem('token')

const baseUrl = 'https://turing-ecommerce-challenge.herokuapp.com/api/'

export default axios.create({
    baseUrl,
    headers: {
        'Authorization': `Bearer ${token}`
    }
})