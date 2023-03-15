import { pink } from "@mui/material/colors";
import { createStyles, makeStyles } from "@mui/styles";

const progressBarColor = pink["A400"];

const useStyles = makeStyles((theme) =>
	createStyles({
		"@global": {
			"*": {
				boxSizing: "border-box",
				margin: 0,
				padding: 0,
			},
			html: {
				"-webkit-font-smoothing": "antialiased",
				"-moz-osx-font-smoothing": "grayscale",
				height: "100%",
				width: "100%",
			},
			body: {
				backgroundColor: "#f4f6f8",
				height: "100%",
				width: "100%",
			},
			a: {
				textDecoration: "none",
			},
			"#root": {
				height: "100%",
				width: "100%",
			},
			"#nprogress": {
				position: "relative",
				zIndex: theme.zIndex.appBar + 1000,
				"& .bar": {
					background: `${theme.palette.secondary.main} !important`,
				},
			},
		},
	})
);

const GlobalStyles = () => {
	useStyles();

	return null;
};

export default GlobalStyles;
