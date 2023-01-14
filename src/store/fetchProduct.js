export const fetchProduct = async (url) => {
	let data = await fetch(
		`https://dummyjson.com/products/category/${url}`
	);

	return data.json();
};
