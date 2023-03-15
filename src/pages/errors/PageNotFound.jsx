import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.main,
		height: "100%",
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
	image: {
		// marginTop: 18,
		display: "inline-block",
		maxWidth: "100%",
		width: 560,
	},
}));

const PageNotFound = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="xl">
			<Box display="flex" flexDirection="column" height="100%" justifyContent="center">
				<Box textAlign="center">
					<img alt="Under development" className={classes.image} src="../../../public/assets/images/404.svg" />
				</Box>
				<Typography align="center" color="textPrimary" variant="h4">
					404: The page you are looking for isn’t here
				</Typography>
			</Box>
		</Container>
	);
};

export default PageNotFound;
