import React from "react";
import { useDispatch } from 'react-redux'
// import { cartActions } from '../store/item';
import { cartActions } from "../../store/item";


const Item = (props) => {
  const dispatch=useDispatch();
    const onAddtocarthandler=()=>{
        dispatch(cartActions.addToCart({id:props.id,price:props.price,title:props.title}))
    }
  return (
    <li>
      <h5>{props.price}</h5>
      <h1>{props.title} </h1>
      <p>{props.desc}</p>
      <button onClick={onAddtocarthandler} >Add To Cart</button>
    </li>
  );
};

export default Item;
