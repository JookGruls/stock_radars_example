import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

import Lcenter from "../../layout/Lcenter";
import Header from "../../components/Header";
import { makeStyles } from "@mui/styles";
import { Box, Paper } from "@mui/material";
import Content from "./components/Content";

const useStyles = makeStyles((theme) => ({
	content: {
		padding: 16,
	},
}));

const Fetching = () => {
	const classes = useStyles();

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getExample = useCallback(async () => {
		setIsLoading(true);
		const linkGet = `https://stockradars.co/assignment/data.php`;
		try {
			const res = await axios.get(linkGet);
			setData(res.data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getExample();
	}, [getExample]);

	return (
		<Lcenter maxWidth={false}>
			<Header beadcrumbs={[{ text: "Home", link: "/" }, { text: "Fetching" }]} title="Fetching" />
			<Box display="flex" alignItems="center" justifyContent="center" width="100%">
				<Content data={data} />
			</Box>
		</Lcenter>
	);
};

export default Fetching;
