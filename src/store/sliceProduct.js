import { createSlice } from '@reduxjs/toolkit';

const sliceProduct = createSlice({
	name: 'product',
	initialState: {
		product: [],
		currentProduct: 'smartphones',
		searchValue: '',
	},
	reducers: {
		setCurrentProduct: (state, action) => {
			state.currentProduct = action.payload;
		},
		setAllProduct: (state, action) => {
			state.product = action.payload;
		},
		setFilterProduct: (state, action) => {
			state.searchValue = action.payload;
			console.log('====================================');
			console.log(state.searchValue);
			console.log('====================================');
		},
	},
});

export const { setCurrentProduct, setAllProduct, setFilterProduct } =
	sliceProduct.actions;
export default sliceProduct.reducer;
