import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./Home/home";
import React from "react";
import Login from "./Login/login";
import Details from "./Details/details";
import cookie from "./cookie";
import NotFound from "./404/NotFound";

const routes = [
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },
	{ path: "/properties/detail/*", element: <Details /> },
];

function App() {
	const navigate = useNavigate();

	const all_route = new Set();

	for (let x in routes) {
		all_route.add(routes[x].path);
	}
	React.useEffect(() => {
		if (all_route.has(window.location.pathname)) {
			let token = cookie.get("token");
			if (token === "" || token === "-1") {
				navigate("/login");
			} else {
				if (window.location.pathname === "/login") {
					navigate("/");
				}
				navigate(window.location.pathname);
			}
		}
	}, [navigate]);
	return (
		<Routes>
			<Route path='/' element={<Layout></Layout>}>
				{routes.map(route => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={route.element}
						></Route>
					);
				})}
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
