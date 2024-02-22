import { useDispatch, useSelector } from 'react-redux';
import {
    getCartAsync,
    updateProductQuantityAsync,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItemInCart,
} from '../stores/cartSlice';

const useCart = () => {
    const dispatch = useDispatch();
    const productsInCart = useSelector((state) => state.cart.products);
    const cartStatus = useSelector((state) => state.cart.status);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const getCart = (accessToken) => {
        dispatch(getCartAsync({ accessToken }));
    };

    const updateQuantity = (productId, quantity, accessToken) => {
        dispatch(updateProductQuantityAsync({ productId, quantity, accessToken }));
    };

    const clearAll = (accessToken) => {
        dispatch(clearCart({ accessToken }));
    };

    const increaseProductQuantity = (productId, accessToken) => {
        dispatch(increaseQuantity({ productId, accessToken }));
    };

    const decreaseProductQuantity = (productId, accessToken) => {
        dispatch(decreaseQuantity({ productId, accessToken }));
    };

    const deleteProductFromCart = (productId, accessToken) => {
        dispatch(deleteItemInCart({ productId, accessToken }));
    };

    return {
        productsInCart,
        cartStatus,
        totalQuantity,
        getCart,
        updateQuantity,
        clearAll,
        increaseProductQuantity,
        decreaseProductQuantity,
        deleteProductFromCart,
    };
};

export default useCart;
