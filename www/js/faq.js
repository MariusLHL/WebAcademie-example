var acc = document.getElementsByClassName("accordion");

for (const button of acc) {
    button.addEventListener('click', () => {
        let e = button.nextElementSibling
        let dis = e.style.display

        e.style.display = (dis == "block" ? "none" : "block")
    })
}