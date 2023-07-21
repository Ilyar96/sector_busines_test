import Container from "../../components/container/Container";
import SearchInput from "../../components/search-input/SearchInput";
import UsersTable from "../../components/users-table/UsersTable";
import { Pagination } from "../../components/pagination/Pagination";
import { useActions } from "../../components/hooks/useActions";

import styles from "./Home.module.scss";
import { useEffect } from "react";
import { useAppSelector } from "../../store";
import {
	selectCurrentPage,
	selectPageCount,
	selectPaginatedAndSortedUsers,
} from "../../store/slices/users/selectors";

const Home = () => {
	const { fetchUsers, setCurrentPage } = useActions();
	const paginatedUsers = useAppSelector(selectPaginatedAndSortedUsers);
	const currentPage = useAppSelector(selectCurrentPage);
	const pageCount = useAppSelector(selectPageCount);

	useEffect(() => {
		fetchUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const pageChangeHandler = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div className={styles.root}>
			<section>
				<h1 className="visually-hidden">Данные пользователей</h1>

				<Container className={styles.container}>
					<SearchInput />
					<UsersTable users={paginatedUsers} className={styles.table} />
					<Pagination
						current={currentPage}
						total={pageCount}
						onPageChange={pageChangeHandler}
					/>
				</Container>
			</section>
		</div>
	);
};

export default Home;
