import {
	Box,
	Button,
	Card,
	Grid,
	TextField,
	Typography,
} from "@material-ui/core";
import { Lock, PersonOutline } from "@material-ui/icons";
import React from "react";

export default function LoginCard() {
	return (
		// <Card item container>
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
		// </Card>
	);
}
