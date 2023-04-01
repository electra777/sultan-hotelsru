import styles from './Product.module.css';
import biomio from '../../assets/images/biomio.png';
import Button from '../Button/Button';

const Product = () => {
	return (
		<div className={styles.product}>
			<div className={styles.imgWrapper}>
				<img src={biomio} alt="" className={styles.img} />
			</div>
			<div className={styles.colRight}>
				<div className={styles.inStock}>В наличии</div>
				<div className={styles.title}>
					BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот
				</div>
				<div className={styles.iconWrapper}>
					<svg
						width="9"
						height="15"
						viewBox="0 0 9 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={styles.iconBottle}>
						<g opacity="0.23" clip-path="url(#clip0_56_1553)">
							<path
								d="M8.1 14.0625C8.05312 14.3164 7.95234 14.5361 7.79766 14.7217C7.64297 14.9072 7.44375 15 7.2 15H1.8C1.55625 15 1.35938 14.9097 1.20938 14.729C1.05937 14.5483 0.95625 14.3262 0.9 14.0625L0 8.4375V6.5625C0 6.2793 0.0914062 6.04492 0.274219 5.85938C0.457031 5.67383 0.726562 5.49072 1.08281 5.31006C1.43906 5.12939 1.65937 5.00977 1.74375 4.95117C2.11875 4.67773 2.45625 4.35547 2.75625 3.98438C3.05625 3.61328 3.27656 3.22266 3.41719 2.8125H3.15C3.02812 2.8125 2.92266 2.76611 2.83359 2.67334C2.74453 2.58057 2.7 2.4707 2.7 2.34375V0.46875C2.7 0.341797 2.74453 0.231934 2.83359 0.13916C2.92266 0.0463867 3.02812 0 3.15 0H5.85C5.97187 0 6.07734 0.0463867 6.16641 0.13916C6.25547 0.231934 6.3 0.341797 6.3 0.46875V2.34375C6.3 2.4707 6.25547 2.58057 6.16641 2.67334C6.07734 2.76611 5.97187 2.8125 5.85 2.8125H5.58281C5.86406 3.60352 6.38437 4.28711 7.14375 4.86328C7.24687 4.95117 7.48125 5.08789 7.84687 5.27344C8.2125 5.45898 8.49609 5.64941 8.69766 5.84473C8.89922 6.04004 9 6.2793 9 6.5625V8.4375L8.1 14.0625Z"
								fill="#3F4E65"
							/>
						</g>
						<defs>
							<clipPath id="clip0_56_1553">
								<rect width="9" height="15" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<svg
						width="20"
						height="16"
						viewBox="0 0 20 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={styles.iconBox}>
						<g opacity="0.23" clip-path="url(#clip0_56_1572)">
							<path
								d="M13.3035 7.99994C12.7753 7.99994 12.2785 7.71869 12.0097 7.26869L10.0003 3.93743L7.9941 7.26869C7.72222 7.72181 7.22535 8.00306 6.69722 8.00306C6.5566 8.00306 6.41597 7.98431 6.2816 7.94369L2.00035 6.71868V12.2812C2.00035 12.7406 2.31285 13.1406 2.7566 13.2499L9.51285 14.9406C9.8316 15.0187 10.166 15.0187 10.4816 14.9406L17.2441 13.2499C17.6878 13.1374 18.0003 12.7374 18.0003 12.2812V6.71868L13.7191 7.94056C13.5847 7.98119 13.4441 7.99994 13.3035 7.99994ZM19.9472 4.49369L18.3378 1.28118C18.241 1.08743 18.0316 0.974934 17.816 1.00306L10.0003 1.99993L12.866 6.75306C12.9847 6.94993 13.2222 7.04368 13.4441 6.98118L19.6285 5.21556C19.9378 5.12493 20.0878 4.78118 19.9472 4.49369ZM1.66285 1.28118L0.0534711 4.49369C-0.0902789 4.78118 0.0628461 5.12493 0.369096 5.21243L6.55347 6.97806C6.77535 7.04056 7.01285 6.94681 7.1316 6.74993L10.0003 1.99993L2.1816 1.00306C1.96597 0.978059 1.75972 1.08743 1.66285 1.28118Z"
								fill="#3F4E65"
							/>
						</g>
						<defs>
							<clipPath id="clip0_56_1572">
								<rect width="20" height="16" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<div className={styles.size}>
						90
						<span className={styles.sizeValue}>г</span>
					</div>
				</div>

				<div className={styles.priceWrapper}>
					<div className={styles.price}>
						48,76
						<span className={styles.currency}>₸</span>
					</div>
					<div className={styles.quantityWrapper}>
						<span className={styles.minus}>-</span>
						<span className={styles.quantity}>1</span>
						<span className={styles.plus}>+</span>
					</div>
					<Button icon="cart">В корзину</Button>
				</div>

				<div className={styles.info}>
					<div className={styles.share}>
						<svg
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4.00004 13.5C4.87469 13.4974 5.71626 13.1653 6.35704 12.57L12.617 16.147C12.4073 16.9666 12.4998 17.8343 12.8775 18.5913C13.2552 19.3483 13.893 19.9439 14.674 20.2692C15.455 20.5944 16.327 20.6274 17.1304 20.3623C17.9338 20.0971 18.6148 19.5515 19.0488 18.8252C19.4827 18.099 19.6406 17.2408 19.4935 16.4076C19.3464 15.5745 18.9042 14.8222 18.2478 14.2885C17.5914 13.7548 16.7647 13.4753 15.919 13.5013C15.0734 13.5273 14.2655 13.857 13.643 14.43L7.38304 10.853C7.44904 10.603 7.48504 10.344 7.49104 10.085L13.641 6.56996C14.2332 7.10874 14.9927 7.42747 15.792 7.47268C16.5913 7.51789 17.3818 7.28684 18.031 6.81828C18.6802 6.34972 19.1484 5.67217 19.3572 4.89929C19.5661 4.1264 19.5027 3.30522 19.1779 2.5735C18.853 1.84178 18.2864 1.24404 17.5731 0.88056C16.8597 0.517083 16.0431 0.409982 15.2602 0.577226C14.4772 0.744469 13.7756 1.17588 13.2731 1.79909C12.7705 2.42229 12.4976 3.19937 12.5 3.99996C12.504 4.28796 12.543 4.57497 12.617 4.85296L6.93304 8.09997C6.60341 7.59003 6.1468 7.17461 5.60805 6.89454C5.06931 6.61446 4.46697 6.47936 3.86021 6.50251C3.25346 6.52566 2.66316 6.70627 2.14732 7.02658C1.63148 7.34689 1.20785 7.79589 0.918041 8.32946C0.628232 8.86303 0.48222 9.46282 0.494351 10.0699C0.506482 10.677 0.676338 11.2704 0.98723 11.792C1.29812 12.3136 1.73936 12.7453 2.26758 13.0447C2.7958 13.3442 3.39284 13.5011 4.00004 13.5Z"
								fill="#FFC85E"
							/>
						</svg>
					</div>
					<div className={styles.delivery}>
						При покупке от <strong>10 000 ₸</strong> бесплатная доставка по Кокчетаву и области
					</div>
					<div className={styles.priceList}>Прайс-лист</div>
				</div>

				<div className={styles.featureShort}>
					<div className={styles.manufacturer}>
						Производитель:
						<span className={styles.value}>BioMio</span>
					</div>
					<div className={styles.brand}>
						Бренд:
						<span className={styles.value}>BioMio</span>
					</div>
					<div className={styles.vendorCode}>
						Артикул:
						<span className={styles.value}>460404</span>
					</div>
					<div className={styles.barcode}>
						Штрихкод:
						<span className={styles.value}>4604049097548</span>
					</div>
				</div>

				<div className={styles.descriptionWrapper}>
					<div className={styles.descriptionTitle}>Описание</div>
					<div className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo,
						vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum
						duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris
						venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
					</div>
				</div>

				<div className={styles.featureFull}>
					<div className={styles.featureTitle}>Характеристики</div>
					<div className={styles.featureFullWrapper}>
						<div className={styles.destination}>
							Назначение:
							<span className={styles.value}>BioMio</span>
						</div>
						<div className={styles.type}>
							Тип:
							<span className={styles.value}>BioMio</span>
						</div>
						<div className={styles.manufacturer}>
							Производитель:
							<span className={styles.value}>BioMio</span>
						</div>
						<div className={styles.brand}>
							Бренд:
							<span className={styles.value}>BioMio</span>
						</div>
						<div className={styles.vendorCode}>
							Артикул:
							<span className={styles.value}>460404</span>
						</div>
						<div className={styles.barcode}>
							Штрихкод:
							<span className={styles.value}>4604049097548</span>
						</div>
						<div className={styles.weight}>
							Вес:
							<span className={styles.value}>
								90 <span className={styles.weightValue}>г</span>
							</span>
						</div>
						<div className={styles.volume}>
							Объем:
							<span className={styles.value}>
								90
								<span className={styles.volumeValue}>г</span>
							</span>
						</div>
						<div className={styles.countInBox}>
							Кол-во в коробке:
							<span className={styles.value}>
								90
								<span className={styles.volumeValue}>г</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
