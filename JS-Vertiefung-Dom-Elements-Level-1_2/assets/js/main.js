document.body.querySelector("button").addEventListener("click", () => {
    document.body.querySelectorAll(".example").forEach((elt) => {
        elt.style.backgroundColor = "red";

    })
});