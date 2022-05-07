import { useState } from "react"
import { Modal } from "react-bootstrap"
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../Redux/Actions/cartAction";

export const Pizza = ({ pizza }) => {

    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState("small")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
     const dispatch=useDispatch()
   function handleAddToVCart(){
       dispatch(addToCart(pizza,quantity,variant))
    // console.log("Clicked")
   }
    
    return (
        <div className="home shadow-lg p-3 mb-5 bg-white rounded">
           <div onClick={handleShow}>
           <h1>{pizza.name}</h1>
           <img src={pizza.image} className="img-fluid" />
           </div>

            <div className="felx-container">
                <div className="w-100 m-1"  >
                    <p>Varientss</p>
                    <select className="form-control"
                        onChange={(e) => { setVariant(e.target.value) }}
                        value={variant} >
                        {pizza.varients.map(varient => {
                            return <option value={varient}>
                                {varient}
                            </option>
                        })}
                    </select>

                </div>

                <div className="w-100 m-1" >
                    <p>Quantity</p>
                    <select className="form-control"
                        onChange={(e) => { setQuantity(e.target.value) }}
                        value={quantity} >
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>  /* for  quantity selction*/
                        })}
                    </select>
                </div>
            </div>


            <div className="felx-container">
                <div className="m-1 width-100">
                    <h1 className="m-2 ">Price :{pizza.prices[0][variant] * quantity}</h1>
                </div>
                <div className="m-1 width-100">
                    <button className="btn" onClick={handleAddToVCart}>Add To Cart</button>
                </div>
            </div>





            <Modal show={show}>
                <Modal.Header >
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" styel={{height:"400px"}}/>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Close</button>

                </Modal.Footer>
            </Modal>
        </div>
    )



}