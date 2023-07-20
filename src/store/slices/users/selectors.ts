import { RootState } from "../../";

export const selectUsers = (state: RootState) => state.users.items;
export const selectPaginatedUsers = (state: RootState) =>
	state.users.paginatedItems;
export const selectUsersPerPage = (state: RootState) =>
	state.users.itemsPerPage;
export const selectPageCount = (state: RootState) => state.users.pageCount;
export const selectCurrentPage = (state: RootState) => state.users.currentPage;
export const selectSearchQuery = (state: RootState) => state.users.currentPage;
