import { useState, useEffect } from "react";
import "./App.css";
import logo from './assets/logo-cotefacil.png';

function App() {
  const [numero, setNumero] = useState(0);
  const [rodando, setRodando] = useState(false);

  function ContagemManual() {
    setNumero((n) => n + 1);
  }

  function toggleCronometro() {
    setRodando((r) => !r);
  }

  useEffect(() => {
    let intervalo: number | null = null;

    if (rodando) {
      intervalo = window.setInterval(() => {
        setNumero((n) => n + 1);
      }, 1000);
    }

    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [rodando]);

  return (
    <>
       <h1><img src={logo} alt="Logo Cotefácil" /></h1>
      <div className="container-principal">
        <p>Olá, clique no botão abaixo para começar a sua contagem.</p>

        <p>
          A contagem está no número:
          <span
            className={`numero-contador ${numero % 2 === 0 ? "ativo" : ""}`}
          >
            {numero}
          </span>
        </p>
        <div className="botao-container">
          <button onClick={ContagemManual} className="botao-primario">
            Clique aqui
          </button>
          <button onClick={toggleCronometro} className="botao-secundario">
            {rodando ? "Parar Cronômetro" : "Iniciar Cronômetro"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
