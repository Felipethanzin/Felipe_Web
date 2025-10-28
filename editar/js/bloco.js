const endpointItens = urlServidor + "/itens";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const urlFinal = endpointItens;
const tituloElem = document.getElementById("tituloLista");
if (id) tituloElem.textContent = `📌 ${id}`;

const textAreaElements = document.getElementById("conteudo");

function salvar() {

  const data = {
    descricao: textAreaElements.innerText,
  };

  fetch(urlFinal, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Sucesso:", data);
    })
    .catch(error => {
      console.log("deu merda");
      console.error("Erro:", error);
    });

  
  // window.location.href = "../notas/listas.html";
}

function carregar() {
  const idItem = localStorage.getItem(`bloco_${id}`);
  if (idItem) textAreaElements.innerHTML = idItem;
}

carregar();
