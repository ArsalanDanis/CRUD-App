

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../actions/productActions';
import { useSelector } from 'react-redux';

import { toast ,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CreateProductForm = () => {
    const pro = useSelector((state) => state.prod.products);
  console.log("PRO #", pro)
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [images, setImages] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDiscountPercentageChange = (e) => {
    setDiscountPercentage(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.value);
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      description,
      price: parseFloat(price),
      discountPercentage: parseFloat(discountPercentage),
      rating: parseFloat(rating),
      stock: parseInt(stock),
      brand,
      category,
      thumbnail,
      images,
    };
    dispatch(createProduct(newProduct));
    toast.success('Product Created successfully!', {
      position: toast.POSITION.TOP_RIGHT
    });  
    setTitle('');
    setDescription('');
    setPrice('');
    setDiscountPercentage('');
    setRating('');
    setStock('');
    setBrand('');
    setCategory('');
    setThumbnail('');
    setImages([]);
  };

  return (
    <div className=' flex justify-center'>
      <form onSubmit={handleSubmit} className=' shadow-slate-950 rounded-md w-[600px] mt-3 flex flex-col items-center justify-center h-full border-2 border-[navy]'>
      <h2 className=' text-center text-white text-[25px] font-bold bg-[navy] p-3 w-[100%]'>Create new Products </h2>
        <div className='mb-4'>
        <label htmlFor="title" className="block text-gray-700 font-semibold">
              Title:
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
              className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
        <div className='mb-4'>
          <label className="block text-gray-700 font-semibold">Price:</label>
          <input className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="number" step="0.01" value={price} onChange={handlePriceChange} required />
        </div>
        <div className='mb-4'>
          <label  className="block text-gray-700 font-semibold">Discount Percentage :</label>
          <input className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            type="number"
            step="0.01"
            value={discountPercentage}
            onChange={handleDiscountPercentageChange}
        
          />
        </div>
        <div  className='mb-4'>
          <label  className="block text-gray-700 font-semibold">Rating:</label>
          <input className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            type="number"
            step="0.01"
            value={rating}
            onChange={handleRatingChange}
        
          />
        </div>
        <div className='mb-4'>
          <label  className="block text-gray-700 font-semibold">Stock:</label>
          <input className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="number" value={stock} onChange={handleStockChange} required />
        </div>
        <div>
          <label  className="block text-gray-700 font-semibold">Brand:</label>
          <input className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="text" value={brand} onChange={handleBrandChange}  />
        </div>
        <div  className='mb-4'>
          <label  className="block text-gray-700 font-semibold">Category:</label>
          <input className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="text" value={category} onChange={handleCategoryChange} />
        </div>
        <div  className='mb-4'>
          <label  className="block text-gray-700 font-semibold">Thumbnail:</label>
          <input className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"type="text" value={thumbnail} onChange={handleThumbnailChange}  />
        </div>
        <div className='mb-4'>
          <label  className="block text-gray-700 font-semibold">Images:</label>
     <input className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="file" multiple onChange={handleImagesChange} />
          {images.map((imageUrl) => (
            <img src={imageUrl} alt="Product" key={imageUrl} />
          ))}
        </div>
        <button className=' bg-black p-2 m-2 text-[gold] rounded-md' type="submit">Create Products</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateProductForm;