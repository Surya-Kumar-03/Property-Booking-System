import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./Home/home";
import React from "react";
import Login from "./Login/login";
import Details from "./Details/details";

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function App() {
	const navigate = useNavigate();
	React.useEffect(() => {
		let token = getCookie("token");
		console.log(token);
		if (token === "" || token === "-1") {
			navigate("/login");
		} else {
			if (window.location.pathname === "/login") {
				navigate("/");
			}
			navigate(window.location.pathname);
		}
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Layout></Layout>}>
				<Route index element={<Home></Home>}></Route>
				<Route path='/login' element={<Login></Login>}></Route>
				<Route path='properties/detail/*' element={<Details></Details>}></Route>
			</Route>
		</Routes>
	);
}

export default App;
