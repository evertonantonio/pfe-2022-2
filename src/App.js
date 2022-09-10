import React, { useState } from "react";
import "./App.css";

const valores = ['amor','sair','pular','cair','cabo','comer','dormi','negar','focar','brincar']

for (let i = 0; i < valores.length; i++) {
  const j = Math.floor(Math.random() * (i + 1));
  [valores[i], valores[j]] = [valores[j], valores[i]];
 }

 console.log(valores[0]);

 let valor = valores[0];

function getVaca(str) {
  let somaVacas = 0;
  
  for(let a = 0; a < str.length; a++) {
        for(let b = 0; b <= valor.length; b++) {
          if(str[a] === valor[b]){
              somaVacas += 1
          }
        }
  }
  return(
    somaVacas
  )
}

function getTouro(str) {
  let somaTouros = 0;

  for(let a = 0; a < str.length; a++) {
        for(let b = a; b <= a; b++) {
          if(str[a] === valor[b]){
              somaTouros += 1
          }
        }
  }
  return(
    somaTouros
  )

}


function App() {
  const [textos, setTextos] = useState([]);
  const [texto, setTexto] = useState("");
  const handleChangeTexto = (evt) => {
    setTexto(evt.target.value);
  };
  

  const handleClickBtInserir = () => {
    let textoTrim = texto.trim();
    if (textoTrim) {
      setTextos([...textos, textoTrim]);
    }
  };
  return (
    <div className="App">
      <h1>Jogo das senhas</h1>
      <p><strong>OBS:</strong>As letras não podem se repetir numa mesma palavra</p>
      <hr/>
      <p>
        <label htmlFor="texto">Digite um texto: </label>
        <input
          id="texto"
          type="text"
          value={texto}
          onChange={handleChangeTexto}
        />{" "}
        <button onClick={handleClickBtInserir}>Inserir</button>
      </p>
      {textos.length > 0 && (
        <table>
          <tr>
            <th >Tentativa</th>
            <th >Inserido</th>
            <th>Vaca</th>
            <th>Touro</th>
            <th>Falta</th>
          </tr>
          {textos.map((umTexto, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{umTexto}</td>
              <td>{getVaca(umTexto) - getTouro(umTexto)}</td>
              <td>{getTouro(umTexto) }</td>
              <td>{valor.length - getVaca(umTexto)} </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}

export default App;