import styles from './HeaderTop.module.css';

const HeaderTop = () => {
	return (
		<div className={styles.top}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.item}>
						<div className={styles.title}>г.Кокчетав, ул. Ж. Ташенова 129Б</div>
						<div className={styles.text}>(Рынок Восточный)</div>
					</div>
					<div className={styles.item}>
						<a href="mailto:opt.sultan@mail.ru" className={styles.title}>
							opt.sultan@mail.ru
						</a>
						<div className={styles.text}>На связи в любое время</div>
					</div>
				</div>

				<ul className={styles.nav}>
					<li className={styles.navItem}>
						<a href="#" className={styles.navItemLink}>
							О компании
						</a>
					</li>
					<li className={styles.navItem}>
						<a href="#" className={styles.navItemLink}>
							Доставка и оплата
						</a>
					</li>
					<li className={styles.navItem}>
						<a href="#" className={styles.navItemLink}>
							Возврат
						</a>
					</li>
					<li className={styles.navItem}>
						<a href="#" className={styles.navItemLink}>
							Контакты
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HeaderTop;
