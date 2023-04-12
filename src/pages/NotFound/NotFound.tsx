import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
	return (
		<div className={styles.notFound}>
			<div className={styles.title}>404</div>
			<div className={styles.text}>Page Not Found</div>
		</div>
	);
};

export default NotFound;
