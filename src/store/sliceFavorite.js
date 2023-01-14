import { createSlice, current } from '@reduxjs/toolkit';

const sliceFavorite = createSlice({
	name: 'favorite',
	initialState: {
		favorite: [],
		total: 0,
	},
	reducers: {
		addFavorite: (state, action) => {
			let copyArr = [...state.favorite];

			let foundIndex = null;

			// first i found index of element
			copyArr.find((el, index) => {
				if (el.id === action.payload.id) {
					foundIndex = index;
					return;
				}
			});
			// then i ask, if dont have then add it
			if (foundIndex === null) {
				copyArr.push({ ...action.payload, activeFav: true });

				state.total++;
			} else {
				copyArr.splice(foundIndex, 1);

				state.total--;
			}

			state.favorite = copyArr;
		},
	},
});

export const { addFavorite } = sliceFavorite.actions;
export default sliceFavorite.reducer;
