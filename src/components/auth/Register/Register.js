import React, { Component, Fragment } from "react";
import Mainbar from "../../Main/Mainbar";
import {
	Toolbar,
	Grid,
	Typography,
	Card,
	IconButton,
	TextField,
	Button,
	Box,
	FormControl,
	Input,
} from "@material-ui/core";
import { Person, PersonOutline } from "@material-ui/icons";

export default class Register extends Component {
	render() {
		return (
			<Fragment>
				<Mainbar login={false} />
				<Toolbar />
				<Grid container style={{ marginTop: 20, padding: 10 }}>
					<Grid item xs={false} sm={1} md={false} lg={1}></Grid>
					<Grid item container sm={10} md={12} lg={10} direction="column">
						<Typography
							style={{ marginBottom: 20 }}
							component="h1"
							gutterBottom
							variant="h5"
						></Typography>

						<Card item container>
							<Grid item container sm={12} direction="column">
								<form>
									<Typography component="caption" gutterBottom>
										Register
									</Typography>
									<Grid item container>
										<Grid item sm={6}>
											{/* <Grid container alignItems="stretch">
												<Grid item>
													<Button
														variant="contained"
														size="normal"
														startIcon={<PersonOutline />}
														color="primary"
													/>
													{/* <PersonOutline /> 
												</Grid>
												<Grid item flex>
													<TextField
														id="fname"
														placeholder="First Name"
														variant="outlined"
														size="small"
													/>
												</Grid>
											</Grid> */}
											<Box display="flex" width="90%" style={{ margin: 10 }}>
												<Button
													variant="contained"
													size="normal"
													startIcon={<PersonOutline />}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="fname"
														placeholder="First Namee"
														variant="outlined"
														size="small"
														fullWidth
													/>
												</Box>
											</Box>
										</Grid>
										<Grid item sm={6}>
											<Box display="flex" width="90%" style={{ margin: 10 }}>
												<Button
													variant="contained"
													size="normal"
													startIcon={<PersonOutline />}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="lname"
														placeholder="Last Namee"
														variant="outlined"
														size="small"
														fullWidth
													/>
												</Box>
											</Box>
										</Grid>
									</Grid>
								</form>
							</Grid>
						</Card>
					</Grid>
					<Grid item xs={false} sm={1} md={false} lg={1}></Grid>
				</Grid>
			</Fragment>
		);
	}
}
