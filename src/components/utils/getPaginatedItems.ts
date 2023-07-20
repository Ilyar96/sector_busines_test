import { User } from "../users-table/UsersTable.type";

export const getPaginatedItems = (
	items: User[],
	page: number,
	itemsPerPage: number
) => {
	return items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
};
