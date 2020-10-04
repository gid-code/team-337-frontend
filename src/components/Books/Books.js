import React, { Component, Fragment } from "react";
import { Grid, Typography, Toolbar } from "@material-ui/core";
import BookItem from "./BookItem";
import Navbar from "../Navbar";
import sImg from "../../assets/img/scince1.png";
import techImg from "../../assets/img/tech1.png";
import engImg from "../../assets/img/eng1.png";
import mathImg from "../../assets/img/maths1.png";
import otherImg from "../../assets/img/advert2.png";
// import { Query } from "react-apollo";
// import { gql } from "apollo-boost";

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
				image: sImg,
			},

			{
				title: "Technology",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: techImg,
			},

			{
				title: "Mathematics",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: mathImg,
			},
			{
				title: "Engineering",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: engImg,
			},

			{
				title: "Others",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: otherImg,
			},
		];

		// const getBooks = gql`
		// 	{
		// 		books {
		// 			id
		// 			title
		// 			description
		// 			thumbnail
		// 		}
		// 	}
		// `;
		return (
			// <Query query={getBooks}>
			// 	{({ loading, error, data }) => {
			// 		if (loading) return <p>Loading....</p>;
			// 		if (error) return <p>Error ....</p>;
			// 		return (
			// 		);
			// 	}}
			// </Query>

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
