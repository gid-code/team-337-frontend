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
import { PersonOutline, Lock } from "@material-ui/icons";
import Footer from "../../Footer";

export default class Login extends Component {
	render() {
		return (
			<Fragment>
				<Mainbar login={true} />
				<Toolbar />
				<Grid
					container
					style={{ marginTop: 20, padding: 10, minHeight: "80vh" }}
				>
					<Grid item xs={false} sm={2} md={2} lg={3}></Grid>
					<Grid item container sm={8} md={8} lg={6} direction="column">
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
					<Grid item xs={false} sm={2} md={2} lg={3}></Grid>
				</Grid>
				{/* footer */}
				<footer>
					<Footer />
				</footer>
				{/* end of footer */}
			</Fragment>
		);
	}
}
