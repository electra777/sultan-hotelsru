import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button = ({ children, icon, handleClick, className }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.btn, className, {
				[styles.catalog]: icon === 'catalog',
				[styles.download]: icon === 'download',
				[styles.cart]: icon === 'cart',
				[styles.card]: icon === 'card',
				[styles.pencil]: icon === 'pencil',
				[styles.trash]: icon === 'trash',
				[styles.menu]: icon === 'menu',
				[styles.back]: icon === 'back',
			})}
			onClick={handleClick}>
			{children}
		</button>
	);
};

export default Button;
