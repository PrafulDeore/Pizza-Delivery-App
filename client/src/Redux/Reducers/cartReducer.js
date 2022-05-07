// !Reducer Defines How ToDO-------------

// import { ADD_TO_CART} from "../Actions/cartAction"



export const cartReducer=(store={cartItems:[]},action)=>{
switch(action.type)
{
 
     case "ADD_TO_CART":


     const alreadyExist  =store.cartItems.find(item=>item._id === action.payload._id)

     if(alreadyExist){
        return({
            ...store,
            cartItems:store.cartItems.map(item=> item._id===action.payload._id ? action.payload:item )
        })
     }
     else{
         return({
            ...store,
             cartItems:[...store.cartItems,action.payload],
            
         })

         
        }

        case "DELETE_FROM_CART":
             return({
                 ...store,
                 cartItems:store.cartItems.filter(item=>
                     item._id !==action.payload._id
                 )
             })
         default: return (store)
         }

}

