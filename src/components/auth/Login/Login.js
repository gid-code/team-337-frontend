import React, { Component, Fragment } from "react";
import Mainbar from "../../Main/Mainbar";
import {
	Toolbar,
	Grid,
	Typography,
	Box,
	Button,
	Card,
	TextField,
} from "@material-ui/core";
import {
	YouTube,
	Twitter,
	Instagram,
	Facebook,
	PersonOutline,
	Lock,
} from "@material-ui/icons";

export default class Login extends Component {
	render() {
		return (
			<Fragment>
				<Mainbar login={true} />
				<Toolbar />
				<Grid
					container
					style={{ marginTop: 20, padding: 10, minHeight: "90vh" }}
				>
					<Grid item xs={false} sm={3} md={1} lg={3}></Grid>
					<Grid item container sm={6} md={10} lg={6} direction="column">
						<Typography
							style={{ marginBottom: 20 }}
							component="h1"
							gutterBottom
							variant="h5"
						></Typography>
						<Card item container>
							<Grid item container sm={12} direction="column">
								<form>
									<Box display="flex" justifyContent="center" m={2}>
										<Typography
											component="caption"
											variant="h3"
											gutterBottom
											color="secondary"
										>
											LOGIN
										</Typography>
									</Box>
									{/* username */}
									<Box display="flex" width="95%" style={{ margin: 10 }}>
										<Button
											variant="contained"
											size="normal"
											startIcon={<PersonOutline style={{ color: "white" }} />}
											color="primary"
										/>
										<Box display="flex" style={{ width: "100%" }}>
											<TextField
												id="uname"
												placeholder="Username"
												variant="outlined"
												size="small"
												fullWidth
											/>
										</Box>
									</Box>
									{/* end of username */}
									{/* password */}
									<Box display="flex" width="95%" style={{ margin: 10 }}>
										<Button
											variant="contained"
											size="normal"
											startIcon={<Lock style={{ color: "white" }} />}
											color="primary"
										/>
										<Box display="flex" style={{ width: "100%" }}>
											<TextField
												id="pwd"
												placeholder="Password"
												variant="outlined"
												size="small"
												type="Password"
												fullWidth
											/>
										</Box>
									</Box>
									{/* end of password */}
									{/* register btn */}
									<Box display="flex" width="95%" style={{ margin: 10 }}>
										<Button
											variant="contained"
											size="normal"
											color="primary"
											style={{ width: "100%", color: "white" }}
											fullWidth
										>
											Login
										</Button>
									</Box>
									{/* end of register btn */}
									{/* forgot btn */}
									<Box display="flex" style={{ margin: 10 }}>
										<Button
											variant="contained"
											size="normal"
											color="secondary"
											style={{ color: "white" }}
										>
											Forgot Password?
										</Button>
									</Box>
									{/* end of forgot btn */}
								</form>
							</Grid>
						</Card>
					</Grid>
					<Grid item xs={false} sm={3} md={1} lg={3}></Grid>
				</Grid>
				{/* footer */}
				<div
					style={{
						position: "fixed",
						bottom: 0,
						minWidth: "99vw",
					}}
				>
					<Card>
						<Box
							display="flex"
							width="100%"
							justifyContent="space-around"
							style={{ margin: 10 }}
						>
							<Box flexDirection="column" display="flex">
								<Box flexDirection="row" display="flex">
									<Typography variant="h4" color="primary">
										STEM
									</Typography>
									<Typography
										variant="h4"
										color="secondary"
										style={{ marginRight: 20 }}
									>
										XUS
									</Typography>
								</Box>
								<Typography component="p">Phone: +233304567908</Typography>
								<Typography component="p">Email: contact@stemxus.io</Typography>
							</Box>

							<Box flexDirection="column" display="flex">
								<Typography component="p">Advertise</Typography>
								<Typography component="p">Contact Us</Typography>
								<Typography component="p">Careers</Typography>
							</Box>

							<Box flexDirection="column" display="flex">
								<Button color="secondary" startIcon={<Facebook />}>
									Facebook
								</Button>
								<Button color="secondary" startIcon={<Instagram />}>
									Instagram
								</Button>
								<Button color="secondary" startIcon={<Twitter />}>
									Twitter
								</Button>
								<Button color="secondary" startIcon={<YouTube />}>
									Youtube
								</Button>
							</Box>
						</Box>

						<Box display="flex" justifyContent="center">
							<Typography component="p">&copy; Copyright STEMXUS </Typography>
						</Box>
					</Card>
				</div>
				{/* end of footer */}
			</Fragment>
		);
	}
}
