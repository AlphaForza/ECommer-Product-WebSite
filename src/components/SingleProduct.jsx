import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// MUI-Design for stars
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
// React icons
import { BsCheckLg, BsFillHeartFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { AiOutlineHeart } from 'react-icons/ai';

// redux toolkit
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../store/sliceFavorite';
import { fetchSingleProduct } from '../store/fetchSingleProduct';
import { getDataCart } from '../store/sliceCart';

function SingleProduct() {
	const dispatch = useDispatch();
	// all items in [favorite array]
	const { favorite } = useSelector((state) => state.setFavorite);
	// here i grab the ID from URL
	let { id } = useParams();
	// fetch for one product
	const [product, setProduct] = useState({});
	// value for rating(stars)
	const [value, setValue] = useState(1);
	// state for sliding img on click
	const [currentImg, setCurrentImg] = useState(0);
	useEffect(() => {
		fetchSingleProduct(id).then((data) => {
			setProduct(data);
			setValue(data.rating);
		});
	}, []);

	// here i take id from useParams and this.product.id(all this for fill and outline heart(favorite))
	const [activeFav, setActiveFav] = useState(null);
	useEffect(() => {
		// first i found index of element
		favorite.find((el, index) => {
			if (el.id === parseInt(id)) {
				setActiveFav(el.id);
				return;
			}
		});
	}, [favorite]);

	return (
		<div className='h-[100vh]'>
			<div className='container mx-auto'>
				<div className='flex items-center gap-10'>
					{/* images */}
					<div className='w-[50%] mt-5'>
						<img
							src={product.images?.[currentImg]}
							alt=''
							className='object-cover w-full h-[400px] p-2 border border-solid border-mainColor rounded-[20px]'
						/>

						<div className='grid grid-cols-4 gap-5 mt-2 justify-items-center'>
							{product.images?.map((img, index) => {
								return (
									<img
										onClick={() => setCurrentImg(index)}
										src={img}
										alt=''
										key={index}
										className='object-cover w-[100px] h-[100px] p-2 border border-solid border-mainColor rounded-[20px]'
									/>
								);
							})}
						</div>
					</div>
					{/* text */}
					<div className='w-[50%]'>
						<h2 className='text-titleColor text-[30px] font-bold'>
							{product.title}
						</h2>
						<p className='text-mainColor text-[25px] mb-5'>
							${product.price}
						</p>

						<Box
							sx={{
								width: 200,
								display: 'flex',
								alignItems: 'center',
							}}>
							<Rating
								name='text-feedback'
								value={value}
								readOnly
								precision={0.5}
								emptyIcon={
									<StarIcon
										style={{ opacity: 0.55 }}
										fontSize='inherit'
									/>
								}
							/>
							<Box sx={{ ml: 2 }}>Review</Box>
						</Box>
						<div className='flex items-center gap-3 my-2'>
							<p>Availability:</p>
							{product.stock > 1 ? (
								<div className='flex items-center gap-3 text-[#30BD57]'>
									<BsCheckLg />
									<p>In stock</p>
								</div>
							) : (
								<div className='flex items-center gap-3 text-[#ff4848]'>
									<GrClose />
									<p>Out stock</p>
								</div>
							)}
						</div>
						<p className='text-[15px] text-[#5D5D5D]'>
							Hurry up! only{' '}
							<span className='font-bold'>{product.stock}</span>{' '}
							product left in stock!
						</p>
						<hr className='my-3' />
						<p className='text-descColor text-[20px] my-2'>
							{product.description}
						</p>
						<p className='text-mainColor text-[22px]'>
							Brand: {product.brand}
						</p>
						<hr className='mt-5 mb-10' />
						<div className='flex items-center gap-5'>
							<Link
								onClick={() => dispatch(getDataCart(product))}
								to='/cart'
								className='text-[#fff] bg-orangeColor px-10 py-3 rounded-full text-[25px] mt-5'>
								Add to cart
							</Link>
							<Link
								onClick={() => {
									dispatch(addFavorite(product));
								}}
								to='/favorite'
								className=' bg-[#EEEEEE] w-[70px] h-[70px]  rounded-full text-[35px] mt-5 flex items-center justify-center'>
								{parseInt(id) === activeFav ? (
									<BsFillHeartFill />
								) : (
									<AiOutlineHeart />
								)}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleProduct;
