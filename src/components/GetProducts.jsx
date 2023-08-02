import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setSelectedProduct, deleteProduct } from '../actions/productActions';
import { useState } from 'react';



const ProductCard = ({ product, onUpdate, onDelete }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const openConfirmationModal = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };
  return (
    <div className=' border-2 border-black rounded-lg bg-[#fdfdfd] p-6 w-[250px] h-[400px] relative'>
      <div>ID: {product.id}</div>
      <div>Title: {product.title}</div>
      {/* <div>Description: {product.description}</div>
      <div>Price: {product.price}</div>
      <div>Discount Percentage: {product.discountPercentage}</div>
      <div>Rating: {product.rating}</div>
      <div>Stock: {product.stock}</div>
      <div>Brand: {product.brand}</div> */}
      <div>Category: {product.category}</div>
      {/* <div>Thumbnail: {product.thumbnail}</div> */}
      {/* <div>
        Images:
        {product.images.map((image) => (
          <img src={image} alt="Product" key={image} />
        ))}
      </div> */}
      <div className=' flex justify-center mt-7'>
        {/* Render the first image of the product */}
        {/* {product.images.length > 0 && ( */}
          <img src={product.images[0]} alt="Product" className=' h-[150px] w-[150px] rounded-[15px]' />
        {/* )} */}
      </div>
      <div className="btn flex absolute bottom-2">

        <button className=' p-2 m-2 bg-[#0a493b] text-white rounded-md border-none' onClick={onUpdate}>Update</button>
        <button className=' p-2 m-2 bg-[#0a493b] text-white rounded-md border-none' onClick={openConfirmationModal}>Delete</button>
        {showConfirmation && (
        <div className="confirmation-modal absolute rounded-lg right-2 w-[300px] p-3 z-10 bg-slate-300">
          <p>Are you sure you want to delete this product?</p>
          <button className=' bg-[green] px-2 m-2 rounded' onClick={() => setShowConfirmation(false)}>No</button>
          <button className=' bg-[red] px-2 m-2 rounded' onClick={onDelete}>Yes</button>
        </div>
      )}
      </div>
    </div>
  );
};

const GetProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prod.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
    setShowConfirmation(false);
  };

  const handleUpdateProduct = (product) => {
    dispatch(setSelectedProduct(product));
  };

  return (
    <div className=' bg-[#f3c3c3] '>
      {/* <h1 className=' text-center text-white text-[25px] font-bold bg-[#050522] p-3'> Products Page</h1> */}
      <div className="card flex flex-wrap p-5  gap-8 justify-center">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            onUpdate={() => handleUpdateProduct(product)}
            onDelete={() => handleDeleteProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default GetProducts;