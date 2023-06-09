import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children?: ReactNode;
	icon?: 'catalog' | 'download' | 'cart' | 'card' | 'pencil' | 'trash' | 'inCart' | 'menu' | 'back';
	handleClick?: (e: any) => void;
	className?: string;
}
