import React from 'react';
import { useSelector } from 'react-redux';
import SingleCardProduct from './SingleCardProduct';

function Favorite() {
	const { favorite } = useSelector((state) => state.setFavorite);

	return (
		<div>
			<div className='container flex flex-wrap items-center gap-5 py-20 mx-auto'>
				{favorite.map((card, index) => {
					return <SingleCardProduct card={card} key={index} />;
				})}
			</div>
		</div>
	);
}

export default Favorite;
