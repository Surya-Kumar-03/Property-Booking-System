import React from "react";

function Footer() {
	return (
		<footer className='fixed bottom-0 left-0 z-20 w-full p-3 bg-slate-100 border-t border-gray-400 shadow flex items-center justify-between md:p-3'>
			<span className='text-sm text-gray-500 text-center w-full'>
				Developed by{" "}
				<a
					href='https://www.linkedin.com/in/aryan-amish/'
					className='underline text-blue-700'
				>
					Aryan
				</a>
				,{" "}
				<a
					href='https://www.linkedin.com/in/bandepalli-surya/'
					className='underline text-blue-700'
				>
					Surya
				</a>{" "}
				and{" "}
				<a
					href='https://www.linkedin.com/in/durga-pranathi-chinthala-303860229'
					className='underline text-blue-700'
				>
					Pranathi
				</a>
			</span>
		</footer>
	);
}

export default Footer;
