import React, { useState } from "react";
import {
	withWidth,
	Hidden,
	IconButton,
	Drawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Avatar,
	Box,
} from "@material-ui/core";
import {
	Menu,
	ChevronLeft,
	Home,
	BugReport,
	LibraryBooks,
	VideoLibrary,
	Bookmark,
	Description,
	Notifications,
	VolumeDown,
	ExpandMore,
} from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import logo from "../assets/img/logo12.png";

function Navbar(props) {
	const { history } = props;
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleClick = (url) => {
		history.push(url);
	};

	const menuitem = [
		["Dashboard", <Home />, "/dashboard"],
		["QnA", <BugReport />, "/qna"],
		["Books", <LibraryBooks />, "/books"],
		["Articles", <Description />, "/articles"],
		["Videos", <VideoLibrary />, "/videos"],
		["Jobs", <Notifications />, "/jobs"],
		["Events", <Bookmark />, "events"],
		["Annoucement", <VolumeDown />, "anouncement"],
	];

	return (
		<AppBar color="inherit" position="fixed">
			<Toolbar>
				<Hidden mdUp>
					<IconButton
						onClick={handleDrawerOpen}
						color="inherit"
						aria-label="open drawer"
						edge="start"
					>
						<Menu />
					</IconButton>
				</Hidden>
				<img
					src={logo}
					alt="logo"
					style={{ height: "5vh" }}
					onClick={() => handleClick("/")}
				></img>
				{/* <Typography variant="h4" color="primary">
					STEM
				</Typography>
				<Typography variant="h4" color="secondary" style={{ marginRight: 20 }}>
					XUS
				</Typography> */}
				<div style={{ width: "100%" }}>
					<Box display="flex">
						<Box flexGrow={1}>
							<Hidden smDown>
								<Box flexDirection="row" display="flex">
									<List component="nav">
										<ListItem component="div">
											{menuitem.map((it) => (
												<ListItemText
													key={it[0]}
													onClick={() => handleClick(it[2])}
												>
													<Button color="secondary" startIcon={it[1]}>
														{it[0]}
													</Button>
												</ListItemText>
											))}
										</ListItem>
									</List>
								</Box>
							</Hidden>
						</Box>
						<Box flexDirection="row" display="flex">
							<Hidden smDown>
								<Avatar style={{ marginTop: 18, marginRight: 5 }}>DS</Avatar>
								<Typography
									variant="body1"
									color="primary"
									style={{ marginTop: 25 }}
								>
									Desire Seyram
								</Typography>
								<ExpandMore
									color="primary"
									style={{ marginTop: 25, marginRight: 5 }}
								/>
							</Hidden>
						</Box>
					</Box>
				</div>
				<Hidden mdUp>
					<Drawer variant="persistent" anchor="left" open={open}>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end",
							}}
						>
							<IconButton onClick={handleDrawerClose}>
								<ChevronLeft />
							</IconButton>
						</div>
						<Divider />
						<List>
							{menuitem.map((it) => (
								<ListItem button key={it[0]} onClick={() => handleClick(it[2])}>
									<ListItemIcon color="secondary">{it[1]}</ListItemIcon>
									<ListItemText color="secondary" primary={it[0]} />
								</ListItem>
							))}
						</List>
						<Divider />
						<Box flexDirection="row" display="flex">
							<Avatar style={{ margin: 5 }}>DS</Avatar>
							<Typography
								variant="body1"
								color="primary"
								style={{ marginTop: 20 }}
							>
								Desire Seyram
							</Typography>
							<ExpandMore
								color="primary"
								style={{ marginTop: 20, marginRight: 5 }}
							/>
						</Box>
					</Drawer>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
}

export default withRouter(withWidth()(Navbar));
