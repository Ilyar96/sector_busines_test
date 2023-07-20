import React, { ChangeEvent, useState } from "react";

import searchIcon from "./search.svg";

import styles from "./SearchInput.module.scss";

const SearchInput = () => {
	const [value, setValue] = useState("");

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
