

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS',
});

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const createProduct = (product) => ({
  type: 'CREATE_PRODUCT',
  payload: product,
});

export const updateProduct = (product) => ({
  type: 'UPDATE_PRODUCT',
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: 'DELETE_PRODUCT',
  payload: productId,
});

export const fetchProductsError = (error) => ({
  type: 'FETCH_PRODUCTS_ERROR',
  payload: error,
});

export const setSelectedProduct = (product) => ({
  type: 'SET_SELECTED_PRODUCT',
  payload: product,
});