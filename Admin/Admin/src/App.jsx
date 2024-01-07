import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import Form from './Forms/Form';
import {  Route, Routes } from 'react-router-dom';
import InvestmentForm from './Forms/InvestmentForm';
import BlogForm from './Forms/BlogForm';
import Success from './success/Success';
import Update from './Forms/Update';
import DeleteSuccess from './deleteSucess/DeleteSuccess';
import ProductUpdate from './Forms/productUpdate';
import AddressUpdate from './Forms/AddressUpdate';
import PaymentUpdate from './Forms/PaymentUpdate';
import DeleteBlog from './Forms/deleteBlog';

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />

   
    <Routes>
     <Route path="/" exact element={<Content/> } />    
     <Route path="/products" exact element={<Form/> } />     
     <Route path="/investment" exact element={<InvestmentForm/> } />     
     <Route path="/blog" exact element={<BlogForm/> } />     
     <Route path="/success" exact element={<Success/> } />     
     <Route path="/delete" exact element={<DeleteSuccess/> } />     
     <Route path="/update/:id" element={<Update/> } />  
     <Route path="/productUpdate/:id" element={<ProductUpdate/> } />  
     <Route path="/addressupdate/:id" element={<AddressUpdate/> } />  
     <Route path="/paymentupdate/:id" element={<PaymentUpdate/> } />  
     <Route path="/blogdelete/:id" element={<DeleteBlog/> } />  
    </Routes>
  

      </div>
    </>
  )
}

export default App
