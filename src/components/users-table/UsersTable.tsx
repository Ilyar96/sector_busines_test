import { FC } from "react";
import cn from "classnames";

import UsersTableHeader from "./UsersTableHeader";
import UsersTableRow from "./UsersTableRow";
import { UsersTableProps } from "./UsersTable.type";

import styles from "./UsersTable.module.scss";
import { useMedia } from "../hooks/useMedia";
import { useAppSelector } from "../../store";
import { selectUsersPerPage } from "../../store/slices/users/selectors";

const UsersTable: FC<UsersTableProps> = ({ users, className = "" }) => {
	const usersPerPage = useAppSelector(selectUsersPerPage);
	const isMobile = useMedia("(max-width: 799.98px)");
	const isNeedEmptyRows = !isMobile && users.length < usersPerPage;

	return (
		<table className={cn(styles.table, className)}>
			<UsersTableHeader />
			<tbody>
				{users.map((user) => (
					<UsersTableRow key={user.id} {...user} />
				))}
				{isNeedEmptyRows &&
					Array.from(Array(usersPerPage - users.length)).map((_, i) => (
						<UsersTableRow key={i} userId={0} id={0} title={""} body={""} />
					))}
			</tbody>
		</table>
	);
};

export default UsersTable;
