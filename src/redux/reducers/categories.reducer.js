import { CATEGORIES} from '../actions/__types'
const initialState = {}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CATEGORIES:
            return {
                ...state,
                categories: payload
            }
            default:
                return state
    }
}