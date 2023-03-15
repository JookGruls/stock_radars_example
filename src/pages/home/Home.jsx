import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		backgroundColor: theme.palette.background.dark,
		height: "100%",
		width: "100vw",
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(5),
	},
	paper: {
		border: `2px solid transparent`,
		"&:hover": {
			border: `2px solid ${theme.palette.primary.main}`,
			cursor: "pointer",
		},
	},
}));

const Home = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	return (
		<div className={classes.root}>
			<Container maxWidth="md">
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Paper
							onClick={() => navigate("/fetching")}
							className={classes.paper}
							component={Box}
							textAlign="center"
							px={2}
							py={3}
							elevation={3}
						>
							<Typography>FETCH API</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper
							onClick={() => navigate("/forms")}
							className={classes.paper}
							component={Box}
							textAlign="center"
							px={2}
							py={3}
							elevation={3}
						>
							<Typography>INPUT FORM</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Home;
