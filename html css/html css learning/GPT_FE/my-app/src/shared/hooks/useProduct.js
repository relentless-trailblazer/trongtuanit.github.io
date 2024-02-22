import { useDispatch, useSelector } from 'react-redux';
import {
  allProducts,
  searchProducts,
  createProduct,
  createProductWithImageLinks,
  productModified,
} from '../stores/productSlice';

const useProduct = () => {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.products.allProducts);

  const fetchAllProducts = () => {
    dispatch(allProducts());
  };

  const searchProductsByField = (field, operator, value) => {
    dispatch(searchProducts({ field, operator, value }));
  };

  const addProduct = (name, price, unit, images) => {
    dispatch(createProduct({ name, price, unit, images }));
  };

  const addProductWithImageLinks = (name, price, unit, images) => {
    dispatch(createProductWithImageLinks({ name, price, unit, images }));
  };

  const modifyProduct = (_id, name, price, unit, images) => {
    dispatch(productModified({ _id, name, price, unit, images }));
  };

  return {
    allProductsData,
    fetchAllProducts,
    searchProductsByField,
    addProduct,
    addProductWithImageLinks,
    modifyProduct,
  };
};

export default useProduct;
