import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
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
	const arrayTypes = [
		'Уход за телом',
		'Уход за руками',
		'Уход за ногами',
		'Уход за лицом',
		'Уход за волосами',
		'Средства для загара',
		'Средства для бритья',
		'Подарочные наборы',
		'Гигиеническая продукция',
		'Гигиена полости рта',
		'Бумажная продукция',
	];
	const { data, loading } = useAppSelector(productsCardSelector);

	const dispatch = useAppDispatch();

	const [currentPage, setCurrentPage] = useState(1);

	const [orderBy, setOrderBy] = useState('');

	const [key, setKey] = useState('');

	const [checkboxFilter, setCheckboxFilter] = useState<any[]>([]);

	const [type, setType] = useState('');

	const handleChangeType = (item: any) => {
		setType(item);
	};

	let param = [currentPage, key, orderBy, checkboxFilter, type];

	useEffect(() => {
		// window.scrollTo(0, 0);
		dispatch(fetchData(param));
	}, [dispatch, currentPage, key, orderBy, checkboxFilter, type]);

	const productCards = data.map((item) => {
		return <ProductCard {...item} key={item.barcode} />;
	});

	const [isActiveFilter, setIsActiveFilter] = useState(false);

	const setActiveFilter = () => {
		setIsActiveFilter(!isActiveFilter);
	};

	const [isSortSelect, setIsSortSelect] = useState(false);

	const setSortSelect = () => {
		setIsSortSelect(!isSortSelect);
	};

	const [isShowAllManufacturer, setIsShowAllManufacturer] = useState(false);

	const setShowAllManufacturer = () => {
		setIsShowAllManufacturer(!isShowAllManufacturer);
	};

	const [sortName, setSortName] = useState('Название (по возрастанию)');

	const handleSortByName = (order: string) => {
		let name = order === 'asc' ? 'по возрастанию' : 'по убыванию';

		setKey('name');
		setOrderBy(order);
		setSortName(`Название (${name})`);
		setSortSelect();
	};

	const handleSortByPrice = (order: string) => {
		let name = order === 'asc' ? 'по возрастанию' : 'по убыванию';

		setKey('price');
		setOrderBy(order);
		setSortName(`Цена (${name})`);
		setSortSelect();
	};

	type Inputs = {
		aos: boolean;
		biomio: boolean;
		nefix: boolean;
		grifon: boolean;
		nivea: boolean;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data: any) => {
		let arrFilters: any = [];

		console.log(arrFilters, 'arrFilters');

		for (const key in data) {
			if (data[key] && !arrFilters.includes(key)) {
				arrFilters.push(key);
			}
		}

		setCheckboxFilter((prevArr) => [...prevArr, ...arrFilters]);
	};

	return (
		<div className={styles.catalogWrapper}>
			<Breadcrumbs></Breadcrumbs>
			<div className={styles.top}>
				<div className={styles.sortingWrapper}>
					<Htag>Косметика и гигиена</Htag>
					<div className={styles.sortingSelectWrapper}>
						<span className={styles.sortTitle}>Сортировка:</span>

						<button
							className={cn(styles.sortShowSelect, { [styles.isActive]: isSortSelect })}
							onClick={setSortSelect}>
							{sortName}
							<svg
								width="7"
								height="6"
								viewBox="0 0 7 6"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={styles.arrowSortIcon}>
								<path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65" />
							</svg>
						</button>

						<ul className={styles.sortSelect}>
							<li
								className={styles.sortSelectItem}
								onClick={() => {
									handleSortByName('asc');
								}}>
								Название (по возрастанию)
							</li>
							<li
								className={styles.sortSelectItem}
								onClick={() => {
									handleSortByName('desc');
								}}>
								Название (по убыванию)
							</li>
							<li
								className={styles.sortSelectItem}
								onClick={() => {
									handleSortByPrice('asc');
								}}>
								Цена (по возрастанию)
							</li>
							<li
								className={styles.sortSelectItem}
								onClick={() => {
									handleSortByPrice('desc');
								}}>
								Цена (по убыванию)
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.topMenu}>
				{arrayTypes.map((item) => {
					return (
						<div
							className={cn(styles.topItem, { [styles.isActive]: type === item })}
							key={item}
							onClick={() => {
								handleChangeType(item);
							}}>
							{item}
						</div>
					);
				})}
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

							<form className={styles.checkboxesWrapper} onSubmit={handleSubmit(onSubmit)}>
								<div className={styles.checkboxesGroup}>
									<input type="checkbox" id="aos" {...register('aos')} className={styles.input} />
									<label htmlFor="aos" className={styles.label}>
										Aos <span className={styles.count}>(7)</span>
									</label>
								</div>
								<div className={styles.checkboxesGroup}>
									<input
										type="checkbox"
										id="biomio"
										{...register('biomio')}
										className={styles.input}
									/>
									<label htmlFor="biomio" className={styles.label}>
										Biomio <span className={styles.count}>(5)</span>
									</label>
								</div>
								<div className={styles.checkboxesGroup}>
									<input
										type="checkbox"
										id="nefix"
										{...register('nefix')}
										className={styles.input}
									/>
									<label htmlFor="nefix" className={styles.label}>
										Нэфис <span className={styles.count}>(1)</span>
									</label>
								</div>

								{isShowAllManufacturer && (
									<div className={styles.checkboxesGroupWrapper}>
										<div className={styles.checkboxesGroup}>
											<input
												type="checkbox"
												id="grifon"
												{...register('grifon')}
												className={styles.input}
											/>
											<label htmlFor="grifon" className={styles.label}>
												Grifon <span className={styles.count}>(0)</span>
											</label>
										</div>
										<div className={styles.checkboxesGroup}>
											<input
												type="checkbox"
												id="nivea"
												{...register('nivea')}
												className={styles.input}
											/>
											<label htmlFor="nivea" className={styles.label}>
												Nivea <span className={styles.count}>(0)</span>
											</label>
										</div>
									</div>
								)}

								<button
									className={cn(styles.showAllManufacturer, {
										[styles.isActive]: isShowAllManufacturer,
									})}
									onClick={setShowAllManufacturer}
									type="button">
									Показать все
									<svg
										width="7"
										height="6"
										viewBox="0 0 7 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className={styles.arrowShowAll}>
										<path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65" />
									</svg>
								</button>

								<div className={styles.btnsGroup}>
									<Button type="submit">Показать</Button>
									<Button icon="trash" type="button" onClick={() => reset()}></Button>
								</div>
							</form>
						</div>
					</div>
					<div className={styles.filter}>
						<div className={styles.filterTitle}>Уход за телом</div>

						{arrayTypes.map((item) => {
							return (
								<div
									className={cn(styles.filterItem, { [styles.isActive]: type === item })}
									key={item}
									onClick={() => {
										handleChangeType(item);
									}}>
									{item}
								</div>
							);
						})}
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
