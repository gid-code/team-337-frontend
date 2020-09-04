import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import BookItem from "./BookItem";

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
			<div style={{ marginTop: 20, padding: 20 }}>
				<Typography
					style={{ marginBottom: 20 }}
					component="h1"
					gutterBottom
					variant="h5"
				>
					Book Category
				</Typography>
				<Grid container spacing={6} justify="flex-start" direction="row">
					{dbooks.map((book) => (
						<BookItem book={book} key={book.title} />
					))}
				</Grid>
			</div>
		);
	}
}
