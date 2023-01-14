import { createSlice } from '@reduxjs/toolkit';

const sliceProduct = createSlice({
	name: 'product',
	initialState: {
		product: [],
		currentProduct: 'smartphones',
	},
	reducers: {
		setCurrentProduct: (state, action) => {
			state.currentProduct = action.payload;
		},
		setAllProduct: (state, action) => {
			state.product = action.payload;
		},
	},
});

export const { setCurrentProduct, setAllProduct } =
	sliceProduct.actions;
export default sliceProduct.reducer;
