import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchCategory } from '../store/fetchCategory';

// current category
import { setCurrentProduct } from '../store/sliceProduct';
function Category() {
	// selected current category
	const { currentProduct } = useSelector((state) => state.getProduct);
	const dispatch = useDispatch();

	// category list and fetch
	const [category, setCategory] = useState([]);
	useEffect(() => {
		fetchCategory().then((data) => setCategory(data));
	}, []);

	const [active, setActive] = useState(false);

	return (
		<div className='bg-[#F4F4F4] py-5 '>
			<div className='container flex items-center gap-10 mx-auto'>
				<h2
					className='px-5 py-2 text-2xl rounded-lg cursor-pointer text-orangeColor bg-mainColor'
					onClick={() => setActive(!active)}>
					Category
				</h2>
				<ul
					className='grid w-full grid-cols-4 gap-5'
					style={{ display: active ? 'grid' : 'none' }}>
					{category &&
						category.map((item, index) => {
							return (
								<li
									key={index}
									className='px-4 py-2 text-center rounded-lg'
									style={{
										background:
											item === currentProduct ? '#003F62' : '#87BCD9',
									}}>
									<Link
										onClick={() => {
											dispatch(setCurrentProduct(item))
											setActive(false);
										}

									}
										className='text-[#fff] text-lg '
										to='/product'>
										{item}
									</Link>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
}

export default Category;
