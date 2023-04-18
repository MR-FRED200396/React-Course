import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {},
    },
    reducers: {
        increment: (state, data) => {
            const article = data.payload;
            if (state.value[article] === undefined) state.value[article] = 0;
            state.value[article]++;
        },
        minusGoods: (state, data) => {
            const article = data.payload;
            state.value[article]--;
            if (state.value[article] === 0) {
                delete state.value[article];
            }
        },
        deleteGoods: (state, data) => {
            const article = data.payload;
            delete state.value[article];
        },
    },
});

export const { increment, minusGoods, deleteGoods } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export default cartSlice.reducer;

// const article = data.payload;

// if (!article || state.value[article] === 0) return state;
// state.value[article]--;
