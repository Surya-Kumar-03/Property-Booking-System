import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
	return (
		<div className='flex justify-center items-center h-full flex-col py-20 gap-4'>
			<span className='text-5xl font-bold'>404!!!</span>
			<span className='text-3xl '>Something is Wrong!!!</span>
			<span className='text-3xl '>
				We couldn't find what you were looking for
			</span>
			<Link to='/' className='underline text-blue-700 hover:text-blue-600'>
				Go to home page
			</Link>
		</div>
	);
}

export default NotFound;
