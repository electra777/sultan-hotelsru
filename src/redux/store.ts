import cartSlice from './slices/cartSlice';
import productsSlice from './slices/productsSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		products: productsSlice,
		cart: cartSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
