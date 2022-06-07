import React, {useState, useEffect} from 'react'
import {Navbar} from './components/Navbar/Navbar.jsx'
import {commerce} from "./lib/commerce"
import { Products } from './components/Products/Products'

const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async() => {
    const {data} = await commerce.products.list()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products)
  return (
    <div>
      <Navbar/>
        <Products />
    </div>
  )
}

export {App}