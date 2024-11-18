document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");

  // IDs dos elementos HTML para atualização
  const elementsToUpdate = {
    idioma: document.getElementById("idioma"),
    tituloCargo: document.getElementById("tituloCargo"),
    resumo: document.getElementById("resumo"),
    contatoTitulo: document.getElementById("contatoTitulo"),
    educacaoTitulo: document.getElementById("educacaoTitulo"),
    educacao1Titulo: document.getElementById("educacao1Titulo"),
    educacao1descricao: document.getElementById("educacao1descricao"),
    educacao2Titulo: document.getElementById("educacao2Titulo"),
    educacao2descricao: document.getElementById("educacao2descricao"),
    educacao3Titulo: document.getElementById("educacao3Titulo"),
    educacao3descricao: document.getElementById("educacao3descricao"),
    trabalhoTitulo: document.getElementById("trabalhoTitulo"),
    trabalho1Titulo: document.getElementById("trabalho1Titulo"),
    trabalho1descricao: document.getElementById("trabalho1descricao"),
    trabalho2Titulo: document.getElementById("trabalho2Titulo"),
    trabalho2descricao: document.getElementById("trabalho2descricao"),
    trabalho3Titulo: document.getElementById("trabalho3Titulo"),
    trabalho3descricao: document.getElementById("trabalho3descricao"),
    trabalho4Titulo: document.getElementById("trabalho4Titulo"),
    trabalho4descricao: document.getElementById("trabalho4descricao"),
    trabalho5Titulo: document.getElementById("trabalho5Titulo"),
    trabalho5descricao: document.getElementById("trabalho5descricao"),
    hobby: document.getElementById("hobby"),
    habilitadesTecnicas: document.getElementById("habilitadesTecnicas"),
    hobby1: document.getElementById("hobby1"),
    hobby2: document.getElementById("hobby2"),
    hobby3: document.getElementById("hobby3"),
    hobby4: document.getElementById("hobby4"),
    hobby5: document.getElementById("hobby5"),
    hobby6: document.getElementById("hobby6"),
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
