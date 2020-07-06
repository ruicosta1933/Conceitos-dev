import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './Components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  //useState retorna um array com 2 posições
  //1. Variável com o seu valor inicial
  //2. Função para atualizar esse valor

  function handleAddProject() {

    setProjects([...projects, `Novo Projeto ${Date.now()}`]); //Copio o array projects e adiciono o novo
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} alt=""/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}  {/* Dada project dentro de projects, vai retornar um li com cada projeto */}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;