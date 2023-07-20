import { FC } from "react";
import ResponsivePagination, {
	ResponsivePaginationProps,
} from "react-responsive-pagination";
import cn from "classnames";

import styles from "./Pagination.module.scss";

export const Pagination: FC<ResponsivePaginationProps> = (props) => {
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
				{...props}
			/>
		</div>
	);
};
