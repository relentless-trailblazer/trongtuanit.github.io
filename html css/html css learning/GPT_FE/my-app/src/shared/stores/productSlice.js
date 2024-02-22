
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import axios from 'axios';

const initialState = {
  allProducts: [
    {
      _id: '',
      name: '',
      image: [''],
      price: 0,
      unit: 'cai'
    }
  ],
  searchedProducts: [
    {
      _id: '',
      name: '',
      image: [''],
      price: 0,
      unit: 'cai'
    }
  ],
}
const accessToken = useSelector((state) => state.user.accessToken);
const apiBaseUrl = process.env.BASE_URL; 


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    allProducts: async (state, action) => {
      const response = await axios.get(`${apiBaseUrl}/products/`);
      // TODO: check null response
      state.allProducts = response.data;
    },
    searchProducts: async (state, action) => {
      const { field, operator, value } = action.payload;
      const response = await axios.post(`${apiBaseUrl}/products/search`, { field, operator, value });
      // TODO: check null response
      state.searchedProducts = response.data;
    },
    createProduct: async (state, action) => {
      const { name, price, unit, images } = action.payload;
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('unit', unit);
      images.forEach((image) => {
        formData.append('images', image);
      });
      const response = await axios.post(`${apiBaseUrl}/products/create/`, formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data', // Đặt loại dữ liệu là form-data
        },
      });
      // TODO: check null response
      state.allProducts.push(response.data);
    },
    createProductWithImageLinks: async (state, action) => {
      const { name, price, unit, images } = action.payload;
      const response = await axios.post(`${apiBaseUrl}/products/create-with-img-links/`, { name, price, unit, images }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      // TODO: check null response
      state.allProducts.push(response.data);
    },
    productModified: async (state, action) => {
      const { _id, name, price, unit, images } = action.payload;
      const response = await axios.put(`${apiBaseUrl}/products/edit/${_id}`, { name, price, unit, images }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const index = state.allProducts.findIndex(p => p._id === _id);
      if (index !== -1) {
        state.allProducts[index] = response.data;
      }
    },
  },
});

export const {
  allProducts,
  searchProducts,
  createProduct,
  createProductWithImageLinks,
  productModified,
} = productSlice.actions;



export default productSlice.reducer;


