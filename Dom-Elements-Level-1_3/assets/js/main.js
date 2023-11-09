document.body.querySelector(".unten").firstElementChild.addEventListener("click", () => {
    document.body.querySelector("h1").textContent = `${document.body.querySelector("#myList").firstElementChild.textContent}`
});

document.body.querySelector(".unten").firstElementChild.nextElementSibling.nextElementSibling.addEventListener("click", () => {
    document.body.querySelector("h1").textContent = `${document.body.querySelector("#myList").lastElementChild.textContent}`
});

document.body.querySelector(".unten").lastElementChild.previousElementSibling.previousElementSibling.addEventListener("click", () => {
    document.body.querySelector("h1").textContent = `${document.body.querySelector("#myList").firstElementChild.nextElementSibling.textContent}`
});

document.body.querySelector(".unten").lastElementChild.addEventListener("click", () => {
    document.body.querySelector("h1").textContent = `${document.body.querySelector("#myList").lastElementChild.previousElementSibling.textContent}`
});