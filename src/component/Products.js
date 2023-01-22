import React, { useEffect, useState } from 'react'
import Product from './Product'
const Products = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(res=> res.json()).then(data => {
            console.log(data);
            setData(data);
        }).catch(err => console.log("something went wrong...",err))
    },[])
  return (
    <div>
        <div>
            Products
        </div>
        <div>
            {data.map((item,index) => <Product key={index} detail={item}/>)}
        </div>
    </div>
  )
}

export default Products