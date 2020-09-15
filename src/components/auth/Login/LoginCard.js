import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Lock, PersonOutline } from "@material-ui/icons";
import React from "react";

export default function LoginCard(props) {
	const { main } = props;
	return (
		// <Card item container>

		<Grid item container sm={12} direction="column">
			<form>
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
