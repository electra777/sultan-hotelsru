import Header from './components/Header/Header';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

function App(): JSX.Element {
	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.container}>
				<Breadcrumbs />
			</div>
			<Footer />
		</div>
	);
}

export default App;
