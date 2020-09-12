import React from "react";
import { YouTube, Twitter, Facebook } from "@material-ui/icons";
import {
	Card,
	Box,
	Typography,
	Button,
	Hidden,
	withWidth,
} from "@material-ui/core";

function Footer() {
	return (
		<Card>
			<Box
				display="flex"
				width="100%"
				justifyContent="space-around"
				style={{ margin: 10 }}
			>
				<Hidden smDown>
					<Box flexDirection="column" display="flex">
						<Box flexDirection="row" display="flex">
							<Typography variant="h4" color="primary">
								STEM
							</Typography>
							<Typography
								variant="h4"
								color="secondary"
								style={{ marginRight: 20 }}
							>
								XUS
							</Typography>
						</Box>
						<Typography component="p">Phone: +233304567908</Typography>
						<Typography component="p">Email: contact@stemxus.io</Typography>
					</Box>
				</Hidden>

				<Box flexDirection="column" display="flex">
					<Typography component="p">Advertise</Typography>
					<Typography component="p">Contact Us</Typography>
					<Typography component="p">Careers</Typography>
				</Box>

				<Box flexDirection="column" display="flex">
					<Button color="secondary" startIcon={<Facebook />}>
						Facebook
					</Button>
					<Button color="secondary" startIcon={<Twitter />}>
						Twitter
					</Button>
					<Button color="secondary" startIcon={<YouTube />}>
						Youtube
					</Button>
				</Box>
			</Box>

			<Box display="flex" justifyContent="center">
				<Typography component="p">&copy; Copyright STEMXUS </Typography>
			</Box>
		</Card>
	);
}

export default withWidth()(Footer);
