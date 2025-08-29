import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <h1>Pingos</h1>
        <p>Pequenas pílulas de um pequeno entendido da Palavra do Senhor</p>
        <p>Pingos da água da vida</p>
        {/* exibe últimos 10 pingos */}
    </div>
  );
}
