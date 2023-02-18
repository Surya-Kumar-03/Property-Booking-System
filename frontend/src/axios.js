import axios from "axios";

const instance = axios.create({
	baseURL: window.location.protocol + "//" + window.location.hostname + "/api/",
	timeout: 1000,
	withCredentials: true,
});

export default instance;
