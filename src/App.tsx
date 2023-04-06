import Header from './components/Header/Header';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import mock from './mock/index.json';
import FormCheckout from './pages/FormCheckout/FormCheckout';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';

function App(): JSX.Element {
	return (
		<div className={styles.app}>
			<Header />
			<HeaderMobile />
			<div className={styles.container}>
				<Routes>
					<Route path="/cart" element={<Cart />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path={`/catalog/:barcode`} element={<Product />} />
					<Route path={`/checkout`} element={<FormCheckout />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
