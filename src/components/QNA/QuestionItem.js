import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	Grid,
	Typography,
} from "@material-ui/core";
import { LibraryBooks } from "@material-ui/icons";
import React, { Component } from "react";

export default class QuestionItem extends Component {
	render() {
		const { book } = this.props;
		return (
			<Grid item sm={12} md={12} lg={12}>
				<Card>
					<CardHeader title={book.title} color="secondary" />
					<CardActionArea>
						<CardContent>
							<Box display="flex">
								<Typography
									gutterBottom
									variant="h6"
									component="h2"
									color="primary"
								>
									Question:
								</Typography>
								<Typography variant="h6">{book.question}</Typography>
							</Box>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							variant="contained"
							size="small"
							startIcon={<LibraryBooks />}
							color="primary"
						>
							View Answer
						</Button>
					</CardActions>
				</Card>
			</Grid>
		);
	}
}
