import React from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
	useGlobalStateContext,
} from "./context/globalContext";
import Dashboard from "./components/Views/Dashboard";

function App() {
	const { currentTheme } = useGlobalStateContext();
	

	const theme = createMuiTheme({
		palette: {
			type: currentTheme,
			primary: {
				light: "#25E8A7",
				dark: "#25E8A7",
				main: "#25E8A7",
			},
			background: {
				paper: currentTheme === 'light' ? '#242041' : '#424242',
				default: currentTheme === 'light' ? '#1A1736' : '#303030'
			},
			text: {
				primary: '#fff',
				secondary: "rgba(255, 255, 255, 0.7)",
				disabled: "rgba(255, 255, 255, 0.5)",
				hint: "rgba(255, 255, 255, 0.5)",
				icon: "rgba(255, 255, 255, 0.5)"
			},
			divider: "rgba(255, 255, 255, 0.12)",
			action: {
				active: "rgba(255, 255, 255, 0.7)"
			}
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
      <Dashboard />
		</ThemeProvider>
	);
}

export default App;
