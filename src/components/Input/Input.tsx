import cn from 'classnames';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

const Input = ({ variant, placeholder, id }: InputProps): JSX.Element => {
	return (
		<div
			className={cn(styles.inputWrapper, {
				[styles.search]: variant === 'search',
				[styles.email]: variant === 'email',
			})}>
			<input type="text" id={id} className={styles.input} placeholder={placeholder} />
		</div>
	);
};

export default Input;
