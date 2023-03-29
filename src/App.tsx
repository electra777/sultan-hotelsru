import Header from './components/Header/Header';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';

function App(): JSX.Element {
	return (
		<div className={styles.app}>
			<Header />

			<Footer />
		</div>
	);
}

export default App;
