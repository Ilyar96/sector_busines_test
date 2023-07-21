import React, { ChangeEvent, useEffect, useState } from "react";

import { useActions } from "../hooks/useActions";

import searchIcon from "./search.svg";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
	const [value, setValue] = useState("");
	const { setSearchQuery } = useActions();

	useEffect(() => {
		setSearchQuery(value.trim());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
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
			<button className={styles.btn} type="button">
				<img src={searchIcon} alt="Поиск" />
				<span className="visually-hidden">Поиск пользователя</span>
			</button>
		</div>
	);
};

export default SearchInput;
