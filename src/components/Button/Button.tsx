import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button = ({ children, icon }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.btn, {
				[styles.catalog]: icon === 'catalog',
				[styles.download]: icon === 'download',
				[styles.cart]: icon === 'cart',
				[styles.card]: icon === 'card',
				[styles.pencil]: icon === 'pencil',
			})}>
			{children}
		</button>
	);
};

export default Button;
