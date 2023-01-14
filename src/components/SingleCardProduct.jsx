import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function SingleCardProduct({ card }) {
	return (
		<div className='flex flex-col w-[300px] h-full border border-solid border-[#B6B6B6] p-3 rounded-[20px]'>
			<img
				src={card.thumbnail}
				alt=''
				className='w-[300px] h-[200px] rounded-[20px] object-cover'
			/>
			{/*TODO: Icons for favorite */}

			<div className='flex flex-col grow'>
				<h3 className='text-center mt-2  text-titleColor text-[17px] font-medium '>
					{card.title}
				</h3>
				<span className='mb-5 text-center'>${card.price}</span>

				<p className='text-descColor text-[14px] grow flex m-0'>
					{card.description.slice(0, 60)}..
				</p>
			</div>

			<Link
				className='px-5 py-2 bg-mainColor text-[#fff] rounded-full text-center mt-5  scale-95 hover:scale-105 transition-all duration-500'
				to={`/singleproduct/${card.id}`}>
				See More..
			</Link>
		</div>
	);
}

export default SingleCardProduct;
