import { User } from "../../../components/users-table/UsersTable.type";

export enum Status {
	IDLE = "idle",
	LOADING = "loading",
	SUCCESS = "success",
	ERROR = "error",
}
export interface IUsersSliceState {
	items: User[];
	paginatedItems: User[];
	status: Status;
	itemsPerPage: number;
	pageCount: number;
	currentPage: number;
	searchQuery: string;
}
