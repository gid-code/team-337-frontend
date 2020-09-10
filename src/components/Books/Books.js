import React, { Component, Fragment } from "react";
import { Grid, Typography, Toolbar } from "@material-ui/core";
import BookItem from "./BookItem";
import Navbar from "../Navbar";

export default class Books extends Component {
	state = {
		books: null,
	};

	render() {
		const dbooks = [
			{
				title: "Science",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},

			{
				title: "Technology",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},

			{
				title: "Mathematics",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},
			{
				title: "Engineering",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},

			{
				title: "Others",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},
		];
		return (
			<Fragment>
				<Navbar />
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
							Book Category
						</Typography>
						<Grid item container spacing={4}>
							{dbooks.map((book) => (
								<BookItem book={book} key={book.title} />
							))}
						</Grid>
					</Grid>
					<Grid item xs={false} sm={1} md={false} lg={1}></Grid>
				</Grid>
			</Fragment>
		);
	}
}
