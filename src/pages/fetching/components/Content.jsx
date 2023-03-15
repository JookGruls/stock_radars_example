import { Grid, Typography } from "@mui/material";
import React from "react";

const Content = ({ data = [] }) => {
	return (
		<Grid container spacing={2}>
			{data.map((detail) => (
				<Grid key={detail.N_fullname + detail.N_name} item xs={4}>
					<Typography>{detail.N_fullname ?? ""}</Typography>
				</Grid>
			))}
		</Grid>
	);
};

export default Content;
