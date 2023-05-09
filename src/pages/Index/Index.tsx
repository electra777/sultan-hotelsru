import { Link } from 'react-router-dom';
import styles from './Index.module.css';
import cn from 'classnames';

const Index = () => {
	return (
		<div className={styles.index}>
			<div className={styles.title}>Страница в разработке..</div>
			<div className={styles.menu}>
				<Link to="/catalog">
					<h1 className={styles.item}>Каталог</h1>
				</Link>

				<Link to="/admin">
					<h1 className={styles.item}>Микроадминка</h1>
				</Link>
			</div>
		</div>
	);
};

export default Index;
