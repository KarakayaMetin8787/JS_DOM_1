function remover (elt) {
    farbeAuswahlen.item(elt).remove();
};

button.addEventListener("click", () => {
    remover(farbeAuswahlen.selectedIndex);
});