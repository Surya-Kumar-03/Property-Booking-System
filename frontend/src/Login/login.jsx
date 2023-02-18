import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import instance from "../axios";
import { useNavigate } from "react-router-dom";
import cookie from "../cookie";

const theme = createTheme();

export default function Login() {
	const navigate = useNavigate();
	const handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		data.append("username", data.get("email"));
		data.append("password", data.get("password"));
		instance
			.post("login/", data)
			.then(response => {
				cookie.set("token", response.data.token);
				if (response.data.token !== "-1") {
					navigate("/");
				}
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "#fe375d" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Log in
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									value='admin'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
									value='admin'
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2, bgcolor: "gray" }}
						>
							Log in
						</Button>
					</Box>
				</Box>
				<div className='flex justify-center items-center  bg-yellow-200 rounded-md p-4 mt-4 flex-col'>
					<span>
						This project was developed for a hackathon within a time frame of{" "}
						<span className='font-bold'>6 hours.</span> We request you to take
						into account the limitations and difficulties faced during the
						planning, web design, development, and hosting stages of this
						project.
					</span>
				</div>
			</Container>
		</ThemeProvider>
	);
}
