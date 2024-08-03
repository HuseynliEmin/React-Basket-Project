import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Context from './context/Context'
import Home from './page/Home'
import ProductDetail from './page/ProductDetail'
import Header from './components/Header'
import Basket from './page/Basket'
import Form from './page/Form'
function App() {
  const [products, setProducts] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [basket, setBasket] = useState([])

  const BASE_URL = import.meta.env.VITE_API
  async function ProductApi() {
    try {
      const response = await axios.get(BASE_URL)
      const list = response.data ? response.data : []
      setProducts(list)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    ProductApi()
  }, [])
  const data = {
    products,
    cartCount,
    basket,
    setBasket,
    setCartCount
  }
  return (

    <Context.Provider value={data}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-detail/:id' element={<ProductDetail />}></Route>
        <Route path='/basket' element={<Basket />}></Route>
        <Route path='/form' element={<Form />}></Route>
      </Routes>

    </Context.Provider>

  )
}

export default App
