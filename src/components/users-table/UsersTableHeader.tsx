import classnames from "classnames";
import styles from "./UsersTable.module.scss";

const UsersTableHeader = () => {
	return (
		<thead>
			<tr className={styles.header}>
				<th
					className={classnames(styles.header_cell, styles.active, styles.id)}
				>
					<button className={styles.sortBtn} type="button">
						ID
					</button>
				</th>
				<th
					className={classnames(
						styles.active,
						styles.header_cell,
						styles.title
					)}
				>
					<button className={styles.sortBtn} type="button">
						Заголовок
					</button>
				</th>
				<th
					className={classnames(styles.active, styles.header_cell, styles.body)}
				>
					<button className={styles.sortBtn} type="button">
						Описание
					</button>
				</th>
			</tr>
		</thead>
	);
};

export default UsersTableHeader;
