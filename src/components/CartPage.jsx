import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import country from '../store/country';
import Select from 'react-select';
function CartPage() {
	const { cart, totalPrice } = useSelector((state) => state.getCart);
	const [dataCoupon, setDataCoupon] = useState(null);
	let coupon = useRef('');
	function handleCoupon() {
		setDataCoupon(coupon.current.value);
	}

	return (
		<div className='min-h-[100vh] py-5'>
			<div className='container flex items-start gap-5 mx-auto mt-10'>
				{/* left side info */}
				<div className='flex flex-col w-[70%]'>
					{/* header */}
					<div className='w-[100%] grid grid-cols-5 justify-items-center bg-[#E2F4FF] px-5 py-2 text-[20px] font-medium'>
						<p className='text-[#232323] col-span-2'>Product</p>
						<p className=' text-[#232323]'>Price</p>
						<p className=' text-[#232323]'>Quantity</p>
						<p className='text-[#232323]'>Subtotal</p>
					</div>
					{/* main content of cart */}
					<div>
						{cart &&
							cart.map((item, index) => {
								return <Cart key={index} item={item} index={index} />;
							})}
					</div>
				</div>
				{/* right side */}
				<div className='w-[30%]'>
					<h2 className='text-center bg-[#E2F4FF] px-5 py-2 text-[20px] font-medium'>
						Cart Total
					</h2>

					<div className='flex justify-between px-5 py-2'>
						<p className='text-[20px]'>Subtotal</p>
						<span className='text-[20px]'>
							${' '}
							{dataCoupon === 'alphacode'
								? totalPrice / 2
								: totalPrice}
						</span>
					</div>
					<hr className='mt-2 text-[#989898]' />
					<div className='flex items-center justify-center w-full border border-[#878787] rounded-2xl mt-5'>
						<input
							ref={coupon}
							type='text'
							placeholder='Enter coupon code'
							className='w-full px-5 py-2 rounded-2xl'
						/>

						<button className='mr-5' onClick={handleCoupon}>
							Apply
						</button>
					</div>
					<p className='mt-2 ml-2 text-descColor '>
						Use ' <span className='text-[#30BD57]'>alphacode</span> '{' '}
						coupon for extra 50% off price
					</p>
					<hr className='mt-5 text-[#989898]' />
					<div className='flex items-center justify-center w-full mt-5'>
						<select
							name='country'
							id='country'
							defaultValue='COUNTRY'
							className='w-full px-5 py-2  text-lg bg-[#fff]/0 text-mainColor border border-[#878787] rounded-2xl'>
							{country?.map((item, index) => {
								return (
									<option value={item.name} key={index}>
										{item.name}
									</option>
								);
							})}
						</select>
					</div>
					<button className='w-full mt-5 bg-orangeColor text-[#fff] py-3 rounded-full text-lg'>
						Proceed to checkout
					</button>
				</div>
			</div>
		</div>
	);
}

export default CartPage;
