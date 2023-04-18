import { configureStore } from '@reduxjs/toolkit';
import goodsReduser from './goodsSlice';
import cartReducer from './cartSlice';

export default configureStore({
    reducer: {
        goods: goodsReduser,
        cart: cartReducer,
    },
});
