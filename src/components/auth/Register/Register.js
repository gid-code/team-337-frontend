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
import { PersonOutline, Email, Lock, AccountBox } from "@material-ui/icons";
import Footer from "../../Footer";
import { register } from "../../../actions/auth";
import { connect } from "react-redux";

class Register extends Component {
	state = {
		firstname: "",
		lastname: "",
		username: "",
		email: "",
		password: "",
		passwordConf: "",
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.register(
			this.state.username,
			this.state.password,
			this.state.email
		);
		this.props.history.push("/dashboard");
	};

	onChange = (e) =>
		this.setState({
			[e.target.name]: e.target.value,
		});

	render() {
		return (
			<Fragment>
				<Mainbar login={false} />
				<Toolbar />
				<Grid
					container
					style={{ marginTop: 20, padding: 10, minHeight: "85vh" }}
				>
					<Grid item xs={false} sm={1} md={1} lg={2}></Grid>
					<Grid item container sm={10} md={10} lg={8} direction="column">
						<Typography
							style={{ marginBottom: 20 }}
							component="h1"
							gutterBottom
							variant="h5"
						></Typography>

						<Card>
							<Grid item container sm={12} direction="column">
								<form onSubmit={this.onSubmit}>
									<Box display="flex" justifyContent="center" m={2}>
										<Typography variant="h3" gutterBottom color="secondary">
											REGISTER
										</Typography>
									</Box>
									<Grid item container>
										<Grid item sm={6}>
											{/* first name */}
											<Box display="flex" width="90%" style={{ margin: 10 }}>
												<Button
													variant="contained"
													startIcon={
														<PersonOutline style={{ color: "white" }} />
													}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="fname"
														name="firstname"
														onChange={this.onChange}
														value={this.state.firstname}
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
													startIcon={<Email style={{ color: "white" }} />}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="email"
														name="email"
														onChange={this.onChange}
														value={this.state.email}
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
													startIcon={<Lock style={{ color: "white" }} />}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="pwd"
														name="password"
														onChange={this.onChange}
														value={this.state.password}
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
													startIcon={
														<PersonOutline style={{ color: "white" }} />
													}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="lname"
														name="lastname"
														onChange={this.onChange}
														value={this.state.lastname}
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
													startIcon={
														<PersonOutline style={{ color: "white" }} />
													}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="uname"
														name="username"
														onChange={this.onChange}
														value={this.state.username}
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
													startIcon={<Lock style={{ color: "white" }} />}
													color="primary"
												/>
												<Box display="flex" style={{ width: "100%" }}>
													<TextField
														id="pconfirm"
														name="passwordConf"
														onChange={this.onChange}
														value={this.state.passwordConf}
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
												color="primary"
												type="submit"
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
					<Grid item xs={false} sm={1} md={1} lg={2}></Grid>
				</Grid>
				{/* footer */}
				<footer style={{ bottom: 0 }}>
					<Footer />
				</footer>
				{/* end of footer */}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
