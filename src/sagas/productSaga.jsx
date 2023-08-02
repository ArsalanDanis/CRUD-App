import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setProducts, createProduct, updateProduct, deleteProduct } from '../actions/productActions';

function* fetchProductsSaga() {
  try {
    const response = yield call(axios.get, 'https://dummyjson.com/products');
    console.log("RESPONSE ", response)
    yield put(setProducts(response.data));
  } catch (error) {
    console.log('Error fetching products:', error);
  }
}

function* createProductSaga(action) {
  try {
    const response = yield call(axios.post, 'https://dummyjson.com/products', action.payload);
    console.log("CREATE ", response)
    yield put(createProduct(response.data));
  } catch (error) {
    console.log('Error creating product:', error);
  }
}

function* updateProductSaga(action) {
  try {
    const response = yield call(
      axios.put,
      `https://dummyjson.com/products/${action.payload.id}`,
      action.payload
    );
    yield put(updateProduct(response.data));
  } catch (error) {
    console.log('Error updating product:', error);
  }
}

function* deleteProductSaga(action) {
  try {
    yield call(axios.delete, `https://dummyjson.com/products/${action.payload}`);
    yield put(deleteProduct(action.payload));
  } catch (error) {
    console.log('Error deleting product:', error);
  }
}

function* productSaga() {
  yield takeLatest('FETCH_PRODUCTS', fetchProductsSaga);
  yield takeLatest('CREATE_PRODUCT_SAGA', createProductSaga);
  yield takeLatest('UPDATE_PRODUCT_SAGA', updateProductSaga);
  yield takeLatest('DELETE_PRODUCT_SAGA', deleteProductSaga);
}

export default productSaga;