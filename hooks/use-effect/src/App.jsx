import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  useEffect(() => {
    document.title = `Titulo: ${nome}`;
    console.log("Pagina renderizada");
  }, [nome])
  return (
    <div className="App">
      <h1>UseEffect</h1>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
       <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      <p>Nome: <span>{nome}</span></p>
      <p>Senha: <span>{senha}</span></p>
    </div>
  );
}

export default App;
