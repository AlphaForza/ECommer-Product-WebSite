export const fetchSearch = async (filter) => {
	let data = await fetch(`https://dummyjson.com/products`);

	return data.json();
};
