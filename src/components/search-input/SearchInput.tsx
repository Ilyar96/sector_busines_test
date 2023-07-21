import { ChangeEvent, useState } from "react";

import { useActions } from "../hooks/useActions";

import searchIcon from "./search.svg";
import closeIcon from "./close.svg";
import styles from "./SearchInput.module.scss";
import cn from "classnames";

const SearchInput = () => {
	const [value, setValue] = useState("");
	const { setSearchQuery, setCurrentPage } = useActions();

	const onSearchClick = () => {
		setSearchQuery(value.trim());
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		setCurrentPage(1);
	};

	const onReset = () => {
		setValue("");
		setSearchQuery("");
		setCurrentPage(1);
	};

	return (
		<div className={styles.root}>
			<input
				className={styles.input}
				type="text"
				value={value}
				onChange={onChange}
				placeholder="Поиск"
			/>
			<button
				className={cn(styles.resetBtn, { [styles.active]: value.length })}
				type="button"
				onClick={onReset}
			>
				<img src={closeIcon} alt="Очистить поле" />
				<span className="visually-hidden">Очистить поле</span>
			</button>
			<button className={styles.btn} type="button" onClick={onSearchClick}>
				<img src={searchIcon} alt="Поиск" />
				<span className="visually-hidden">Поиск пользователя</span>
			</button>
		</div>
	);
};

export default SearchInput;
