import { useEffect, useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Nav from './components/nav'
import Footer from './components/footer'
import Index from './pages/Index/Index'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery'
import Cart from './pages/Cart/Cart'
import Investment from './pages/Investment/Investment'
import PageOne from './pages/PageOne/PageOne'
import Privacy from './pages/Privacy/Privacy'
import Policies from './pages/Policies/Policies'
import Products from './pages/Products/Products'
import ProductScreen from './pages/ProductScreen/ProductScreen'
import Success from './pages/success/Success'
import AgeVerification from './pages/AgeVerification/AgeVerification'
import PreLoader from './components/Preloader'
import Payment from './pages/Payment/Payment'
import Home from './pages/Home/home'
import Shipping from './pages/Shipping/Shipping'
import PaymentPlan from './Payment2/PaymentPlan'


function App() {
   
    const [isLoading, setIsLoading] = useState(true);

  
    useEffect(() => {
      const DataFetch = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      };
  
      DataFetch();
    }, []);
  return  isLoading ? (
    <PreLoader/> 
  ) : 
    (
    <div>
      <Nav/>
    
    <Routes>
     <Route path="/" exact element={<AgeVerification/> } />     
     <Route path="/index" exact element={<Index/> } />     
     <Route path="/home" exact element={<Home/> } />     
     <Route path="/login" exact element={<Login/> } />     
     <Route path="/register" exact element={<Register/> } />        
     <Route path="/about" exact element={<About/> } />     
     <Route path="/product" exact element={<Products/> } />     
     <Route path="/product/:slug" exact element={<ProductScreen/> } />     
     <Route path="/blog" exact element={<Blog/> } />     
     <Route path="/payment" exact element={<Payment/> } />     
     <Route path="/paymentplan" exact element={<PaymentPlan/> } />     
     <Route path="/cart" exact element={<Cart/> } />     
     <Route path="/contact" exact element={<Contact/> } />     
     <Route path="/gallery" exact element={<Gallery/> } />   
     <Route path="/investment" exact element={<Investment/> } />   
     <Route path="/blog/:id" exact element={<PageOne/> } />   
     <Route path="/privacy" exact element={<Privacy/> } />   
     <Route path="/shipping" exact element={<Shipping/> } />   
     <Route path="/policy" exact element={<Policies/> } />   
     <Route path="/success" exact element={<Success/> } />   
    </Routes>  
    <Footer/>   
    </div>
  )
}

export default App
