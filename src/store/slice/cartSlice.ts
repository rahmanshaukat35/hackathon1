import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AddToCartType {
	cartItems: Array<any>;
	totalAmount: number;
	totalQuantity: number;
}

const initialState: AddToCartType = {
	cartItems: [],
	totalAmount: 0,
	totalQuantity: 0,
};

export const addToCartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.cartItems.find(
				(item) => item.id === newItem.id
			);
			state.totalQuantity++;

			if (!existingItem) {
				state.cartItems.push({
					id: newItem.id,
					productName: newItem.productName,
					imgUrl: newItem.imgUrl,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice =
					Number(existingItem.totalPrice) + Number(newItem.price);
			}
			state.totalAmount = state.cartItems.reduce(
				(total, item) => total + Number(item.price) * Number(item.quantity),
				0
			);
		},

		removeFromCart: (state, action) => {
			const id = action.payload;
			const existingItem = state.cartItems.find((item) => item.id === id);

			if (existingItem) {
				state.cartItems = state.cartItems.filter((item) => item.id !== id);
				state.totalQuantity = state.totalQuantity - existingItem.quantity;
			}

			state.totalAmount = state.cartItems.reduce(
				(total, item) => total + Number(item.price) * Number(item.quantity),
				0
			);
		},
	},
});

export const { addToCart, removeFromCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
