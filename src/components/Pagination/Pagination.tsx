import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

const Pagination = ({ onChangePage }: any) => {
	return (
		<ReactPaginate
			className={styles.pagination}
			breakLabel="..."
			nextLabel=""
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel=""
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;
