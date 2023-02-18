import axios from "axios";

const loc = window.location;
let base_url =
	loc.protocol +
	"//" +
	loc.hostname +
	(loc.port === "" ? "" : ":8000") +
	"/api/";
const instance = axios.create({
	baseURL: base_url,
	timeout: 1000,
	withCredentials: true,
});

export default instance;
