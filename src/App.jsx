


import React from 'react';
import CreateProductForm from './components/CreateProductForm';
import UpdateProductForm from './components/UpdateProductForm'
import GetProducts from './components/GetProducts';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';


const App = () => {

  return (
    <>
        <Routes>
          <Route  path='/' element={<Navbar />}>
             <Route index element = {<Home />} />
             <Route path='products' element={<GetProducts />} />
             <Route path='createProducts' element={<CreateProductForm />} />
             <Route path='updateProducts' element={<UpdateProductForm />} />
          </Route>
        </Routes>  
    
      </>
  );
};

export default App;
