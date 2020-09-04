import React from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import {
	Home,
	BugReport,
	LibraryBooks,
	VideoLibrary,
	Bookmark,
	Description,
	Notifications,
	VolumeDown,
} from "@material-ui/icons";

export default function Navbar(props) {
	return (
		<List component="nav">
			<ListItem component="div">
				<ListItemText inset>
					<Button color="inherent" startIcon={<Home />}>
						Dashboard
					</Button>
				</ListItemText>

				<ListItemText inset>
					<Button color="inherent" startIcon={<BugReport />}>
						Q n A
					</Button>
				</ListItemText>

				<ListItemText inset>
					<NavLink to="/books" underline="none">
						<Button variant="title" startIcon={<LibraryBooks />}>
							Books
						</Button>
					</NavLink>
				</ListItemText>

				<ListItemText inset>
					<Button color="inherent" startIcon={<Description />}>
						Articles
					</Button>
				</ListItemText>

				<ListItemText inset>
					<Button color="inherent" startIcon={<VideoLibrary />}>
						Videos
					</Button>
				</ListItemText>

				<ListItemText inset>
					<Button color="inherent" startIcon={<Notifications />}>
						Jobs
					</Button>
				</ListItemText>

				<ListItemText inset>
					<Button color="inherent" startIcon={<Bookmark />}>
						Events
					</Button>
				</ListItemText>

				<ListItemText inset>
					<Button color="inherent" startIcon={<VolumeDown />}>
						Announcement
					</Button>
				</ListItemText>
			</ListItem>
		</List>
	);
}
