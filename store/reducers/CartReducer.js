import * as actionTypes from '../actions/Cart'



 const initialState = {
     Cart:[],
     Delete:[],
     addCart:[],
     updateCart:[]

 }

 const CartReducer = (state=initialState,action)=>{
     switch (action.type) {
         case actionTypes.FETCH_CART:
             
             return{
                 ...state,
                 Cart:action.Cart
             }
             case actionTypes.ADD_CART:
                 return{
                     ...state,
                     addCart:action.add
                     
                 }
                 case actionTypes.UPDATE_CART:
                     return{
                         ...state,
                         updateCart:action.updateCart
                     }
             case actionTypes.REMOVE_CART:
                 return{
                     ...state,
                     Delete:action.remove
                   
                 }
     
         default:
            return state
     }
 }

 export default CartReducer;