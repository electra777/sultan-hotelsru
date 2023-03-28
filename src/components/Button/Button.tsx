import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button = ({ children, icon }: ButtonProps): JSX.Element => {
	return (
		<a
			href="#"
			className={cn(styles.btn, {
				[styles.catalog]: icon === 'catalog',
				[styles.download]: icon === 'download',
				[styles.cart]: icon === 'cart',
				[styles.card]: icon === 'card',
			})}>
			{children}
		</a>
	);
};

export default Button;
