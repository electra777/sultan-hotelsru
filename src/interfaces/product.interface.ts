export interface ProductCard {
	image: { url: string; alt: string };
	name: string;
	weight?: number;
	volume?: number;
	things?: number;
	barcode: string;
	manufacturer: string;
	brand: string;
	price: number;
	description: string;
	inCart: boolean;
}

export interface ProductCardModel {
	loading: boolean;
	hasErrors: boolean;
	data: ProductCard[];
}
