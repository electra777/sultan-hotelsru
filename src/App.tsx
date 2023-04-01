import Header from './components/Header/Header';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import ProductCard from './components/ProductCard/ProductCard';
import Product from './components/Product/Product';
import FormCheckout from './components/FormCheckout/FormCheckout';
import Cart from './components/Cart/Cart';

function App(): JSX.Element {
	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.container}>
				<Breadcrumbs />

				<ProductCard />
				<Product />

				<FormCheckout />
				<Cart />
			</div>
			<Footer />
		</div>
	);
}

export default App;
