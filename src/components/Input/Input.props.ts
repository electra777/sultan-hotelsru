import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

export interface InputProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	variant?: 'search' | 'email';
	placeholder?: string;
	id?: string;
}
