//Action told us that what todo-------
import axios from "axios"
//! 1.Action Type--------------------->
export const GET_PIZZA_REQUEST="GET_PIZZA_LOADING";
export const GET_PIZZA_SUCCESS="GET_PIZZA_SUCCESS";
export const GET_PIZZA_FAILED="GET_PIZZA_FAIL";




//! 2.Action Creators----------------->
export const getPizzaLoading=()=>({
type:GET_PIZZA_REQUEST

})

export const getPizzaSuccess=(payload)=>({
type:GET_PIZZA_SUCCESS,
payload
})

export const getPizzaFialed=()=>({
    type:GET_PIZZA_FAILED
}); 




export const getAllPizzas=(payload)=>(dispatch)=>{
    dispatch(getPizzaLoading())
    axios.get('http://localhost:5000/getpizza', 
    {
      ...payload,
     
    })
    .then(function (response) {
      dispatch(getPizzaSuccess(response))
      console.log(response.data)
    })
    .catch(function (error) {
        dispatch(getPizzaFialed(error))
      console.log(error);
    });
}

// export const getAllPizzas=()=>dispatch=>{

//     dispatch({type:"GET_PIZZA_REQUEST"});

//     try{
//         const response=axios.get(`/api/pizza/getpizza`)
//         console.log(response);
//         dispatch({type:"GET_PIZZA_SUCCESS" ,payload:response.data})
//     }
//     catch(err){
//         dispatch({type:"GET_PIZZA_FAILED", payload:error})
//     }
// }





