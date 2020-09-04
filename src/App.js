import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./components/Books/Books";

function App() {
	return (
		<Router>
			<AppBar color="white" position="relative">
				<Toolbar>
					<TypoGraphy variant="title" color="inherit">
						STEMXUS
					</TypoGraphy>
					<Navbar />
				</Toolbar>
			</AppBar>
			<Switch>
				<Route exact path="/books" component={Books} />
			</Switch>
		</Router>
	);
}

export default App;
