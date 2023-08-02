import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../actions/productActions';



const UpdateProductForm = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.prod.selectedProduct);

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

  useEffect(() => {
    if (selectedProduct) {
      setTitle(selectedProduct.title);
      setDescription(selectedProduct.description);
      setPrice(selectedProduct.price);
      setDiscountPercentage(selectedProduct.discountPercentage);
      setRating(selectedProduct.rating);
      setStock(selectedProduct.stock);
      setBrand(selectedProduct.brand);
      setCategory(selectedProduct.category);
      setThumbnail(selectedProduct.thumbnail);
      setImages(selectedProduct.images);
    }
  }, [selectedProduct]);

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
    const updatedProduct = {
      id: selectedProduct.id,
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
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <div className="bg-white p-8 shadow rounded-lg max-w-md mx-auto m-2">
      <h2 className="text-3xl font-bold mb-4">Update Product</h2>
      {selectedProduct ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
          {/* ... (other form elements with similar styling) ... */}
          <div className="mb-4">
            <label htmlFor="images" className="block text-gray-700 font-semibold">
              Images:
            </label>
            <input
              id="images"
              type="file"
              multiple
              onChange={handleImagesChange}
              className="mt-1 block w-full"
            />
            <div className="mt-2 flex space-x-2">
              {images.map((imageUrl) => (
                <img
                  key={imageUrl}
                  src={imageUrl}
                  alt="Product"
                  className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4"
          >
            Update
          </button>
        </form>
      ) : (
        <p>No product selected.</p>
      )}
    </div>
    // <div>
    //   <h2>Update Product</h2>
    //   {selectedProduct ? (
    //     <form onSubmit={handleSubmit}>
    //       <div>
    //         <label>Title:</label>
    //         <input type="text" value={title} onChange={handleTitleChange} required />
    //       </div>
    //       <div>
    //         <label>Description:</label>
    //         <textarea value={description} onChange={handleDescriptionChange}  />
    //       </div>
    //       <div>
    //         <label>Price:</label>
    //         <input type="number" step="0.01" value={price} onChange={handlePriceChange}  />
    //       </div>
    //       <div>
    //         <label>Discount Percentage:</label>
    //         <input
    //           type="number"
    //           step="0.01"
    //           value={discountPercentage}
    //           onChange={handleDiscountPercentageChange}
             
    //         />
    //       </div>
    //       <div>
    //         <label>Rating:</label>
    //         <input
    //           type="number"
    //           step="0.01"
    //           value={rating}
    //           onChange={handleRatingChange}
              
    //         />
    //       </div>
    //       <div>
    //         <label>Stock:</label>
    //         <input type="number" value={stock} onChange={handleStockChange}  />
    //       </div>
    //       <div>
    //         <label>Brand:</label>
    //         <input type="text" value={brand} onChange={handleBrandChange}  />
    //       </div>
    //       <div>
    //         <label>Category:</label>
    //         <input type="text" value={category} onChange={handleCategoryChange}  />
    //       </div>
    //       <div>
    //         <label>Thumbnail:</label>
    //         <input type="text" value={thumbnail} onChange={handleThumbnailChange}  />
    //       </div>
    //       <div>
    //         <label>Images:</label>
    //         <input type="file" multiple onChange={handleImagesChange} />
    //         {images.map((imageUrl) => (
    //           <img src={imageUrl} alt="Product" key={imageUrl} />
    //         ))}
    //       </div>
    //       <button type="submit">Update</button>
    //     </form>
    //   ) : (
    //     <p>No product selected.</p>
    //   )}
    // </div>
  );
};

export default UpdateProductForm;