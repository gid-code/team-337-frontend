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
import student from "../../assets/img/student.png";
import bckg from "../../assets/img/bg3.jpg";
import bckst from "../../assets/img/bg6.jpg";
import advt from "../../assets/img/ad.png";
import stup from "../../assets/img/startup.png";
import vImg from "../../assets/img/video1.png";
import aImg from "../../assets/img/advert2.png";
import bookImg from "../../assets/img/book.jpg";
import ideaImg from "../../assets/img/idea1.png";
import qnaImg from "../../assets/img/qna1.png";
import avdImg from "../../assets/img/advert1.png";

export default class Main extends Component {
	render() {
		const dbooks = [
			{
				title: "Videos",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: vImg,
			},

			{
				title: "Articles",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: aImg,
			},

			{
				title: "Books",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: bookImg,
			},
			{
				title: "Job Listings",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: aImg,
			},
			{
				title: "Event Listings",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: advt,
			},

			{
				title: "Idea Sharing",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: ideaImg,
			},
			{
				title: "QnA",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: qnaImg,
			},
			{
				title: "Advertisement",
				desc:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium consectetur eos vitae esse quo, quas aliquid totam nostrum eaque officiis earum magnam provident soluta. Amet sapiente modi unde inventore.",
				image: avdImg,
			},
		];
		const auth = false;
		return (
			<Fragment>
				<Mainbar auth={auth} />
				<Toolbar />
				<Paper
					style={{
						backgroundImage: `url(${bckg}) `,
						backgroundSize: "100%",
						backgroundPosition: "center",
						WebkitBackgroundSize: "cover",
						MozBackgroundSize: "cover",
						OBackgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						height: "100vh",
					}}
				>
					<Grid container>
						<Grid item xs={false} sm={false} md={false} lg={1} xl={2} />
						<Grid item container sm={12} md={12} lg={10} xl={8}>
							<Grid item container sm={6} m={2} direction="column">
								<Box display="flex" justifyContent="center" m={2}>
									<Typography
										component="div"
										variant="h5"
										gutterBottom
										style={{ color: "white", marginTop: 50 }}
									></Typography>
								</Box>
								<Box display="flex" justifyContent="center" m={2}>
									<Typography
										component="div"
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
							<Grid sm={6} m={2} direction="column" container item>
								<Box
									display="flex"
									justifyContent="center"
									flexDirection="column"
									style={{ marginTop: 30 }}
								>
									<LoginCard main />
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
							<Typography variant="h3" gutterBottom color="secondary">
								Features
							</Typography>
						</Box>
						<Grid item container direction="column">
							{/* student */}
							<Box
								display="flex"
								justifyContent="flex-start"
								flexDirection="row"
								m={2}
							>
								<Grid direction="column" container m={2}>
									<Box display="flex" justifyContent="center">
										<Typography gutterBottom color="secondary" variant="h5">
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
										height="250"
										image={student}
										width="80%"
										title="student"
										style={{ backgroundPosition: "center" }}
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
								m={2}
							>
								<Grid direction="column" container m={2}>
									<Box display="flex" justifyContent="center">
										<Typography gutterBottom color="secondary" variant="h5">
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
										height="250"
										image={advt}
										title="advert"
										style={{ backgroundPosition: "center" }}
									/>
								</Grid>
							</Box>
							{/* end of advert */}
							{/* startup */}
							<Box
								display="flex"
								justifyContent="flex-start"
								flexDirection="row"
								m={2}
							>
								<Grid container direction="column" m={2}>
									<Box display="flex" justifyContent="center">
										<Typography color="secondary" gutterBottom variant="h5">
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
										height="250"
										width="180"
										image={stup}
										title="startup"
										style={{ backgroundPosition: "center" }}
									/>
								</Grid>
							</Box>
							{/* end startup */}
							{/* last */}
							<Box
								display="flex"
								justifyContent="center"
								flexDirection="row"
								m={1}
							>
								<Grid container direction="column" m={2}>
									<CardMedia
										component="img"
										height="300"
										image={bckst}
										title="kkdl"
										style={{ position: "center" }}
									/>
								</Grid>
								<Grid container direction="column" m={2}>
									<Box display="flex" justifyContent="center">
										<Typography gutterBottom color="primary" variant="h5">
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
							<Typography variant="h3" gutterBottom color="secondary">
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
