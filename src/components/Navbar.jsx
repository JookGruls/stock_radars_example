import React from "react";
import clsx from "clsx";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
	root: {},
	toolbar: {
		height: 64,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	btn: {
		color: "#fff",
		textDecoration: "none",
		"&:hover": {
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.secondary.main,
		},
	},
}));

const Navbar = ({ className, ...rest }) => {
	const classes = useStyles();

	return (
		<AppBar color="primary" className={clsx(classes.root, className)} elevation={0} {...rest}>
			<Toolbar className={classes.toolbar}>
				<Box>
					<Logo />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
