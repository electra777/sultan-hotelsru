import { Link } from 'react-router-dom';
import styles from './Catalog.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useEffect } from 'react';
import { fetchData, productsCardSelector } from '../../redux/slices/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Input from '../../components/Input/Input';

const Catalog = () => {
	const { data, loading } = useAppSelector(productsCardSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	const productCards = data.map((item) => {
		return (
			<Link to={`/catalog/${item.barcode}`} key={item.barcode}>
				<ProductCard {...item} />
			</Link>
		);
	});

	return (
		<div className={styles.catalog}>
			<aside className={styles.aside}>
				<div className={styles.asideTitle}>ПОДБОР ПО ПАРАМЕТРАМ</div>
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
				</div>
				<div className={styles.filter}>
					<div className={styles.filterItem}>Уход за телом</div>
				</div>
			</aside>
			<div className={styles.content}>{loading ? <div>Loading...</div> : productCards}</div>
		</div>
	);
};

export default Catalog;
