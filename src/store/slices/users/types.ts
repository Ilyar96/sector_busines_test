import { User } from "../../../components/users-table/UsersTable.type";

export enum Status {
	IDLE = "idle",
	LOADING = "loading",
	SUCCESS = "success",
	ERROR = "error",
}

export enum SortField {
	ID = "id",
	TITLE = "title",
	BODY = "body",
}

export enum SortOrder {
	ASC = "asc",
	DESC = "desc",
}

export interface Sort {
	sortField: SortField;
	sortOrder: SortOrder;
}

export interface IUsersSliceState {
	items: User[];
	searchedItems: User[];
	paginatedAndSortedItems: User[];
	status: Status;
	itemsPerPage: number;
	pageCount: number;
	currentPage: number;
	searchQuery: string;
	sortField: SortField;
	sortOrder: SortOrder;
}
