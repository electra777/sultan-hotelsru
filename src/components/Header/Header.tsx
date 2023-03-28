import styles from './Header.module.css';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderTop from './HeaderTop/HeaderTop';

const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderTop />
			<HeaderMain />
		</header>
	);
};

export default Header;
