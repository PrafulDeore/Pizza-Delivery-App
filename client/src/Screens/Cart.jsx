// import React from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { cartReducer } from '../Redux/Reducers/cartReducer';
// export default function Cart() {

//   const cartState = useSelector(store => store.cartReducer);  //*useSelector hook is import the key and object from store and then we can use it in component.
//   const cartItems = cartState.cartItems

//   return (
//     <>
//       <div className='row justify-content-center' style={{ border: "0px solid black" }}>

//         <div className='col-md-6'>
//           <h2 style={{ fontSize: "40px", fontWeight: "bolder", border: "0px solid red" }}>My Cart</h2>



//           {cartItems.map((e) => {
//             return (
//               <div className="flex-container" >
//                 <div className='text-left'   >
//                   <h1>{e.name} [{e.variant}]</h1>
//                   <h1>Price:{e.quantity} * {e.prices[0][e.varient]}={e.price}</h1>
//                    <div className="flex-container"  style={{display:'inline-flex'}}>
//                    <h1>Quantity: </h1>
//                  <h2>+</h2>
//                   <b>{e.quantity}</b>
//                   <h2>-</h2>

//                    </div>

//                 </div>


//                 <div></div>


//                 <div></div>

//               </div>

//             )

//           })}


//         </div>

//         <div className='col-md-4' style={{ border: "0px solid red" }}>
//         </div>
//       </div>
//     </>
//   )
// }



import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentsIcon from '@mui/icons-material/Payment';

import { useSelector, useDispatch } from "react-redux"
import { cartReducer } from '../Redux/Reducers/cartReducer';
import { addToCart, deleteFromCart } from '../Redux/Actions/cartAction';


export default function MediaControlCard() {
  const theme = useTheme();

  const dispatch = useDispatch()
  const cartState = useSelector(store => store.cartReducer);  //*useSelector hook is import the key and object from store and then we can use it in component.
  const cartItems = cartState.cartItems

  const initial = 0
  var subTotal = cartItems.reduce((previousValue, currentValue) =>
    previousValue + currentValue.price, initial)


  // const sumWithInitial = array1.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue,
  //   initialValue
  // );

  return (
    <>
      <h2 style={{ fontWeight: "bolder" }}>My Cart</h2>

      <div className="mainDiv" style={{ display: "flex", border: "1px solid red", width: "100%" }}>
        <div className="leftDiv" style={{ border: "1px solid red", width: "50%" }}>
          {cartItems.map((e) => {
            return (

              <Card sx={{ display: 'flex', border: "1px solid gray", width: "100%", marginTop: "30px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', border: "0px solid red", width: "60%" }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {e.name}
                    </Typography>


                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      [{e.variant}]
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      <h1>Price:{e.quantity} * {e.prices[0][e.variant]}={e.price}</h1>
                    </Typography>

                    <Typography sx={{ display: 'flex', justifyContent: "center" }}>
                      <h1>Quantity: </h1>
                      <IconButton variant="contained"
                        color="success"
                        sx={{ height: "25px" }}
                        onClick={() => { dispatch(addToCart(e, e.quantity + 1, e.variant,)) }}
                      >
                        +
                      </IconButton>
                      <h4><b>{e.quantity}</b></h4>
                      <IconButton variant="contained"
                        color="error"
                        sx={{ height: "25px" }}
                        onClick={() => { dispatch(addToCart(e, e.quantity - 1, e.variant)) }}
                      >
                        -
                      </IconButton>
                    </Typography>


                  </CardContent>


                </Box>

                <Box sx={{ border: "0px solid red", width: "30%", height: "50%" }}>
                  <img src={e.image} className="img-fluid" />
                </Box>

                <Box sx={{ border: "0px solid red", width: "0%", height: "50%" }}>
                  <Button variant="outlined"
                    sx={{ color: "red", border: "none" }}
                    startIcon={<DeleteIcon />}

                    onClick={() => { dispatch(deleteFromCart(e)) }}
                  >

                  </Button>
                </Box>

              </Card>


            )
          })}
        </div>


        <div className="rightDiv" style={{ border: "1px solid red", width: "50%" }}>
          <Card>
            <h2 style={{ fontSize: "85px" }}>SubTotal:{subTotal}/-Rs</h2>

            <Button
              variant="outlined"
              startIcon={<PaymentsIcon />}>
              CHEACK OUT</Button>
          </Card>
        </div>
      </div>
    </>


  );
}

