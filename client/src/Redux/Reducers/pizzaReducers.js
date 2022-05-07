// !Reducer Defines How ToDO-------------
import { GET_PIZZA_FAILED, GET_PIZZA_REQUEST, GET_PIZZA_SUCCESS } from "../Actions/pizzaAction";



// !Reducer always takes state/store and action =type & payload
const init={
    "loading":false,
     "error":false,
     "pizzaS":[]
}
// !Reducer always takes state/store and action =type & payload
export const getAllPizzasReducer =(store=init,{type,payload})=>{

    switch(type){

        case GET_PIZZA_REQUEST:
            return{
                ...store,
                "loading":true,
                "error":false
            }

            case GET_PIZZA_SUCCESS:
                return{
                    ...store,
                   pizzaS: (payload.data),
                    "loading":false,
                    "error":false,
                }
            case GET_PIZZA_FAILED :
                return{
                    ...store,
                    "error":true,
    
                }  
                    default:
                        return store 
                
    }


}