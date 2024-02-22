import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


const accessToken = useSelector((state) => state.user.accessToken);
const isAdmin = useSelector((state) => state.user.isAdmin);
const initialState = {
  orders: [{
    userId: null,
    products: [],
    totalQuantity: 0,
    address: '',
    status: 'Đang tạo'
  }],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    getAllOrders: async (state, action) => {
      if(!isAdmin) return;
      const response = await axios.get(`${apiBaseUrl}/orders/`, {
        hea
      });
      state.orders = response.data.orders;
    },
    getAllOrdersByUser: async (state, action) => {

      const response = await axios.get(`${apiBaseUrl}/orders/`);
      state.orders = response.data.orders;
    },
  },
});

export const { addOrder, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;