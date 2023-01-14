export const fetchCategory = async () => {
	let data = await fetch('https://dummyjson.com/products/categories');

	return data.json();
};
