import axios from 'axios'
import { SEARCH_PRODUCTS } from './__types'

export default (term) => async dispatch => {
    try {
        const response = await axios.get(`https://turing-ecommerce-challenge.herokuapp.com/api/products/search?term=${term}`)
        console.log(response.data.result)
        dispatch({
            type: SEARCH_PRODUCTS,
            payload: response.data.result,
            status: response.data.status
        })
    } catch (error) {
        return {
            error: error.message
        }
    }
}