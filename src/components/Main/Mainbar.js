import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
	withWidth,
	Hidden,
	IconButton,
	Drawer,
	Divider,
	List,
	ListItem,
	Button,
	ListItemText,
	AppBar,
	Toolbar,
	Typography,
	Avatar,
	Box,
} from "@material-ui/core";
import {
	Menu,
	ChevronLeft,
	ExpandMore,
	Person,
	PersonAdd,
} from "@material-ui/icons";
import logo from "../../assets/img/logo12.png";

function Mainbar(props) {
	const { history, auth, login } = props;
	const [open, setOpen] = useState(false);
	// const theme = useTheme();
	// const sDwn = useMediaQuery(theme.breakpoints.down("sm"));

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
		["Pricing", "/pricing"],
		["FAQ", "/faq"],
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
													onClick={() => handleClick(it[1])}
												>
													<Button color="primary">{it[0]}</Button>
												</ListItemText>
											))}
										</ListItem>
									</List>
								</Box>
							</Hidden>
						</Box>
						<Box flexDirection="row" display="flex">
							{auth ? (
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
							) : (
								<div style={{ marginTop: 18 }}>
									{login ? (
										<Button
											variant="contained"
											size="small"
											startIcon={<PersonAdd style={{ color: "white" }} />}
											color="primary"
											style={{ margin: 5, color: "white" }}
											onClick={() => {
												handleClick("/register");
											}}
										>
											Register
										</Button>
									) : (
										<Button
											variant="contained"
											size="small"
											startIcon={<Person style={{ color: "white" }} />}
											color="primary"
											style={{ margin: 5, color: "white" }}
											onClick={() => {
												handleClick("/login");
											}}
										>
											Login
										</Button>
									)}
								</div>
							)}
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
								<ListItem button key={it[0]} onClick={() => handleClick(it[1])}>
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

export default withRouter(withWidth()(Mainbar));
