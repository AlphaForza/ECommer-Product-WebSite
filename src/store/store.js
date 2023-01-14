import { configureStore } from '@reduxjs/toolkit';

// slice
import sliceCart from './sliceCart';
import sliceFavorite from './sliceFavorite';
import sliceProduct from './sliceProduct';

const store = configureStore({
	reducer: {
		getProduct: sliceProduct,
		setFavorite: sliceFavorite,
		getCart: sliceCart,
	},
});

export default store;
