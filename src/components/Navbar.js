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
} from "@material-ui/icons";
import { withRouter } from "react-router-dom";

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
				<Typography variant="h3" style={{ color: "orange" }}>
					STEM
				</Typography>
				<Typography variant="h3" style={{ color: "black", marginRight: 30 }}>
					XUS
				</Typography>
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
									<ListItemIcon>{it[1]}</ListItemIcon>
									<ListItemText primary={it[0]} />
								</ListItem>
							))}
						</List>
					</Drawer>
				</Hidden>
				<Hidden smDown>
					<List component="nav">
						<ListItem component="div">
							{menuitem.map((it) => (
								<ListItemText key={it[0]} onClick={() => handleClick(it[2])}>
									<Button color="inherit" startIcon={it[1]}>
										{it[0]}
									</Button>
								</ListItemText>
							))}
						</ListItem>
					</List>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
}

export default withRouter(withWidth()(Navbar));
