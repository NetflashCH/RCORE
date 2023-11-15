import { createSlice } from "@reduxjs/toolkit";

interface InitStateTypes {
	data: {
		name: string;
		model: string;
		url: string;
		position: {
			x: number;
			y: number;
			z: number;
		};
	}[];
}

const initialState: InitStateTypes = {
	data: [
		{
			name: "Testing Id 2348459521",
			model: "recore-prop-whiteboard large",
			url: "-",
			position: {
				x: 4120.0,
				y: -1016.0,
				z: -1016.0,
			},
		},
	],
};

export const utilSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		gettingFilterName: (state, actions) => {
			state.data = actions.payload;
		},
	},
});

export default utilSlice.reducer;

export const { gettingFilterName } = utilSlice.actions;
