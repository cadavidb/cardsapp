import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroPage}>
        <div className={styles.heroSection}>
          <h1>¡Empiece a coleccionar ahora!</h1>
          <p>
          Compra y abre paquetes para recolectar nfts. Recoge comunes, raros y
          cartas ultra raras.
          </p>
          <button
            className={styles.heroButton}
            onClick={() => (window.location.href = "/shop")}
          >
            Comprar paquetes
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
