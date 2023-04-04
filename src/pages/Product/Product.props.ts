export interface ProductProps {
	image: { url: string; alt: string };
	name: string;
	weight?: string;
	volume?: string;
	size?: string;
	things?: string;
	barcode: string;
	manufacturer: string;
	brand: string;
	description: string;
	price: string;
	inCart: boolean;
}
