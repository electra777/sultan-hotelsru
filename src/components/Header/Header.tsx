import styles from './Header.module.css';
import HeaderTop from './HeaderTop/HeaderTop';

const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderTop />
		</header>
	);
};

export default Header;
