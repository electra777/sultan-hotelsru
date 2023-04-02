import productsSlice from './slices/productsSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		products: productsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
