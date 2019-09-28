import { combineReducers } from 'redux';
import products from './products.reducer'
import categories from './categories.reducer'
const rootReducer = combineReducers({
    products,
    categories
});

export default rootReducer;
