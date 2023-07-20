import Container from "../../components/container/Container";
import SearchInput from "../../components/search-input/SearchInput";
import UsersTable from "../../components/users-table/UsersTable";
import { User } from "../../components/users-table/UsersTable.type";

import styles from "./Home.module.scss";
import { Pagination } from "../../components/pagination/Pagination";

const mockData: User[] = [
	{
		userId: 1,
		id: 5,
		title: "nesciunt quas odio",
		body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimu esse voluptatibus quis est aut tenetur dolor neque",
	},
	{
		userId: 1,
		id: 6,
		title: "dolorem eum magni eos aperiam quia",
		body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
	},
];

const Home = () => {
	return (
		<div className={styles.root}>
			<section>
				<h1 className="visually-hidden">Данные пользователей</h1>

				<Container className={styles.container}>
					<SearchInput />
					<UsersTable users={mockData} className={styles.table} />
					<Pagination />
				</Container>
			</section>
		</div>
	);
};

export default Home;
