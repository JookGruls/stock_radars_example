import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import LoadingSpinner from "./LoadingSpinner";

const useStyles = makeStyles((theme) => ({
	root: {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
		minHeight: "100%",
		padding: theme.spacing(3),
	},
}));

const Loading = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box>
				<LoadingSpinner />
			</Box>
		</div>
	);
};

export default Loading;
