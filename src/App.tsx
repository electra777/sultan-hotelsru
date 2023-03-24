import Header from './components/Header/Header';

import styles from './App.module.css';

function App(): JSX.Element {
	return (
		<div className={styles.app}>
			<Header />
		</div>
	);
}

export default App;
