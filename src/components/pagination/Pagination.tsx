import { FC } from "react";
import ResponsivePagination from "react-responsive-pagination";
import cn from "classnames";

import styles from "./Pagination.module.scss";

export const Pagination: FC = () => {
	const page = 1;
	const pages = 10;
	const pageChangeHandler = (page: number) => {
		console.log("page: ", page);
	};

	return (
		<div className={styles.wrapper}>
			<ResponsivePagination
				className={cn(styles.pagination)}
				previousClassName={styles.prev}
				nextClassName={styles.next}
				previousLabel="Назад"
				nextLabel="Далее"
				pageItemClassName={styles.pageItem}
				pageLinkClassName={styles.pageLink}
				disabledItemClassName={styles.disabledItem}
				disabledLinkClassName={styles.disabledLink}
				activeItemClassName={styles.active}
				current={page}
				total={pages}
				onPageChange={pageChangeHandler}
			/>
		</div>
	);
};
