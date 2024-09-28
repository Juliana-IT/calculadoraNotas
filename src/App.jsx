import { Aluno } from "./components/Aluno.jsx";
import { Formulario } from "./components/Formulario.jsx";
import "./global.css";

export function App() {
  return (
    <div>
      <h1>Sistema de Notas</h1>
      <Formulario />
      <div className="cards">
        <Aluno nome="João da Silva" status="Aprovado" />
        <Aluno nome="Maria de José" status="Reprovado" />
      </div>
    </div>
  );
}
