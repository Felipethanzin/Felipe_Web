

const params = new URLSearchParams(window.location.search);
const titulo = params.get('titulo');
const tituloElem = document.getElementById('tituloLista');
if (titulo) tituloElem.textContent = ` 📌  ${titulo}`;

const textAreaElements = document.getElementById('conteudo');

function salvar() {
  localStorage.setItem(`bloco_${titulo}`, textAreaElements.innerHTML);


const data = {
  descricao: 'valor',
  outroCampo: 'outroValor'
};

fetch(urlServidor, {
  method: 'PUT',  // Método PUT
  headers: {
    'Content-Type': 'application/json'  // Tipo de conteúdo JSON
  },
  body: JSON.stringify(data)  // Converte o objeto JavaScript em uma string JSON
})
  .then(response => response.json())  // Converte a resposta para JSON
  .then(data => {
    console.log('Sucesso:', data);  // Exibe os dados retornados
  })
  .catch(error => {
    console.error('Erro:', error);  // Exibe erros no console
  });


  alert("Anotação salva!");
  window.location.href = "../notas/listas.html"
  
}

function carregar() {
  const idIten = localStorage.getItem(`bloco_${titulo}`);
  if (idIten) textAreaElements.innerHTML = idIten;
  
}