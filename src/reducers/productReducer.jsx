

const initialState = {
  products: [],
  limit: "",
  skip : "",
  total : "",
  error: null,
  selectedProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, ...action.payload, error: null };
    case 'CREATE_PRODUCT':
      return { ...state, products: [ action.payload,...state.products], error: null };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        error: null,
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
        error: null,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return { ...state, error: action.payload };
    case 'SET_SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};

export default productReducer;