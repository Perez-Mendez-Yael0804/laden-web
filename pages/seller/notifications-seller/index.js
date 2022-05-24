import { SellerLayout } from "../../../components/layouts/SellerLayout";
import { NotificationSeller } from "./NotificationSeller";
import styles from "../../../styles/modules/SellerNotification.module.css"

const SellerNotification = () => {
	return (
		<SellerLayout
			title="Laden - Notificaciones"
			description="Página de notificaciones"
		>
			<div className={styles["container__page"]}>
				<main>
					<section className="container section">
						<h3 className={styles["section__title"]}>Tus Notificaciones</h3>
						<div className={styles["notification-container"]}>
							<NotificationSeller />
							<NotificationSeller />
							<NotificationSeller />
						</div>
					</section>
				</main>
			</div>
		</SellerLayout>
	);
};

export default SellerNotification;
