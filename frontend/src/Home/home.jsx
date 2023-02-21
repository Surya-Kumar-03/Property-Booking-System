import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Cards from "./cards";
import instance from "../axios";

function Home() {
	const [recievedData, setRecievedData] = useState([]);
	const [clicked, setClicked] = useState(false);
	const [query, setQuery] = useState("");
	useEffect(() => {
		let q = window.setTimeout(e => {
			instance.get("properties/?q=" + query).then(response => {
				setRecievedData(response.data.data);
			});
		}, 500);
		return () => {
			window.clearInterval(q);
		};
	}, [clicked, query]);

	const handleChange2 = event => {
		setQuery(event.target.value);
	};

	return (
		<div className='flex flex-col w-screen items-center justify-start'>
			<div className='flex flex-row w-10/12 h-24 p-3 bg-gray-200 rounded-lg shadow-md mt-4 items-center justify-center gap-2'>
				<TextField
					className='w-96'
					id='filled-basic'
					label='Search by city, hotel or neighbourhood'
					autoComplete='off'
					value={query}
					onChange={handleChange2}
				/>
				{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
					<DesktopDatePicker
						label='Start Date'
						inputFormat='MM/DD/YYYY'
						value={value}
						onChange={handleChange}
						renderInput={params => <TextField {...params} />}
					/>
					<DesktopDatePicker
						label='End Date'
						inputFormat='MM/DD/YYYY'
						value={value}
						onChange={handleChange}
						renderInput={params => <TextField {...params} />}
					/>
				</LocalizationProvider> */}
				<IconButton
					type='button'
					sx={{ p: "10px" }}
					aria-label='search'
					onClick={() => {
						setClicked(!clicked);
					}}
				>
					<SearchIcon />
				</IconButton>
			</div>
			<div className='flex flex-row flex-wrap gap-4 justify-center items-center w-11/12 h-auto mt-5'>
				{recievedData ? (
					recievedData.map((card, idx) => {
						return (
							<Cards
								key={card.detail_link}
								detail_link={card.detail_link}
								title={card.title}
								short_address={card.short_address}
								guest={card.guest}
								price={card.price}
								type={card.type}
								image={card.image}
							/>
						);
					})
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default Home;
