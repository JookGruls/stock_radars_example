import { alpha, colors, createTheme } from "@mui/material";
import shadows from "./shadows";
import typography from "./typography";
import overridesComp from "./overrides";

const palette = {
	primary: {
		main: "#1589FF",
		contrastText: "#fff",
		pallid: "rgba(21, 137, 255, 0.1)",
	},
	secondary: {
		main: colors.teal["A700"],
		contrastText: "#fff",
		pallid: "rgba(0, 150, 136, 0.1)",
	},
	error: {
		main: colors.red.A400,
		pallid: "rgba(244, 67, 54, 0.1)",
	},
	background: {
		default: "#fafbfc",
		dark: "#F4F6F8",
		paper: colors.common.white,
	},
	action: {
		selected: alpha("#1589FF", 0.08),
	},
	text: {
		primary: colors.blueGrey[900],
		secondary: colors.blueGrey[600],
	},
};

const overrides = overridesComp(palette);

const theme = createTheme({
	palette,
	shadows,
	typography,
	overrides,
});

export default theme;
