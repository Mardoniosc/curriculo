document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");

  // IDs dos elementos HTML para atualização
  const elementsToUpdate = {
    idioma: document.getElementById("idioma"),
    "titulo-cargo": document.getElementById("titulo-cargo"),
    resumo: document.getElementById("resumo"),
    "contato-titulo": document.getElementById("contato-titulo"),
    "educacao-titulo": document.getElementById("educacao-titulo"),
    "educacao-1-titulo": document.getElementById("educacao-1-titulo"),
    "educacao-1-descricao": document.getElementById("educacao-1-descricao"),
    "educacao-2-titulo": document.getElementById("educacao-2-titulo"),
    "educacao-2-descricao": document.getElementById("educacao-2-descricao"),
    "educacao-3-titulo": document.getElementById("educacao-3-titulo"),
    "educacao-3-descricao": document.getElementById("educacao-3-descricao"),
    "trabalho-titulo": document.getElementById("trabalho-titulo"),
    "trabalho-1-titulo": document.getElementById("trabalho-1-titulo"),
    "trabalho-1-descricao": document.getElementById("trabalho-1-descricao"),
    "trabalho-2-titulo": document.getElementById("trabalho-2-titulo"),
    "trabalho-2-descricao": document.getElementById("trabalho-2-descricao"),
    "trabalho-3-titulo": document.getElementById("trabalho-3-titulo"),
    "trabalho-3-descricao": document.getElementById("trabalho-3-descricao"),
    "trabalho-4-titulo": document.getElementById("trabalho-4-titulo"),
    "trabalho-4-descricao": document.getElementById("trabalho-4-descricao"),
    "trabalho-5-titulo": document.getElementById("trabalho-5-titulo"),
    "trabalho-5-descricao": document.getElementById("trabalho-5-descricao"),
    hobby: document.getElementById("hobby"),
    habilitadesTecnicas: document.getElementById("habilitadesTecnicas"),
    "hobby-1": document.getElementById("hobby-1"),
    "hobby-2": document.getElementById("hobby-2"),
    "hobby-3": document.getElementById("hobby-3"),
    "hobby-4": document.getElementById("hobby-4"),
    "hobby-5": document.getElementById("hobby-5"),
    "hobby-6": document.getElementById("hobby-6"),
  };

  // Função para carregar e aplicar o idioma
  function loadLanguage(language) {
    fetch(`assets/${language}.json`)
      .then((response) => response.json())
      .then((data) => {
        Object.keys(elementsToUpdate).forEach((key) => {
          const element = elementsToUpdate[key];
          if (element) {
            element.innerHTML = data[key] || ""; // Atualiza com o valor do JSON
          }
        });
      })
      .catch((error) =>
        console.error("Erro ao carregar o arquivo de idioma:", error)
      );
  }

  let currentLanguage = "pt";

  loadLanguage(currentLanguage);

  // Alterna o idioma ao clicar no botão
  toggleButton.addEventListener("click", function () {
    currentLanguage = currentLanguage === "pt" ? "en" : "pt";
    loadLanguage(currentLanguage);
  });
});
