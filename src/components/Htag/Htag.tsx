import styles from './Htag.module.css';
import { HtagProps } from './Htag.props';

const Htag = ({ children }: HtagProps) => {
	return <h1 className={styles.hTag}>{children}</h1>;
};

export default Htag;
