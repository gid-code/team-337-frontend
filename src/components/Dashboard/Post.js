import {
	Avatar,
	Box,
	Card,
	CardContent,
	Chip,
	Typography,
} from "@material-ui/core";
import { Comment } from "@material-ui/icons";
import React from "react";

export default function Post() {
	// const {book} = props
	return (
		<div>
			<Card style={{ marginBottom: 15 }}>
				<Chip
					label="mathematics"
					color="primary"
					style={{ backgroundColor: "yellow", margin: 10 }}
				></Chip>
				<CardContent>
					<div style={{ width: "100%" }}>
						<Box display="flex" flexDirection="column" alignItems="center">
							<Avatar variant="square">DS</Avatar>

							<Typography variant="h6">Desire Seyram</Typography>
							<Chip label="idea" style={{ backgroundColor: "yellow" }}></Chip>
							<Typography style={{ marginTop: 10 }}>Hello everyone</Typography>
							<Typography style={{ marginBottom: 15 }}>
								2 minutes ago
							</Typography>
							<Box display="flex">
								<Comment color="primary" />
								<Typography style={{ margin: 2 }} color="primary">
									0
								</Typography>
								<Typography color="primary">Comments</Typography>
							</Box>
						</Box>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
