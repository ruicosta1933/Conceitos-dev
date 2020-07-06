import React from 'react';

export default function Header({ title, children }) { //Children é todo o conteúdo gerado dentro do componente
  return (
    <header>
      <h1>{title}</h1>

      {children}
    </header>
  );
}