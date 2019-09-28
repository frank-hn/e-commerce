import axios from 'axios'
import { GET_ALL_PRODUCT } from './__types'

export default () => async dispatch => {
    try {
        const response = await axios.get('https://turing-ecommerce-challenge.herokuapp.com/api/products')
        // console.log(response.data)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response.data.rows,
            status: response.data.status
        })
    } catch (error) {
        return {
            error: error.message
        }
    }
}