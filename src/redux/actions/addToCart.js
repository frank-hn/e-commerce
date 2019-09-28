import axios from 'axios'
import { ADDTOCART, ERRORADDINGTOCART, CARTPRODUCTS } from './__types'

export const addToCartAction = (product_id) => async dispatch => {
    try {
        const requestData = {
            cart_id: localStorage.getItem('cartID'),
            product_id,
            quantity: 1
        }
        const response = await axios.post(`https://turing-ecommerce-challenge.herokuapp.com/api/shoppingCart/add`, requestData)
        console.log(response.data)
        dispatch({
            type: ADDTOCART,
            payload: 'Product added to cart',
            status: response.data.status
        })
    } catch (error) {
        dispatch({
            type: ERRORADDINGTOCART,
            payload: 'Error adding to cart',
            status: error.status
        })
    }
}

export const CheckCartAction = () => async dispatch => {
    try {
        const cart_id = localStorage.getItem('cartID')
        const response = await axios.get(`https://turing-ecommerce-challenge.herokuapp.com/api/shoppingCart/${cart_id}`)
        console.log(response.data.products)
        dispatch({
            type: CARTPRODUCTS,
            payload: response.data.products,
            status: response.data.status
        })
    } catch (error) {
        dispatch({
            type: ERRORADDINGTOCART,
            payload: ['Error adding to cart'],
            status: error.status
        })
    }
}