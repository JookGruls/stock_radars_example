import React from "react";
import { Container } from "@mui/material";

const Lcenter = ({ maxWidth = "md", children, ...restProps }) => {
	return (
		<React.Fragment>
			<Container maxWidth={maxWidth} {...restProps}>
				{children}
			</Container>
		</React.Fragment>
	);
};

export default Lcenter;
