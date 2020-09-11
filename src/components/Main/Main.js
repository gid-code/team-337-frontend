import React, { Component, Fragment } from "react";
import Mainbar from "./Mainbar";
import { Toolbar, Grid, Typography } from "@material-ui/core";

export default class Main extends Component {
	render() {
		const auth = false;
		return (
			<Fragment>
				<Mainbar auth={auth} />
				<Toolbar />
				<Grid container style={{ marginTop: 20, padding: 10 }}>
					<Grid item xs={false} sm={1} md={false} lg={1}></Grid>
					<Grid item container sm={10} md={12} lg={10} direction="column">
						<Typography
							style={{ marginBottom: 20 }}
							component="h1"
							gutterBottom
							variant="h5"
						>
							Landing page
						</Typography>

						{/* <Grid item container spacing={4}>
							{dbooks.map((book) => (
								<BookItem book={book} key={book.title} />
							))}
						</Grid> */}
					</Grid>
					<Grid item xs={false} sm={1} md={false} lg={1}></Grid>
				</Grid>
			</Fragment>
		);
	}
}
