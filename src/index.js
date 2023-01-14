import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
	createBrowserRouter,
	Outlet,
	RouterProvider,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Category from './components/Category';

// store redux
import store from './store/store';
import { Provider } from 'react-redux';
import Product from './components/Product';
import SingleProduct from './components/SingleProduct';
import Favorite from './components/Favorite';
import CartPage from './components/CartPage';
import Login from './components/Login';
import Register from './components/Register';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/product',
				element: <Product />,
			},
			{
				path: '/singleproduct/:id',
				element: <SingleProduct />,
			},
			{
				path: '/cart',
				element: <CartPage />,
			},
			{
				path: '/favorite',
				element: <Favorite />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

function Layout() {
	return (
		<>
			<Navbar />
			<Category />
			<Outlet />
			<Footer />
		</>
	);
}
