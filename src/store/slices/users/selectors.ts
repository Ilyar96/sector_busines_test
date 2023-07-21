import { RootState } from "../../";

export const selectUsers = (state: RootState) => state.users.items;
export const selectPaginatedAndSortedUsers = (state: RootState) =>
	state.users.paginatedAndSortedItems;
export const selectUsersPerPage = (state: RootState) =>
	state.users.itemsPerPage;
export const selectPageCount = (state: RootState) => state.users.pageCount;
export const selectCurrentPage = (state: RootState) => state.users.currentPage;
export const selectSearchQuery = (state: RootState) => state.users.currentPage;
export const selectSortField = (state: RootState) => state.users.sortField;
export const selectSortOrder = (state: RootState) => state.users.sortOrder;
