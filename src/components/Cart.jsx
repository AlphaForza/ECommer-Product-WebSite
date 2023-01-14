import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrice } from '../store/sliceCart';
import { ImBin } from 'react-icons/im';
import { removeProduct } from '../store/sliceCart';

function Cart({ item, index }) {
	const { cartTotal } = useSelector((state) => state.getCart);

	const dispatch = useDispatch();

	return (
		<>
			<div className='w-[100%] grid grid-cols-5 items-center mt-5 justify-items-center relative'>
				<div className='grid items-center w-full grid-cols-2 col-span-2 gap-5'>
					<img
						src={item.thumbnail}
						alt='article Img'
						className='w-full h-[120px] object-cover rounded-[30px] mx-auto'
					/>
					<div className='flex flex-col gap-2 '>
						<h2 className='text-[25px] text-mainColor'>
							{item.title}
						</h2>
						<p className='text-'>Stock: {item.stock}</p>
						<p>Brand: {item.brand}</p>
					</div>
				</div>
				<p className='text-[20px] font-light text-descColor'>
					${item.price}
				</p>

				<div className='flex items-center'>
					<button
						className='bg-mainColor px-4 text-[#fff] rounded-tl-2xl text-[20px]  py-2'
						onClick={() => {
							dispatch(setPrice({ increment: -1, index }));
						}}>
						-
					</button>
					<span className='bg-mainColor px-4 text-[#fff]  py-2 text-[20px]'>
						{item.count}
					</span>
					<button
						className='bg-mainColor px-4 text-[#fff] rounded-tr-2xl text-[20px] py-2'
						onClick={() => {
							dispatch(setPrice({ increment: 1, index }));
						}}>
						+
					</button>
				</div>

				<p className='text-[20px] font-light text-descColor'>
					${item.cartTotal}
				</p>

				<button
					className='absolute top-[50%] translate-y-[-50%] right-5 text-2xl text-[#FF0000]/70 cursor-pointer'
					onClick={() => {
						dispatch(removeProduct({ item, index }));
					}}>
					<ImBin />
				</button>
			</div>
			<hr className='mt-5' />
		</>
	);
}

export default Cart;
