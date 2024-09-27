import { Aluno } from "./components/Aluno.jsx";

export function App() {
  return (
    <div>
      <h1>Sistema de Notas</h1>
      <Aluno nome="João da Silva" status="Aprovado" />
      <Aluno nome="Maria de José" status="Reprovado" />
    </div>
  );
}
