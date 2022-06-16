import React, {useState, useEffect} from 'react'
import {Navbar} from './components/Navbar/Navbar.jsx'
import {commerce} from "./lib/commerce"
import { Products } from './components/Products/Products'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async() => {
    const {data} = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
  
    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  //console.log(products)
  console.log(cart)
  return (
    <div>
         <Navbar totalItems={cart.total_items}/>
        <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  )
}

export {App}