import { alpha } from "@mui/material";

const overrides = (palette) => ({
	MuiButton: {
		root: {
			borderRadius: "8px",
		},
		contained: {
			boxShadow: "none",
			"&:hover": {
				boxShadow: "none",
			},
		},
	},
	MuiTextField: {
		root: {
			"& .MuiOutlinedInput-root": {
				borderRadius: `8px`,
			},
		},
	},
	MuiFormControl: {
		root: {
			"& .MuiOutlinedInput-root": {
				borderRadius: `8px`,
			},
			"& .MuiInputBase-input.Mui-disabled": {
				backgroundColor: "rgba(0, 0, 0, 0.1)",
			},
		},
	},
	MuiPaper: {
		elevation1: { boxShadow: "0 2px 14px 0 rgba(0, 0, 0, 0.06)" },
		rounded: { borderRadius: "8px" },
	},
	MuiListItem: {
		root: {
			"&&:hover": {
				backgroundColor: alpha(palette.primary.main, 0.08),
				color: palette.primary.main,
			},
		},
	},
});

export default overrides;
