import classnames from "classnames";
import styles from "./UsersTable.module.scss";

const UsersTableHeader = () => {
	return (
		<thead>
			<tr className={styles.header}>
				<th
					className={classnames(styles.header_cell, styles.active, styles.id)}
				>
					ID
				</th>
				<th
					className={classnames(
						styles.active,
						styles.header_cell,
						styles.title
					)}
				>
					Заголовок
				</th>
				<th
					className={classnames(styles.active, styles.header_cell, styles.body)}
				>
					Описание
				</th>
			</tr>
		</thead>
	);
};

export default UsersTableHeader;
