import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import clsx from "clsx";

import { Breadcrumbs, Typography, Link, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const useStyles = makeStyles(() => ({
	root: {},
}));

function Header({ className, beadcrumbs = [], title, ...rest }) {
	const classes = useStyles();
	const { pathname } = useLocation();

	return (
		<div className={clsx(classes.root, className)} {...rest}>
			<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
				{beadcrumbs.map((beadcrumb, i) =>
					beadcrumb.link ? (
						<Link key={i} color="inherit" to={beadcrumb.link} component={RouterLink}>
							{beadcrumb.text}
						</Link>
					) : (
						<Typography key={i} color="textPrimary">
							{beadcrumb.text}
						</Typography>
					)
				)}
			</Breadcrumbs>
			<Box my={2}>
				<Typography variant="h3" color="textPrimary">
					{title || beadcrumbs.slice(-1)[0]?.text || pathname.split("/").slice(-1)[0] || ""}
				</Typography>
			</Box>
		</div>
	);
}

export default Header;
