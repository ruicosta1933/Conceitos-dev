import React from 'react';

export default function Header({ title }) { //Children é todo o conteúdo gerado dentro do componente
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}