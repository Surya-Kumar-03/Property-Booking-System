import * as React from "react";
import Logo from "../assets/Logo.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import cookie from "../cookie";
const pages = [];

function ResponsiveAppBar() {
	const navigate = useNavigate();
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position='static' sx={{ backgroundColor: "#fe375d" }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "Raleway, sans-serif",
							fontWeight: 700,
							letterSpacing: ".1rem",
							color: "inherit",
							textDecoration: "none",
						}}
					></Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
					<img
						src={Logo}
						className='hidden sm:block h-12 mr-2'
						alt='Logo'
					></img>
					<Typography
						variant='h5'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: "flex" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Reserve.com
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map(page => (
							<Button
								key={page}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>

					{cookie.get("token") !== "-1" && cookie.get("token") !== "" ? (
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{/* <MenuItem key="Post Property" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Post Property</Typography>
              </MenuItem> */}
								<MenuItem
									key='Logout'
									onClick={() => {
										handleCloseUserMenu();
										cookie.set("token", -1);
										navigate("/login");
									}}
								>
									<Typography textAlign='center'>Logout</Typography>
								</MenuItem>
							</Menu>
						</Box>
					) : (
						<></>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
