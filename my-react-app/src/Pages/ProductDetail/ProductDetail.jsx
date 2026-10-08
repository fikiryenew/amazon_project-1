import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import  productCard  from '../../Components/Product/ProductCard'


function ProductDetail() {
  const {product,setproduct} = useState({})
  const [isLoading,setIsLoading] = useState(false)
  const {productId} = useParams()
  useEffect(() => {
    setIsLoading(true)
    axios.get('${productUrl}/product/${productId}')
    .then((res)=>{
    setProduct(res.data);
    setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  },[])
  return (
    <LayOut>
      {isLoading? (<Loader/>):(
    <productCard 
    product={product}
    flex ={true}
    renderDesc={true}
    renderAdd={true}
    />)}
    </LayOut>
  )
}

export default ProductDetail
