import React, { useRef } from 'react';

// images
import logo from '../assets/logo.png';

// icosn
import { BiUser } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterProduct } from '../store/sliceProduct';
function Navbar() {
	const { total } = useSelector((state) => state.setFavorite);
	const { totalProduct } = useSelector((state) => state.getCart);
	let searchValue = useRef();
	const dispatch = useDispatch();

	function handleSearchValue() {
		// if (searchValue.current.value.length > 0) {
		dispatch(setFilterProduct(searchValue.current.value));
		searchValue.current.value = '';
		// }
	}
	return (
		<div className='w-full h-full py-10 bg-mainColor '>
			<div className='container flex flex-col items-center justify-between h-full gap-10 mx-auto lg:flex-row'>
				<div className='flex flex-col items-center gap-10 md:flex-row'>
					<Link to='/'>
						<img src={logo} alt='Logo' />
					</Link>
					<div>
						<input
							ref={searchValue}
							type='text'
							placeholder='Search any things'
							className='px-5 py-2 rounded-xl '
						/>
						<button
							onClick={handleSearchValue}
							className='px-5 py-2 text-[#fff] rounded-xl ml-[-20px] bg-orangeColor'>
							Search
						</button>
					</div>
				</div>
				{/* RIGHT SIDE */}
				<div className='flex items-center gap-5 text-[#fff]'>
					<div className='flex items-center gap-2'>
						<BiUser className='text-3xl' />
						<Link to='/register' className='text-[14px]'>
							Sign In
						</Link>
					</div>
					<div className='flex items-center gap-2 '>
						<BsHeart className='text-3xl' />
						<span className='p-1 rounded-full w-[20px] h-[20px] flex items-center justify-center text-[15px] bg-orangeColor'>
							{total}
						</span>
						<Link to='/favorite' className='text-[14px]'>
							Favorite
						</Link>
					</div>
					<div className='flex items-center gap-2'>
						<AiOutlineShoppingCart className='text-3xl' />
						<span className='p-1 rounded-full w-[20px] h-[20px] flex items-center justify-center text-[15px] bg-orangeColor'>
							{totalProduct}
						</span>
						<Link to='/cart' className='text-[14px]'>
							Cart
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
