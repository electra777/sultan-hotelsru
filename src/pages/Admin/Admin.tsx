import { Link } from 'react-router-dom';
import styles from './Admin.module.css';
import Input from '../../components/Input/Input';
import cn from 'classnames';
import Button from '../../components/Button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchData, productsCardSelector } from '../../redux/slices/productsSlice';
import { useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

const Admin = () => {
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

	let param = [1, '', '', '', ''];

	useEffect(() => {
		dispatch(fetchData(param));
	}, [dispatch]);

	localStorage.setItem('data', JSON.stringify(data));

	let localStorageTemp: any = localStorage.getItem('data');

	let cardsLocalStorage = JSON.parse(localStorageTemp);

	const productCards = cardsLocalStorage.map((item: any) => {
		return <ProductCard {...item} key={item.barcode} />;
	});

	return (
		<div className={styles.admin}>
			<div className={styles.title}>Управление товарами</div>

			<div className={styles.subTitle}>Добавление товара</div>

			<form className={styles.addingProduct}>
				<div className={styles.col}>
					<div className={styles.group}>
						<label htmlFor="name" className={styles.label}>
							Название*
						</label>
						<Input id="name" placeholder="Введите название товара" />
					</div>
					<div className={styles.group}>
						<label htmlFor="price" className={styles.label}>
							Стоимость (₸)*
						</label>
						<Input id="price" placeholder="Введите стоимость товара" />
					</div>
					<div className={styles.group}>
						<label htmlFor="barcode" className={styles.label}>
							Штрихкод*
						</label>
						<Input id="barcode" placeholder="Введите штрихкод товара" />
					</div>
					<div className={styles.group}>
						<label htmlFor="manufacturer" className={styles.label}>
							Производитель*
						</label>
						<Input id="manufacturer" placeholder="Введите производителя товара" />
					</div>
					<div className={styles.group}>
						<label htmlFor="brand" className={styles.label}>
							Брэнд*
						</label>
						<Input id="brand" placeholder="Введите брэнд товара" />
					</div>

					<div className={styles.group}>
						<label htmlFor="weight" className={styles.label}>
							Вес
						</label>
						<Input id="weight" placeholder="Введите вес товара" />
					</div>
					<div className={styles.group}>
						<label htmlFor="volume" className={styles.label}>
							Объём
						</label>
						<Input id="volume" placeholder="Введите объём товара" />
					</div>

					<div className={styles.group}>
						<label htmlFor="size" className={styles.label}>
							Размер
						</label>
						<Input id="size" placeholder="Введите размер товара" />
					</div>
				</div>

				<div className={styles.col}>
					<div className={styles.group}>
						<label htmlFor="type" className={styles.label}>
							Тип ухода
						</label>

						{arrayTypes.map((item) => {
							return (
								<div className={styles.checkboxesWrapper} key={item}>
									<input type="checkbox" className={styles.checkbox} />
									<label htmlFor="inStock" className={styles.label}>
										{item}
									</label>
								</div>
							);
						})}
					</div>

					<div className={styles.group}>
						<label htmlFor="description" className={styles.label}>
							Описание
						</label>
						<textarea
							name="description"
							id="description"
							placeholder="Введите описание товара"
							className={styles.textarea}></textarea>
					</div>

					<div className={styles.group}>
						<label htmlFor="image" className={styles.label}>
							Картинка
						</label>
						<input
							type="file"
							id="file"
							accept=".png,.jpg,.jpeg,.svg"
							className={styles.fileInput}
						/>
					</div>

					<div className={styles.group}>
						<input type="checkbox" className={styles.checkbox} />
						<label htmlFor="inStock" className={styles.label}>
							В наличии
						</label>
					</div>
					<Button>Добавить товар</Button>
				</div>
			</form>

			<div className={styles.content}>{loading ? <div>Loading...</div> : productCards}</div>
		</div>
	);
};

export default Admin;
