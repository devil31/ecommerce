import {combineReducers} from 'redux'
import ItemReducer from '../reducers/ItemReducer'
import CartReducer from '../reducers/CartReducer'

const rootReducer = combineReducers({
    ItemReducer,
    CartReducer,
})

export default rootReducer