import React from 'react'

export default function Order(props) {
  return (
    <>
    <td>{props.requestId.name}</td>
    <td>{props.requestId.problem}</td>
    <td>{props.orderStatus}</td>
    <td>{props.amount}</td>
    <td><button  type="button" class="btn btn-dark" onClick={()=> props.editView(props._id)}>Edit</button></td>
    <td><button  type="button" class="btn btn-dark" onClick={()=> props.deleteOrder(props._id)}>delete</button></td>
    </>
   
  )
}
