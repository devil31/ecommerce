import * as actionTypes from '../actions/Item'



const initialState = {
    Items:[],
}

const ItemReducer = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.FETCH_ITEMS:
            return {
                ...state,
                Items:action.items
                        }    
    
        default:
           return state
    }
}

export default ItemReducer;