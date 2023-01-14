import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {
	let history = useNavigate();
	const [data, setData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		gender: 'male',
	});
	function handleChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}

	const submitForm = (e) => {
		e.preventDefault();

		let sendData = {
			first_name: data.first_name,
			last_name: data.last_name,
			email: data.email,
			password: data.password,
			gender: data.gender,
		};
		axios
			.post('http://localhost/backend/insertuser.php', sendData)
			.then((result) => {
				if (result.data.Status === 'Invalid') {
					alert('Invalid User');
				} else {
					history(`/login`);
				}
			});
	};

	return (
		<div className='h-[100vh]'>
			<div className='container mx-auto'>
				<h2 className='mt-5 text-4xl text-center text-mainColor text-bold'>
					Register Form
				</h2>

				<form
					onSubmit={submitForm}
					method='POST'
					className='flex flex-col items-center justify-center'>
					<input
						className='w-[50%] mt-5 text-[#333] placeholder-mainColor px-2 py-3 border rounded-full border-mainColor'
						type='text'
						placeholder='First Name'
						name='first_name'
						required
						onChange={handleChange}
						value={data.first_name}
					/>
					<input
						className='w-[50%] mt-5 text-[#333] placeholder-mainColor px-2 py-3 border rounded-full border-mainColor'
						type='text'
						placeholder='Last Name'
						name='last_name'
						required
						onChange={handleChange}
						value={data.last_name}
					/>
					<input
						className='w-[50%] mt-5 text-[#333] placeholder-mainColor px-2 py-3 border rounded-full border-mainColor'
						type='email'
						placeholder='Email'
						name='email'
						required
						onChange={handleChange}
						value={data.email}
					/>
					<input
						className='w-[50%] mt-5 text-[#333] placeholder-mainColor px-2 py-3 border rounded-full border-mainColor'
						type='password'
						placeholder='Password'
						name='password'
						required
						onChange={handleChange}
						value={data.password}
					/>
					<select
						name='gender'
						className='w-[50%] mt-5 text-[#333] placeholder-mainColor px-2 py-3 border rounded-full border-mainColor'
						onChange={handleChange}
						value={data.gender}>
						<option value='male'>Male</option>
						<option value='femail'>Female</option>
					</select>
					<button className='px-5 py-2 mt-5 rounded-full bg-mainColor text-orangeColor'>
						Register Me
					</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
