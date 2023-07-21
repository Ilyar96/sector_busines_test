import { ISelectOption } from "../components/select/Select.type";
import { SortField } from "../store/slices/users/types";

export const sortOptions: ISelectOption[] = [
	{
		value: `+${SortField.ID}`,
		label: "ID (по возрастанию)",
	},
	{
		value: `-${SortField.ID}`,
		label: "ID (по убыванию)",
	},
	{
		value: `+${SortField.TITLE}`,
		label: "Заголовок (A-z)",
	},
	{
		value: `-${SortField.TITLE}`,
		label: "Заголовок (Z-a)",
	},
	{
		value: `+${SortField.BODY}`,
		label: "Описание (A-z)",
	},
	{
		value: `-${SortField.BODY}`,
		label: "Описание (Z-a)",
	},
];
