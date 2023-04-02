export interface ProductCard {
	image: { url: string; alt: string };
	name: string;
	weight?: number;
	volume?: number;
	count?: number;
	barcode: string;
	manufacturer: string;
	brand: string;
	price: number;
}

export interface ProductCardModel {
	loading: boolean;
	hasErrors: boolean;
	data: ProductCard[];
}
