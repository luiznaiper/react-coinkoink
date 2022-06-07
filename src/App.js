<<<<<<< HEAD
import React from 'react'

import {Products, Navbar} from "./components"
=======
import React, {useState, useEffect} from 'react'
import {commerce} from "./lib/commerce"
import { Products } from './components/Products/Products'
>>>>>>> a713a758fd4964e710619d871a55984b8f835fd3

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