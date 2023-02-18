import Navbar from "../Navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";

function Layout() {
	return (
		<div className='flex flex-col'>
			<Navbar></Navbar>
			<div className='mb-16'>
				<Outlet />
			</div>
			<Footer></Footer>
		</div>
	);
}

export default Layout;
