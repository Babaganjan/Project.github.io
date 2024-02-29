function changeButtonText() {
    let button = document.getElementById("contacts__btn");
    let windowWiidth = window.innerWidth;

    button.innerHTML = (windowWiidth > 767) ?
    "Заказать обратный званок" : "Заказать";
}

window.addEventListener("resize", changeButtonText);
changeButtonText();