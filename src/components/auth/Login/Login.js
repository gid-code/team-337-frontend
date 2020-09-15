import React, { Component, Fragment } from "react";
import Mainbar from "../../Main/Mainbar";
import { Toolbar, Grid, Typography, Card } from "@material-ui/core";
import Footer from "../../Footer";
import LoginCard from "./LoginCard";

export default class Login extends Component {
	render() {
		return (
			<Fragment>
				<Mainbar login={true} />
				<Toolbar />
				<Grid
					container
					style={{ marginTop: 20, padding: 10, minHeight: "85vh" }}
				>
					<Grid item xs={false} sm={2} md={2} lg={3}></Grid>
					<Grid item container sm={8} md={8} lg={6} direction="column">
						<Typography
							style={{ marginBottom: 20 }}
							component="h1"
							gutterBottom
							variant="h5"
						></Typography>
						<Card>
							<LoginCard />
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
