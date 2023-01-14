import { createSlice } from '@reduxjs/toolkit';

const sliceCart = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		totalPrice: 0,
		totalProduct: 0,
	},
	reducers: {
		setPrice: (state, action) => {
			// console.log(action.payload)
			const { increment, index } = action.payload;

			let copyArray = [...state.cart];

			copyArray[index].cartTotal +=
				copyArray[index].price * increment;

			state.totalPrice = subTotal(copyArray);

			if (copyArray[index].count === 1 && increment === -1) {
				copyArray.splice(index, 1);
				state.totalProduct--;
				state.totalPrice = subTotal(copyArray);
			} else {
				copyArray[index].count += increment;
			}

			state.cart = copyArray;
		},
		getDataCart: (state, action) => {
			let copyArray = [...state.cart];

			let findIndex = null;
			copyArray.find((el, index) => {
				if (el.id === action.payload.id) {
					findIndex = index;
					return;
				}
			});

			if (findIndex === null) {
				copyArray.push({
					...action.payload,
					count: 1,
					cartTotal: action.payload.price,
				});
				state.totalPrice += action.payload.price;
				state.cartTotal++;
				state.totalProduct++;
			} else {
				copyArray[findIndex].count++;
			}
			state.cartTotal += action.payload.price;
			state.cart = copyArray;
		},
		removeProduct: (state, action) => {
			const { index, item } = action.payload;
			let copyArray = [...state.cart];
			copyArray.splice(index, 1);
			state.totalProduct--;

			state.cart = copyArray;

			state.totalPrice = subTotal(copyArray);
		},
	},
});

function subTotal(cart) {
	return cart.reduce((acc, current) => {
		return acc + current.cartTotal;
	}, 0);
}

export const { getDataCart, setPrice, removeProduct } =
	sliceCart.actions;
export default sliceCart.reducer;
