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
import UsersSort from "../../components/users-sort/UsersSort";
import { useMedia } from "../../components/hooks/useMedia";

const Home = () => {
	const { fetchUsers, setCurrentPage } = useActions();
	const paginatedUsers = useAppSelector(selectPaginatedAndSortedUsers);
	const currentPage = useAppSelector(selectCurrentPage);
	const pageCount = useAppSelector(selectPageCount);
	const isMobile = useMedia("(max-width: 799.98px)");

	useEffect(() => {
		try {
			fetchUsers();
		} catch (error) {
			console.error((error as Error).message);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const pageChangeHandler = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className={styles.root}>
			<section>
				<h1 className="visually-hidden">Данные пользователей</h1>

				<Container className={styles.container}>
					<SearchInput />
					{isMobile && <UsersSort />}
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
