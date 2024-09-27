import styles from "./Aluno.module.css";

export function Aluno({ nome, status }) {
  return (
    <div>
      <div className={styles.content}>
        <p><strong>{nome} </strong></p>
        <p className={styles.status}>{status}</p>
      </div>
    </div>
  );
}
