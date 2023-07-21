import { MouseEvent } from "react";
import classnames from "classnames";

import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../../store";
import {
	selectSortField,
	selectSortOrder,
} from "../../store/slices/users/selectors";

import styles from "./UsersTable.module.scss";
import { SortField, SortOrder } from "../../store/slices/users/types";

const headerCells = [
	{
		label: "ID",
		sortField: SortField.ID,
		className: styles.id,
	},
	{
		label: "Заголовок",
		sortField: SortField.TITLE,
		className: styles.title,
	},
	{
		label: "Описание",
		sortField: SortField.BODY,
		className: styles.body,
	},
];

const UsersTableHeader = () => {
	const { setSort } = useActions();
	const selectedSortField = useAppSelector(selectSortField);
	const sortOrder = useAppSelector(selectSortOrder);

	const onChangeSort = (sortField: SortField) => {
		if (sortField === selectedSortField) {
			setSort({
				sortField: selectedSortField,
				sortOrder: sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC,
			});
		} else {
			setSort({
				sortField,
				sortOrder: SortOrder.ASC,
			});
		}
	};

	return (
		<thead>
			<tr className={styles.header}>
				{headerCells.map((headerCell) => (
					<th
						className={classnames(
							styles.header_cell,
							headerCell.className,
							{ [styles.active]: selectedSortField === headerCell.sortField },
							{
								[styles.desc]:
									selectedSortField === headerCell.sortField &&
									sortOrder === SortOrder.DESC,
							}
							// TODO active classname
						)}
						key={headerCell.sortField}
					>
						<button
							className={styles.sortBtn}
							type="button"
							onClick={() => onChangeSort(headerCell.sortField)}
						>
							{headerCell.label}
						</button>
					</th>
				))}
			</tr>
		</thead>
	);
};

export default UsersTableHeader;
