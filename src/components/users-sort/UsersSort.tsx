import { useEffect, useState } from "react";
import { MultiValue, SingleValue } from "react-select";

import { SortField, SortOrder } from "../../store/slices/users/types";
import { Select } from "../select/Select";
import { ISelectOption } from "../select/Select.type";
import { useActions } from "../hooks/useActions";
import {
	selectSortField,
	selectSortOrder,
} from "../../store/slices/users/selectors";
import { useAppSelector } from "../../store";
import { sortOptions } from "../../constants";

import styles from "./UsersSort.module.scss";

const UsersSort = () => {
	const [selectedOption, setSelectedOption] = useState<
		SingleValue<ISelectOption> | MultiValue<ISelectOption>
	>(sortOptions[0]);
	const { setSort } = useActions();
	const sortField = useAppSelector(selectSortField);
	const sortOrder = useAppSelector(selectSortOrder);

	useEffect(() => {
		checkSort();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortField, sortOrder]);

	const sortChangeHandler = (
		selectedOption: SingleValue<ISelectOption> | MultiValue<ISelectOption>
	) => {
		if (!selectedOption) {
			return;
		}

		setSelectedOption(selectedOption);

		switch ((selectedOption as ISelectOption).value) {
			case "+id":
				setSort({
					sortField: SortField.ID,
					sortOrder: SortOrder.ASC,
				});
				break;
			case "-id":
				setSort({
					sortField: SortField.ID,
					sortOrder: SortOrder.DESC,
				});
				break;
			case "+title":
				setSort({
					sortField: SortField.TITLE,
					sortOrder: SortOrder.ASC,
				});
				break;
			case "-title":
				setSort({
					sortField: SortField.TITLE,
					sortOrder: SortOrder.DESC,
				});
				break;
			case "+body":
				setSort({
					sortField: SortField.BODY,
					sortOrder: SortOrder.ASC,
				});
				break;
			case "-body":
				setSort({
					sortField: SortField.BODY,
					sortOrder: SortOrder.DESC,
				});
				break;

			default:
				break;
		}
	};

	const checkSort = () => {
		if (sortField === SortField.ID && sortOrder === SortOrder.ASC) {
			setSelectedOption(sortOptions[0]);
		}

		if (sortField === SortField.ID && sortOrder === SortOrder.DESC) {
			setSelectedOption(sortOptions[1]);
		}

		if (sortField === SortField.TITLE && sortOrder === SortOrder.ASC) {
			setSelectedOption(sortOptions[2]);
		}

		if (sortField === SortField.TITLE && sortOrder === SortOrder.DESC) {
			setSelectedOption(sortOptions[3]);
		}

		if (sortField === SortField.BODY && sortOrder === SortOrder.ASC) {
			setSelectedOption(sortOptions[4]);
		}

		if (sortField === SortField.BODY && sortOrder === SortOrder.DESC) {
			setSelectedOption(sortOptions[5]);
		}
	};

	return (
		<div className={styles.root}>
			<Select
				options={sortOptions}
				value={selectedOption}
				instanceId={"sort"}
				onChange={sortChangeHandler}
			/>
		</div>
	);
};

export default UsersSort;
