import { GET_ALL_PRODUCT, SEARCH_PRODUCTS, ADDTOCART, CARTPRODUCTS, ERRORADDINGTOCART } from '../actions/__types'
const initialState = {}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: payload
            }
        case SEARCH_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case ADDTOCART:
            return {
                ...state,
                addedCart: payload
            }
        case CARTPRODUCTS:
            return {
                ...state,
                products: payload
            }
        case ERRORADDINGTOCART:
            return {
                ...state,
                products: payload
            }
            default:
                return state
    }
}