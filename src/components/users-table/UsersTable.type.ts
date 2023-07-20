export interface User {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface UsersTableProps {
	className?: string;
	users: User[];
}

export type UsersTableRowProps = User;
