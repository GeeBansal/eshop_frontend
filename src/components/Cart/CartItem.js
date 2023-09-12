import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/item';

const CartItem = (props) => {
  const dispatch=useDispatch();
  const onRemoveHandler=()=>{
    dispatch(cartActions.removeFromCart(props.id))
  }
  return (
    <li>
    
    <h1>{props.title}</h1>
    <p>{props.quantity}</p>
    <h2>{props.totalPrice}</h2>
    <h3>{props.price}</h3>
    <button onClick={onRemoveHandler} >Remove from Cart</button>
    </li>
  )
}

export default CartItem