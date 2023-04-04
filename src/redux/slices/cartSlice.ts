import { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartSliceState {
	totalPrice: number;
	items: CartItem[];
}

export type CartItem = {
	barcode: string;
	name: string;
	price: number;
	image: {
		url: string;
		alt: string;
	};
	count: number;
	description: string;
	weight: number;
	volume: number;
	things: number;
	inCart: boolean;
};

const initialState: CartSliceState = {
	totalPrice: 0,
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addItem(state, action: PayloadAction<any>) {
			const findItem = state.items.find((obj) => obj.barcode === action.payload.barcode);
			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
		},
		minusItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find((obj) => obj.barcode === action.payload);

			if (findItem && findItem.count > 1) {
				findItem.count--;
			}

			state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
		},
		removeItem(state, action: PayloadAction<any>) {
			state.items = state.items.filter((obj) => obj.barcode != action.payload);
		},
		clearItems(state, action: PayloadAction<any>) {
			state.items = [];
		},
	},
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart;

export default cartSlice.reducer;
