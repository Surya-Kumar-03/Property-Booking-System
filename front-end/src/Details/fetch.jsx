import instance from "../axios";

function fetchData(url) {
	let data;
	instance.get(url).then(response => {
		console.log(response.data);
		data = response.data;
	});
	return data;
}

export default fetchData;
