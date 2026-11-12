
// Vetor para armazenar os materiais
let materiais = [];

const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoCategoria = document.getElementById("categoria");
const lista = document.getElementById("lista");

// Função para adicionar materiais
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = campoNome.value.trim();
    let categoria = campoCategoria.value.trim();

    if (nome === "" || categoria === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Adiciona o material ao vetor
    materiais.push({
        nome: nome,
        categoria: categoria
    });

    // Atualiza a lista na tela
    atualizarLista();

    // Limpa os campos
    campoNome.value = "";
    campoCategoria.value = "";
    campoNome.focus();
});

// Mostra os materiais cadastrados
function atualizarLista() {
    lista.innerHTML = "";

    materiais.forEach(function(material) {
        let item = document.createElement("li");

        item.textContent =
            material.nome + " - " + material.categoria;

        lista.appendChild(item);
    });
}
