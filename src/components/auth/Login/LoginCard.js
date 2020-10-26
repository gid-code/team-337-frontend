import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Lock, PersonOutline } from "@material-ui/icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../../actions/auth";

class LoginCard extends Component {
	state = {
		username: "",
		password: "",
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.state.username, this.state.password);
		this.props.history.push("/dashboard");
	};

	onChange = (e) =>
		this.setState({
			[e.target.name]: e.target.value,
		});

	render() {
		const { main } = this.props;
		const { username, password } = this.state;
		return (
			// <Card item container>

			<Grid item container sm={12} direction="column">
				<form onSubmit={this.onSubmit}>
					<Box display="flex" justifyContent="center" m={2}>
						<Typography
							variant="h3"
							gutterBottom
							color={main ? "primary" : "secondary"}
						>
							LOGIN
						</Typography>
					</Box>
					{/* username */}
					<Box display="flex" width="95%" style={{ margin: 10 }}>
						<Button
							variant="contained"
							size="medium"
							startIcon={<PersonOutline style={{ color: "white" }} />}
							color="primary"
						/>
						<Box
							display="flex"
							style={
								main
									? { width: "100%", backgroundColor: "#fff7b0" }
									: { width: "100%" }
							}
						>
							<TextField
								id="uname"
								name="username"
								placeholder="Username"
								variant="outlined"
								size="small"
								onChange={this.onChange}
								value={username}
								fullWidth
							/>
						</Box>
					</Box>
					{/* end of username */}
					{/* password */}
					<Box display="flex" width="95%" style={{ margin: 10 }}>
						<Button
							variant="contained"
							startIcon={<Lock style={{ color: "white" }} />}
							color="primary"
						/>
						<Box
							display="flex"
							style={
								main
									? { width: "100%", backgroundColor: "#fff7b0" }
									: { width: "100%" }
							}
						>
							<TextField
								id="pwd"
								name="password"
								placeholder="Password"
								variant="outlined"
								size="small"
								type="Password"
								onChange={this.onChange}
								value={password}
								fullWidth
							/>
						</Box>
					</Box>
					{/* end of password */}
					{/* register btn */}
					<Box display="flex" width="95%" style={{ margin: 10 }}>
						<Button
							variant="contained"
							color="primary"
							style={{ width: "100%", color: "white" }}
							type="submit"
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
							color="secondary"
							style={{ color: "white" }}
						>
							Forgot Password?
						</Button>
					</Box>
					{/* end of forgot btn */}
				</form>
			</Grid>
			// </Card>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginCard);
