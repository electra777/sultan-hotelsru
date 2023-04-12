import { Link } from 'react-router-dom';
import styles from './Catalog.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { fetchData, productsCardSelector } from '../../redux/slices/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Htag from '../../components/Htag/Htag';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Pagination from '../../components/Pagination/Pagination';
import cn from 'classnames';

const Catalog = () => {
	const { data, loading } = useAppSelector(productsCardSelector);

	const dispatch = useAppDispatch();

	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchData(currentPage));
	}, [dispatch, currentPage]);

	const productCards = data.map((item) => {
		return <ProductCard {...item} key={item.barcode} />;
	});

	const [isActiveFilter, setIsActiveFilter] = useState(false);

	const setActiveFilter = () => {
		setIsActiveFilter(!isActiveFilter);
	};

	return (
		<div className={styles.catalogWrapper}>
			<Breadcrumbs></Breadcrumbs>
			<div className={styles.top}>
				<Htag>Косметика и гигиена</Htag>
				<div className={styles.sortingWrapper}></div>
			</div>
			<div className={styles.topMenu}>
				<div className={styles.topItem}>Уход за телом</div>
				<div className={styles.topItem}>Уход за руками</div>
				<div className={styles.topItem}>Уход за ногами</div>
				<div className={styles.topItem}>Уход за лицом</div>
				<div className={styles.topItem}>Уход за волосами</div>
				<div className={styles.topItem}>Средства для загара</div>
				<div className={styles.topItem}>Средства для бритья</div>
				<div className={styles.topItem}>Подарочные наборы</div>
				<div className={styles.topItem}>Гигиеническая продукция</div>
				<div className={styles.topItem}>Гигиена полости рта</div>
				<div className={styles.topItem}>Бумажная продукция</div>
			</div>
			<div className={styles.catalog}>
				<aside className={styles.aside}>
					<div className={styles.asideTitleWrapper}>
						<div className={styles.asideTitle}>ПОДБОР ПО ПАРАМЕТРАМ</div>
						<button
							className={cn(styles.showFilter, { [styles.isActive]: isActiveFilter })}
							onClick={setActiveFilter}>
							<svg
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={styles.filterIcon}>
								<path d="M1 1L5 5L9 1" stroke="#3F4E65" />
							</svg>
						</button>
					</div>
					<div className={cn(styles.asideWrapper, { [styles.isActive]: isActiveFilter })}>
						<div className={styles.priceTitle}>
							Цена<span className={styles.currency}>₸</span>
						</div>
						<div className={styles.priceGroup}>
							<input type="number" className={styles.priceInput} placeholder="0" />
							<span className={styles.priceLine}>-</span>
							<input type="number" className={styles.priceInput} placeholder="10000" />
						</div>

						<div className={styles.manufacturerWrapper}>
							<div className={styles.manufacturerTitle}>Производитель</div>
							<Input variant="search" placeholder="Поиск..." />
							<div className={styles.checkboxesWrapper}>
								<div className={styles.checkboxesGroup}>
									<input type="checkbox" id="aos" className={styles.input} />
									<label htmlFor="aos" className={styles.label}>
										Aos <span className={styles.count}>(7)</span>
									</label>
								</div>
								<div className={styles.checkboxesGroup}>
									<input type="checkbox" id="biomio" className={styles.input} />
									<label htmlFor="biomio" className={styles.label}>
										Biomio <span className={styles.count}>(5)</span>
									</label>
								</div>
								<div className={styles.checkboxesGroup}>
									<input type="checkbox" id="nefix" className={styles.input} />
									<label htmlFor="nefix" className={styles.label}>
										Нэфис <span className={styles.count}>(1)</span>
									</label>
								</div>
								<div className={styles.checkboxesGroup}>
									<input type="checkbox" id="grifon" className={styles.input} />
									<label htmlFor="grifon" className={styles.label}>
										Grifon <span className={styles.count}>(0)</span>
									</label>
								</div>
								<div className={styles.checkboxesGroup}>
									<input type="checkbox" id="nivea" className={styles.input} />
									<label htmlFor="nivea" className={styles.label}>
										Nivea <span className={styles.count}>(0)</span>
									</label>
								</div>
								<div className={styles.showAll}>
									Показать все <span className={styles.arrow}></span>
								</div>
							</div>
							<div className={styles.btnsGroup}>
								<Button>Показать</Button>
								<Button icon="trash"></Button>
							</div>
						</div>
					</div>
					<div className={styles.filter}>
						<div className={styles.filterTitle}>Уход за телом</div>
						<div className={styles.filterItem}>Уход за телом</div>
						<div className={styles.filterItem}>Уход за руками</div>
						<div className={styles.filterItem}>Уход за ногами</div>
						<div className={styles.filterItem}>Уход за лицом</div>
						<div className={styles.filterItem}>Уход за волосами</div>
						<div className={styles.filterItem}>Средства для загара</div>
						<div className={styles.filterItem}>Средства для бритья</div>
						<div className={styles.filterItem}>Подарочные наборы</div>
						<div className={styles.filterItem}>Гигиеническая продукция</div>
						<div className={styles.filterItem}>Гигиена полости рта</div>
						<div className={styles.filterItem}>Бумажная продукция</div>
					</div>
				</aside>
				<div className={styles.content}>{loading ? <div>Loading...</div> : productCards}</div>

				<Pagination onChangePage={(number: number) => setCurrentPage(number)} />

				<div className={styles.seoText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo,
					vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.
					Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris
					venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
				</div>
			</div>
		</div>
	);
};

export default Catalog;
