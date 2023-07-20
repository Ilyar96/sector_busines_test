import { FC } from "react";
import cn from "classnames";

import { UsersTableRowProps } from "./UsersTable.type";

import styles from "./UsersTable.module.scss";

const UsersTableRow: FC<UsersTableRowProps> = ({ body, id, title }) => {
	return (
		<tr className={styles.row}>
			<td className={cn(styles.cell, styles.id)} data-label="ID">
				{id !== 0 ? id : ""}
			</td>
			<td className={cn(styles.cell, styles.title)} data-label="Заголовок">
				{title}
			</td>
			<td className={cn(styles.cell, styles.body)} data-label="Описание">
				{body}
			</td>
		</tr>
	);
};

export default UsersTableRow;
