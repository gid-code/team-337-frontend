import React, { Component, Fragment } from "react";
import Mainbar from "../../Main/Mainbar";
import {
	Toolbar,
	Grid,
	Typography,
	Card,
	TextField,
	Button,
	Box,
	Select,
} from "@material-ui/core";
import {
	PersonOutline,
	Email,
	Lock,
	AccountBox,
	Facebook,
	Instagram,
	Twitter,
	YouTube,
} from "@material-ui/icons";

export default class Register extends Component {
	render() {
		return (
			<Fragment>
				<Mainbar login={false} />
				<Toolbar />
				<Grid
					container
					style={{ marginTop: 20, padding: 10, minHeight: "90vh" }}
				>
					<Grid item xs={false} sm={2} md={false} lg={2}></Grid>
					<Grid item container sm={8} md={12} lg={8} direction="column">
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
											REGISTER
										</Typography>
									</Box>
									<Grid item container>
										<Grid item sm={6}>
											{/* first name */}
											<Box display="flex" width="90%" style={{ margin: 10 }}>
												<Button
													variant="contained"
													size="normal"
													startIcon={
														<PersonOutline style={{ color: "white" }} />
													}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="fname"
														placeholder="First Name"
														variant="outlined"
														size="small"
														fullWidth
													/>
												</Box>
											</Box>
											{/* end of first name */}
											{/* email/ */}
											<Box display="flex" width="90%" style={{ margin: 10 }}>
												<Button
													variant="contained"
													size="normal"
													startIcon={<Email style={{ color: "white" }} />}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="email"
														placeholder="Email"
														variant="outlined"
														type="email"
														size="small"
														fullWidth
													/>
												</Box>
											</Box>
											{/* end of email */}
											{/* password */}
											<Box display="flex" width="90%" style={{ margin: 10 }}>
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
														type="password"
														fullWidth
													/>
												</Box>
											</Box>
											{/* end of password */}
										</Grid>
										<Grid item sm={6}>
											{/* last name */}
											<Box display="flex" width="90%" style={{ margin: 10 }}>
												<Button
													variant="contained"
													size="normal"
													startIcon={
														<PersonOutline style={{ color: "white" }} />
													}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="lname"
														placeholder="Last Name"
														variant="outlined"
														size="small"
														fullWidth
													/>
												</Box>
											</Box>
											{/* end of last name */}
											{/* username */}
											<Box display="flex" width="90%" style={{ margin: 10 }}>
												<Button
													variant="contained"
													size="normal"
													startIcon={
														<PersonOutline style={{ color: "white" }} />
													}
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
											<Box display="flex" width="90%" style={{ margin: 10 }}>
												<Button
													variant="contained"
													size="normal"
													startIcon={<Lock style={{ color: "white" }} />}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="pconfirm"
														placeholder="Password Confirmation"
														variant="outlined"
														size="small"
														type="Password"
														fullWidth
													/>
												</Box>
											</Box>
											{/* end of password */}
										</Grid>
										{/* account type */}
										<Box display="flex" width="95%" style={{ margin: 10 }}>
											<Button
												variant="contained"
												size="small"
												startIcon={<AccountBox style={{ color: "white" }} />}
												color="primary"
											/>
											<Box display="flex" style={{ width: "100%" }}>
												<Select
													fullWidth
													native
													size="small"
													variant="outlined"
													id="actType"
												>
													<option aria-label="None" value="">
														Account Type
													</option>
													<option value="Free">Free</option>
													<option value="paid">Paid</option>
												</Select>
											</Box>
										</Box>
										{/* end of account */}
										{/* register btn */}
										<Box display="flex" width="95%" style={{ margin: 10 }}>
											<Button
												variant="contained"
												size="normal"
												color="primary"
												style={{ width: "100%", color: "white" }}
												fullWidth
											>
												Register
											</Button>
										</Box>
										{/* end of register btn */}
									</Grid>
								</form>
							</Grid>
						</Card>
					</Grid>
					<Grid item xs={false} sm={2} md={false} lg={2}></Grid>
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

							<Box
								flexDirection="column"
								display="flex"
								justifyContent="flex-start"
							>
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
