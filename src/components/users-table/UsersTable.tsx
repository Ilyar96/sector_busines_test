import { FC } from "react";
import cn from "classnames";

import UsersTableHeader from "./UsersTableHeader";
import UsersTableRow from "./UsersTableRow";
import { UsersTableProps } from "./UsersTable.type";

import styles from "./UsersTable.module.scss";
import { useMedia } from "../hooks/useMedia";

const UsersTable: FC<UsersTableProps> = ({ users, className = "" }) => {
	const isMobile = useMedia("(max-width: 799.98px)");
	const isNeedEmptyRows = !isMobile && users.length < 10;

	return (
		<table className={cn(styles.table, className)}>
			<UsersTableHeader />
			<tbody>
				{users.map((user) => (
					<UsersTableRow key={user.id} {...user} />
				))}
				{isNeedEmptyRows &&
					Array.from(Array(10 - users.length)).map((_, i) => (
						<UsersTableRow key={i} userId={0} id={0} title={""} body={""} />
					))}
			</tbody>
		</table>
	);
};

export default UsersTable;
