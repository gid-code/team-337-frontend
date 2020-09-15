import React, { Component } from "react";
import {
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@material-ui/core";
import { LibraryBooks } from "@material-ui/icons";

export default class BookItem extends Component {
	render() {
		const { book } = this.props;
		return (
			<Grid item sm={6} md={4} lg={3}>
				<Card>
					<CardActionArea>
						<CardMedia
							component="img"
							alt={book.title}
							height="240"
							image={book.image}
							title={book.title}
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								color="secondary"
							>
								{book.title}
							</Typography>
							<Typography component="p">{book.desc}</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							variant="contained"
							size="small"
							startIcon={<LibraryBooks />}
							color="primary"
						>
							Browse
						</Button>
					</CardActions>
				</Card>
			</Grid>
		);
	}
}
