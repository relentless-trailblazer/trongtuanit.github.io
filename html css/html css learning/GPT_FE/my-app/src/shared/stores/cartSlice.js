import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { useSelector } from 'react-redux';


const accessToken = useSelector((state) => state.user.accessToken);
const apiBaseUrl = process.env.BASE_URL; 
const initialState = {
	products: [],
	totalQuantity: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		getCart: async (state, action) => {
			try {
				const response = await axios.get(`${apiBaseUrl}/cart`, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});
				if(!response.data.cart) {
					console.log('response: ' + JSON.stringify(response));
					return
				}
				const cart = response.data.cart;
				state.products = cart.products;
				state.totalQuantity = cart.totalQuantity;
			} catch (error) {
				state.error = error.message;
			}
		},
		updateProductQuantity: async (state, action) => {
			try {
				const { productId, quantity } = action.payload;
				const response = await axios.put(
					`${apiBaseUrl}/cart/update`,
					{ productId, quantity },
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},

					}
				);
				if(!response.data.cart) {
					console.log('response: ' + JSON.stringify(response));
					return
				}
				const cart = response.data.cart;
				state.products = cart.products;
				state.totalQuantity = cart.totalQuantity;
			} catch (error) {
				state.error = error.message;
			}
		},
		clearCart: async (state, action) => {
			try {
				const response = await axios.delete(`${apiBaseUrl}/cart/clear`,
					{
						headers: { Authorization: `Bearer ${accessToken}` },
					}, 
					{ productId, quantity }
				);

				if(!response.data.cart) {
					console.log('response: ' + JSON.stringify(response));
					return
				}
				const cart = response.data.cart;
				state.products = cart.products;
				state.totalQuantity = cart.totalQuantity;

			} catch (error) {
				state.error = error.message;
			}
		},
		deleteItemInCart: (state, action) => {
			const { productIds } = action.payload;
			const product = state.products.find((p) => p._id === productId);
			if (product) {
				const response = axios.put(
					`${apiBaseUrl}/cart/delete-items/`,
					{
						headers: { Authorization: `Bearer ${accessToken}` },
					}, { productIds }
				);
				
				if(!response.data.cart) {
					console.log('response: ' + JSON.stringify(response));
					return
				}
				const cart = response.data.cart;
				state.products = cart.products;
				state.totalQuantity = cart.totalQuantity;
			}
		},
	},
});

export const {
	getCart,
	updateProductQuantity,
	clearCart,
	deleteItemInCart
} = cartSlice.actions;

export default cartSlice.reducer;
