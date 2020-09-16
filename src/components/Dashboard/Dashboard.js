import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	Grid,
	Select,
	TextareaAutosize,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { AddOutlined } from "@material-ui/icons";
import React, { Component, Fragment } from "react";
import Navbar from "../Navbar";
import profile from "../../assets/img/profile.png";

export default class Dashboard extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<Toolbar />
				<Grid container style={{ marginTop: 20, padding: 10 }}>
					<Grid
						item
						container
						xs={false}
						sm={1}
						md={false}
						lg={2}
						direction="column"
					>
						<Card>
							<CardContent>
								<Box display="flex" flexDirection="column">
									<Box display="flex" justifyContent="center">
										<img
											src={profile}
											alt="profile"
											style={{ height: "15vh", width: "12vh" }}
										></img>
									</Box>
									<Box display="flex" justifyContent="center">
										<Typography
											style={{ marginBottom: 10 }}
											component="h1"
											gutterBottom
											variant="h5"
										>
											Desire Seyram
										</Typography>
									</Box>
									<Box display="flex" justifyContent="center">
										<Typography style={{ marginBottom: 10 }} gutterBottom>
											Stage: College
										</Typography>
									</Box>
									<Divider />
									<Box display="flex" justifyContent="center" m={2}>
										<Button
											variant="contained"
											size="medium"
											startIcon={<AddOutlined />}
											color="primary"
											style={{ color: "white" }}
										>
											Chanage Profile
										</Button>
									</Box>
								</Box>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						container
						sm={10}
						md={12}
						lg={8}
						direction="column"
						style={{ marginLeft: 10, marginRight: 8 }}
					>
						<Box display="flex" m={1}>
							<Select native size="small" variant="outlined" id="category">
								<option value="Science">Science</option>
								<option value="Mathematics">Mathematics</option>
								<option value="Technology">Technology</option>
							</Select>
							<Select native size="small" variant="outlined" id="type">
								<option value="Question">Question</option>
								<option value="Ideas">Ideas</option>
							</Select>
						</Box>
						<textarea
							rowsMin={4}
							placeholder="Share what you are learning or ask a question"
						></textarea>
						<Box display="flex" m={1}>
							<Button variant="contained" size="medium" color="primary">
								Post
							</Button>
						</Box>

						<Grid item container spacing={3} direction="column">
							{/* {dbooks.map((book) => (
                        <QuestionItem book={book} key={book.title} />
                     ))} */}
						</Grid>
					</Grid>
					<Grid item xs={false} sm={1} md={false} lg={2}></Grid>
				</Grid>
			</Fragment>
		);
	}
}
