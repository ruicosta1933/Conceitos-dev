const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];  //Funciona como "DB" de testes

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter(project => project.title.includes(title)) //Filtra os projetos da "DB" e verifica se o titulo inclui o titulo da query
    : projects; //Se não retorna os projetos

  return response.json(results);
});

app.post('/projects', (request, response) => {
  const {title, owner } = request.body;

  const project = { id: uuid(), title, owner }; //O body recebe um id (gerado automáticamente), um title e owner

  projects.push(project); //Puxa o projeto recem-criado para "projects"

  return response.json(project);  //Mostra em tela o projeto recem-criado
})

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;  //Recebe o id
  const { title, owner } = request.body; //Recebe no body um novo title e owner

  const projectIndex = projects.findIndex(project => project.id === id);  //Encontra a posição do id no vetor

  if (projectIndex < 0) { //Se o index for -1, significa que não encontrou o id introduzido
    return response.status(400).json({ error: 'Project not found. '});
  }

  const project = { //Variavel do projeto atualizado
    id,
    title,
    owner
  };

  projects[projectIndex] = project; //A variavel com o index selecionado, recebe o projeto atualizado

  return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);  //Encontra a posição do id no vetor

  if (projectIndex < 0) { //Se o index for -1, significa que não encontrou o id introduzido
    return response.status(400).json({ error: 'Project not found. '});
  }

  projects.splice(projectIndex, 1); //Método para remover indices de arrays

  return response.status(204).send();
})

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
} );