export const fetchSingleProduct = async (id) => {
	let data = await fetch(`https://dummyjson.com/products/${id}`);
	return data.json();
};
