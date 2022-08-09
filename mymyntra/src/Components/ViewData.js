import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewData = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?limit=10').then(response=>{
          setData(response.data)  
          console.log(data);
        })
    },[]);
  return (
    <div>ViewData</div>
  )
}

export default ViewData