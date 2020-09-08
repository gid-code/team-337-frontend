import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./components/Books/Books";
import { Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

function App() {
	return (
		<Paper elevation={0} style={{ background: grey[200] }}>
			<Router>
				<Navbar />
				<Toolbar></Toolbar>
				<Switch>
					<Route exact path="/books" component={Books} />
				</Switch>
			</Router>
		</Paper>
	);
}

export default App;
