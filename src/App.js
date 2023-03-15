import { ThemeProvider } from "@mui/material";

import Routes from "./Routes";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
