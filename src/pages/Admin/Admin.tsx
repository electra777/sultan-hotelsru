import { Link } from 'react-router-dom';
import styles from './Admin.module.css';
import Input from '../../components/Input/Input';

const Admin = () => {
	return (
		<div className={styles.admin}>
			<div className={styles.title}>Управление товарами</div>

			<form className={styles.addingProduct}>
				<div className={styles.subTitle}>Добавление товара</div>

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

				<div className={styles.group}>
					<label htmlFor="type" className={styles.label}>
						Тип ухода
					</label>
					<div className={styles.selectWrapper}>
						<select name="type" id="type" className={styles.select}>
							<option value="0" selected={true}>
								Выберите тип ухода
							</option>
							<option value="1">Уход за телом</option>
							<option value="2">Уход за руками</option>
							<option value="3">Уход за ногами</option>
						</select>
					</div>
				</div>

				<div className={styles.group}>
					<input type="checkbox" className={styles.checkbox} />
					<label htmlFor="inStock" className={styles.label}>
						В наличии
					</label>
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
			</form>
		</div>
	);
};

export default Admin;
