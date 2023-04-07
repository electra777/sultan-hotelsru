import { Link } from 'react-router-dom';
import styles from './Index.module.css';
import cn from 'classnames';

const Index = () => {
	return (
		<div className={styles.index}>
			<Link to="/catalog">
				<h1 className={styles.title}>Каталог</h1>
			</Link>
		</div>
	);
};

export default Index;
