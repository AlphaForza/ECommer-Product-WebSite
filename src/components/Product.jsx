import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProduct } from '../store/fetchProduct';
import {
	setAllProduct,
	setSingleProduct,
} from '../store/sliceProduct';
import SingleCardProduct from './SingleCardProduct';

function Product() {
	const dispatch = useDispatch();

	const { product } = useSelector((state) => state.getProduct);

	// here i get one item from category
	const { currentProduct } = useSelector((state) => state.getProduct);

	useEffect(() => {
		fetchProduct(currentProduct).then((data) =>
			dispatch(setAllProduct(data.products))
		);
	}, [currentProduct]);
	return (
		<div className='h-full'>
			<div className='container mx-auto'>
				<h2 className='mt-5 text-2xl font-bold text-center underline uppercase text-titleColor'>
					{currentProduct}
				</h2>
				<div className='grid w-full grid-cols-3 gap-5 my-20 justify-items-center'>
					{product &&
						product.map((card, index) => {
							return <SingleCardProduct card={card} key={index} />;
						})}
				</div>
			</div>
		</div>
	);
}

export default Product;
