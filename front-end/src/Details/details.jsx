import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import instance from "../axios";

function Details() {
	const [detail, setDetail] = useState([]);
	useEffect(() => {
		let data = [];
		instance.get(window.location.pathname).then(response => {
			data = response.data;
			console.log(data.data);
			setDetail(data.data);
			console.log(detail);
		});
	}, []);

	if (detail.length !== 0) {
		return (
			<div className='flex flex-col w-full h-full justify-center items-center gap-3'>
				<div className='flex flex-row mt-4 w-11/12 h-'>
					<img
						src='https://a0.muscache.com/im/pictures/miso/Hosting-722179355353877964/original/bdd5abd9-b8e8-4369-beee-c28c377ff4db.jpeg?im_w=1200'
						className='h-1/2 w-1/3 m-2 rounded-xl shadow-xl'
					></img>
					<div className='flex flex-col justify-center items-center w-full ml-4'>
						<div className='flex flex-row items-center justify-center gap-3'>
							<Icon icon='ri:hotel-line' width='50' height='50' />
							<h1 className='text-4xl font-semibold'>{detail.title}</h1>
						</div>
						<div className='flex flex-row items-center justify-center gap-3'>
							<Icon icon='ri:hotel-line' width='50' height='50' />
							<h2 className='text-2xl font-thin'>{detail.short_address}</h2>
						</div>
						<h1 className='text-4xl font-bold'>₹{detail.price} per night</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Details;
