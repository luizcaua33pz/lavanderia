// main.js - Código corrigido e simplificado

// Atualizar ano automaticamente no rodapé
const anoElement = document.getElementById("ano");
if (anoElement) {
    anoElement.textContent = new Date().getFullYear();
}

// Alternar tema claro/escuro
const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", () => {
    if (document.body.getAttribute("data-tema") === "escuro") {
        document.body.removeAttribute("data-tema");
    } else {
        document.body.setAttribute("data-tema", "escuro");
    }
});