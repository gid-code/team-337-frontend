import { Grid, Toolbar, Typography } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import Navbar from "../Navbar";
import QuestionItem from "./QuestionItem";

export default class Qna extends Component {
	render() {
		const dbooks = [
			{
				title: "Science",
				question:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sapiente modi unde inventore.",
			},

			{
				title: "Technology",
				question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
			},

			{
				title: "Mathematics",
				question: "Lorem ipsum dolor, sit amet consectetur ",
			},
			{
				title: "Engineering",
				question:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid",
			},
		];
		return (
			<div>
				<Fragment>
					<Navbar />
					<Toolbar />
					<Grid container style={{ marginTop: 20, padding: 10 }}>
						<Grid item xs={false} sm={1} md={false} lg={2}></Grid>
						<Grid item container sm={10} md={12} lg={8} direction="column">
							<Typography
								style={{ marginBottom: 20 }}
								component="h1"
								gutterBottom
								variant="h5"
							>
								Question Bank
							</Typography>
							<Grid item container spacing={3} direction="column">
								{dbooks.map((book) => (
									<QuestionItem book={book} key={book.title} />
								))}
							</Grid>
						</Grid>
						<Grid item xs={false} sm={1} md={false} lg={2}></Grid>
					</Grid>
				</Fragment>
			</div>
		);
	}
}
