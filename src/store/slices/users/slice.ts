import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./asyncActions";
import { IUsersSliceState, Sort, SortField, SortOrder, Status } from "./types";
import { User } from "../../../components/users-table/UsersTable.type";
import { getPaginatedItems } from "../../../components/utils/getPaginatedItems";

export const initialState: IUsersSliceState = {
	items: [],
	searchedItems: [],
	paginatedAndSortedItems: [],
	status: Status.IDLE,
	itemsPerPage: 10,
	pageCount: 0,
	currentPage: 1,
	searchQuery: "",
	sortField: SortField.ID,
	sortOrder: SortOrder.ASC,
};

export const pizzasSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
			state.paginatedAndSortedItems = getPaginatedItems(
				state.searchedItems,
				state.currentPage,
				state.itemsPerPage
			);
		},
		setSearchQuery(state, action: PayloadAction<string>) {
			const searchedItems = state.items.filter((item) =>
				item.title.toLowerCase().includes(action.payload.toLowerCase())
			);

			state.searchQuery = action.payload;
			state.searchedItems = searchedItems;
			state.pageCount = state.pageCount = Math.ceil(
				searchedItems.length / state.itemsPerPage
			);
			state.paginatedAndSortedItems = getPaginatedItems(
				searchedItems,
				state.currentPage,
				state.itemsPerPage
			);
		},
		setSort(state, action: PayloadAction<Sort>) {
			const { sortField, sortOrder } = action.payload;
			state.sortField = sortField;
			state.sortOrder = sortOrder;
			state.searchedItems.sort((user1, user2) => {
				if (sortOrder === SortOrder.ASC) {
					return user1[sortField] > user2[sortField] ? 1 : -1;
				} else {
					return user1[sortField] > user2[sortField] ? -1 : 1;
				}
			});
			state.paginatedAndSortedItems = getPaginatedItems(
				state.searchedItems,
				state.currentPage,
				state.itemsPerPage
			);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = Status.LOADING;
				state.items = [];
				state.searchedItems = [];
				state.paginatedAndSortedItems = [];
			})
			.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
				state.pageCount = Math.ceil(action.payload.length / state.itemsPerPage);
				state.items = action.payload;
				state.searchedItems = action.payload;
				state.status = Status.SUCCESS;
				state.paginatedAndSortedItems = getPaginatedItems(
					state.items,
					state.currentPage,
					state.itemsPerPage
				);
			})
			.addCase(fetchUsers.rejected, (state) => {
				state.status = Status.ERROR;
				state.items = [];
				state.searchedItems = [];
				state.paginatedAndSortedItems = [];
			});
	},
});

export default pizzasSlice.reducer;

export const { setCurrentPage, setSearchQuery, setSort } = pizzasSlice.actions;
