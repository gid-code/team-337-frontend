import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
// const client = new ApolloClient({
// 	uri: "https://richesterconsulting.com/stemxus-team-337-api",
// });

const theme = createMuiTheme({
	palette: {
		primary: {
			dark: "#9e5b0b",
			main: "#e28210",
			light: "#e79b3f",
		},
		secondary: {
			main: "#551007",
			dark: "#3b0b04",
			light: "#773f38",
		},
	},
});
ReactDOM.render(
	// <ApolloProvider client={client}>
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	// </ApolloProvider>,
	// </React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
