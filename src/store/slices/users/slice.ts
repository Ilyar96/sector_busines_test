import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./asyncActions";
import { IUsersSliceState, Status } from "./types";
import { User } from "../../../components/users-table/UsersTable.type";
import { getPaginatedItems } from "../../../components/utils/getPaginatedItems";

export const initialState: IUsersSliceState = {
	items: [],
	paginatedItems: [],
	status: Status.IDLE,
	itemsPerPage: 10,
	pageCount: 0,
	currentPage: 1,
	searchQuery: "",
};

export const pizzasSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
			state.paginatedItems = getPaginatedItems(
				state.items,
				state.currentPage,
				state.itemsPerPage
			);
		},
		setSearchQuery(state, action: PayloadAction<string>) {
			state.searchQuery = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = Status.LOADING;
				state.items = [];
				state.paginatedItems = [];
			})
			.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
				state.pageCount = Math.ceil(action.payload.length / state.itemsPerPage);
				state.items = action.payload;
				state.status = Status.SUCCESS;
				state.paginatedItems = getPaginatedItems(
					state.items,
					state.currentPage,
					state.itemsPerPage
				);
			})
			.addCase(fetchUsers.rejected, (state) => {
				state.status = Status.ERROR;
				state.items = [];
				state.paginatedItems = [];
			});
	},
});

export default pizzasSlice.reducer;

export const { setCurrentPage, setSearchQuery } = pizzasSlice.actions;
