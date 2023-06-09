import { ProductCard, ProductCardModel } from '../../interfaces/product.interface';
import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: ProductCardModel = {
	loading: false,
	hasErrors: false,
	data: [],
	// image: { url: '', alt: '' },
	// name: '',
	// weight: 0,
	// volume: 0,
	// count: 0,
	// barcode: '',
	// manufacturer: '',
	// brand: '',
	// price: 0,
};

export const fetchData = createAsyncThunk(
	'productCard/fetchData',
	async (param: any, { rejectWithValue }) => {
		const [currentPage, key, orderBy, checkboxFilter, type] = param;

		let typeStr = type.replace(/ /g, '%20');

		let url = `https://6429dc92b11efeb7598f769f.mockapi.io/catalog?type=${typeStr}&page=${currentPage}&limit=9&sortBy=${key}&order=${orderBy}&manufacturer=${
			checkboxFilter.length > 1 ? `[${checkboxFilter}]` : checkboxFilter
		}`;

		console.log(url, 'url');

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error('Server Error!');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const productsSlice = createSlice({
	name: 'products',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, { payload }: { payload: ProductCard[] }) => {
			console.log(payload, 'payload');

			state.data = payload.map((item) => {
				return item;
			});
			state.loading = false;
			state.hasErrors = false;
		});
		builder.addCase(fetchData.rejected, (state) => {
			state.loading = false;
			state.hasErrors = true;
		});
	},
});

export const {} = productsSlice.actions;

export const productsCardSelector = (state: RootState) => state.products;

export default productsSlice.reducer;
