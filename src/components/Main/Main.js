import React, { Component, Fragment } from "react";
import Mainbar from "./Mainbar";
import {
	Toolbar,
	Grid,
	Typography,
	Box,
	Button,
	CardMedia,
	Card,
	CardActionArea,
	CardContent,
	Paper,
} from "@material-ui/core";
import Footer from "../Footer";
import LoginCard from "../auth/Login/LoginCard";

export default class Main extends Component {
	render() {
		const dbooks = [
			{
				title: "Videos",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},

			{
				title: "Articles",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},

			{
				title: "Books",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},
			{
				title: "Job Listings",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},
			{
				title: "Event Listings",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},

			{
				title: "Idea Sharing",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},
			{
				title: "QnA",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},
			{
				title: "Advertisement",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: "https://bit.ly/2WNi2Ml",
			},
		];
		const auth = false;
		return (
			<Fragment>
				<Mainbar auth={auth} />
				<Toolbar />
				<Paper
					style={{
						backgroundImage: `url(https://bit.ly/2WNi2Ml)`,
						backgroundSize: "100%",
						backgroundPosition: "center",
						height: "80vh",
					}}
				>
					<Grid container>
						<Grid item xs={false} sm={false} md={false} lg={1} xl={2} />
						<Grid item container sm={12} md={12} lg={10} xl={8}>
							<Grid sm={6} m={2} direction="column">
								<Box display="flex" justifyContent="center" m={2}>
									<Typography
										component="body"
										variant="h5"
										gutterBottom
										style={{ color: "white", marginTop: 50 }}
									></Typography>
								</Box>
								<Box display="flex" justifyContent="center" m={2}>
									<Typography
										component="body"
										variant="h5"
										gutterBottom
										style={{ color: "white", marginTop: 50 }}
									>
										The STEM Communinty
									</Typography>
								</Box>
								<Box display="flex" justifyContent="center" m={2}>
									<Typography
										component="p"
										variant="h5"
										gutterBottom
										style={{ color: "white" }}
									>
										Connecting Learning, Connecting Jobs, Connecting Events
									</Typography>
								</Box>
							</Grid>
							<Grid sm={6} m={2} direction="column" container>
								<Box
									display="flex"
									justifyContent="center"
									flexDirection="column"
									style={{ marginTop: 30 }}
								>
									<LoginCard />
								</Box>
							</Grid>
						</Grid>
						<Grid item xs={false} sm={false} md={false} lg={1} xl={2} />
					</Grid>
				</Paper>
				<Grid container style={{ marginTop: 20, padding: 10 }}>
					<Grid item xs={false} sm={false} md={false} lg={1} xl={2}></Grid>
					<Grid
						item
						container
						sm={12}
						md={12}
						lg={10}
						xl={8}
						direction="column"
					>
						<Box display="flex" justifyContent="center" m={2}>
							<Typography
								component="caption"
								variant="h3"
								gutterBottom
								color="secondary"
							>
								Features
							</Typography>
						</Box>
						<Grid item container direction="column">
							{/* student */}
							<Box
								display="flex"
								justifyContent="flex-start"
								flexDirection="row"
							>
								<Grid direction="column" container m={2}>
									<Box display="flex" justifyContent="center">
										<Typography
											component="caption"
											gutterBottom
											color="secondary"
											variant="h5"
										>
											STEMXUS For Students
										</Typography>
									</Box>
									<Box display="flex" justifyContent="center">
										<Typography component="p">
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Architecto laudantium consectetur eos vitae esse quo, quas
											aliquid totam nostrum
										</Typography>
									</Box>
									<Box display="flex" justifyContent="center">
										<Button
											variant="contained"
											size="small"
											color="primary"
											style={{ color: "white", marginBottom: 5 }}
										>
											Students
										</Button>
									</Box>
								</Grid>
								{/* non */}
								<Grid direction="column" container m={2}>
									<CardMedia
										component="img"
										height="180"
										image="https://bit.ly/2WNi2Ml"
										title="kkdl"
									/>
								</Grid>
								{/* <Box>kdkdlel</Box> */}
							</Box>
							{/* end student */}
							{/* advert */}
							<Box
								display="flex"
								justifyContent="flex-start"
								flexDirection="row"
							>
								<Grid direction="column" container m={2}>
									<Box display="flex" justifyContent="center">
										<Typography
											component="caption"
											gutterBottom
											color="secondary"
											variant="h5"
										>
											STEMXUS For Advertisers
										</Typography>
									</Box>
									<Box display="flex" justifyContent="center">
										<Typography component="p">
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Architecto laudantium consectetur eos vitae esse quo, quas
											aliquid totam nostrum
										</Typography>
									</Box>
									<Box display="flex" justifyContent="center">
										<Button
											variant="contained"
											size="small"
											color="primary"
											style={{ color: "white" }}
										>
											Advertisers
										</Button>
									</Box>
								</Grid>
								<Grid direction="column" container m={2}>
									<CardMedia
										component="img"
										height="180"
										image="https://bit.ly/2WNi2Ml"
										title="kkdl"
									/>
								</Grid>
							</Box>
							{/* end of advert */}
							{/* startup */}
							<Box
								display="flex"
								justifyContent="flex-start"
								flexDirection="row"
							>
								<Grid container direction="column" m={2}>
									<Box display="flex" justifyContent="center">
										<Typography
											component="caption"
											color="secondary"
											gutterBottom
											variant="h5"
										>
											STEMXUS For Startups
										</Typography>
									</Box>
									<Box display="flex" justifyContent="center">
										<Typography component="p">
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Architecto laudantium consectetur eos vitae esse quo, quas
											aliquid totam nostrum
										</Typography>
									</Box>
									<Box display="flex" justifyContent="center">
										<Button
											variant="contained"
											size="small"
											color="primary"
											style={{ color: "white" }}
										>
											Startups
										</Button>
									</Box>
								</Grid>
								<Grid container direction="column" m={2}>
									<CardMedia
										component="img"
										height="180"
										image="https://bit.ly/2WNi2Ml"
										title="kkdl"
									/>
								</Grid>
							</Box>
							{/* end startup */}
							{/* last */}
							<Box display="flex" justifyContent="center" flexDirection="row">
								<Grid container direction="column" m={2}>
									<CardMedia
										component="img"
										height="180"
										image="https://bit.ly/2WNi2Ml"
										title="kkdl"
									/>
								</Grid>
								<Grid container direction="column" m={2}>
									<Box display="flex" justifyContent="center">
										<Typography
											component="caption"
											gutterBottom
											color="primary"
											variant="h5"
										>
											The STEM Result
										</Typography>
									</Box>
									<Box display="flex" justifyContent="center">
										<Typography component="p">
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Architecto laudantium
										</Typography>
									</Box>
								</Grid>
							</Box>
							{/* end last */}
						</Grid>
						<Box display="flex" justifyContent="center" m={3}>
							<Typography
								component="caption"
								variant="h3"
								gutterBottom
								color="secondary"
							>
								STEMXUS Hub
							</Typography>
						</Box>
						<Grid item container spacing={4}>
							{dbooks.map((it) => (
								<Grid item sm={6} md={4} lg={3} key={it.title}>
									<Card>
										<CardActionArea>
											<CardMedia
												component="img"
												alt={it.title}
												height="140"
												image={it.image}
												title={it.title}
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant="h5"
													component="h2"
													color="secondary"
												>
													{it.title}
												</Typography>
												<Typography component="p">{it.desc}</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item xs={false} sm={false} md={false} lg={1} xl={2}></Grid>
				</Grid>
				<footer>
					<Footer />
				</footer>
			</Fragment>
		);
	}
}
