import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
	return (
		<div className={styles.index}>
			<Link to="/catalog">
				<div className={styles.title}>404</div>
				<div className={styles.text}>Page Not Found</div>
			</Link>
		</div>
	);
};

export default NotFound;
