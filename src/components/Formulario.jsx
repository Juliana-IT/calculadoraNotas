import styles from "./Formulario.module.css";

export function Formulario() {
  return (
    <form className={styles.formulario}>
      <input name="nome" placeholder="Nome do aluno" required />
      <input name="nota1" placeholder="Nota 1" required />
      <input name="nota2" placeholder="Nota 2" required />
      <footer>
        <button type="submit">Calcular</button>
      </footer>
    </form>
  );
}
