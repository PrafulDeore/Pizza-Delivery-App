import { Pizza } from '../Components/Pizza'
// import { pizzaS } from '../db'
import {useDispatch,useSelector} from "react-redux"
import React, { useEffect, useState } from 'react'
import { getAllPizzas } from '../Redux/Actions/pizzaAction'




export default function Home() {


  const []=useState()
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getAllPizzas())
  },[])

  const pizzasState=useSelector(state=>state.getAllPizzasReducer)

  const{loading,error,pizzaS}=pizzasState

  return (
   <>
     <div className='row'>
    {loading ? (<h1>Loading</h1>) : error?(<h1>Something Went Wrong</h1>):(

      pizzaS.map((pizza)=>{
        return(
            <div className='col-md-4 p-8'  key={pizza._id} >
                 <div>
                    <Pizza pizza={pizza} />
                 </div>
            </div>
        )
        
               })
    )}

     </div>
   </>
  )
}
