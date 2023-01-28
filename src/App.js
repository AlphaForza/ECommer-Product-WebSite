import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SingleCardProduct from './components/SingleCardProduct';
import { fetchSearch } from './store/fetchSearch';

function App() {
	const [allProduct, setAllProduct] = useState([]);
	// comes from sliceProduct, but input is from navbar.jsx
	const { searchValue } = useSelector((state) => state.getProduct);
	// get all products from API
	useEffect(() => {
		fetchSearch().then((data) => setAllProduct(data.products));
	}, []);

	// start just when something comes from search input
	useEffect(() => {
		// every time i send full array with product, to my var always have item
		fetchSearch().then((data) => selectFilterProduct(data.products));
	}, [searchValue]);
	// function for searching from input
	function selectFilterProduct(data) {
		let copyArray = data.slice();
		let filterProduct = copyArray.filter((el) => {
			return el.title
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});

		if (searchValue.length > 0) {
			setAllProduct(filterProduct);
		} else {
			fetchSearch().then((data) => setAllProduct(data.products));
		}
	}
	return (
		<div className='container w-full h-full mx-auto my-10'>
			<h1 className='text-4xl font-bold text-center text-orangeColor'>
				Electon Shop Company
			</h1>
			<p className='text-center text-2xl text-[#777] uppercase mb-10'>
				Welcome
			</p>
			<div className='flex flex-wrap items-center justify-center w-full gap-5'>
				{allProduct.map((item, index) => (
					<SingleCardProduct key={index} card={item} />
				))}
			</div>
		</div>
	);
}

export default App;
