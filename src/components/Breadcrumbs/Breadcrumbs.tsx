import Button from '../Button/Button';
import styles from './Breadcrumbs.module.css';
import cn from 'classnames';

const Breadcrumbs = () => {
	return (
		<div className={styles.breadcrumbs}>
			<div className={styles.backWrapper}>
				<Button icon="back"></Button>
				<span className={styles.backText}>Назад</span>
			</div>
			<ul className={styles.list}>
				<li className={styles.item}>
					<a href="#" className={styles.link}>
						Главная
					</a>
				</li>
				<li className={styles.item}>
					<a href="#" className={cn(styles.link, styles.isActive)}>
						Косметика и гигиена
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Breadcrumbs;
