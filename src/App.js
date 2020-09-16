import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./components/Books/Books";
import { Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Main from "./components/Main/Main";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";
import Qna from "./components/QNA/Qna";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
	return (
		<Paper elevation={0} style={{ background: grey[200], minHeight: "100vh" }}>
			<Router>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/qna" component={Qna} />
					<Route exact path="/books" component={Books} />
				</Switch>
			</Router>
		</Paper>
	);
}

export default App;
