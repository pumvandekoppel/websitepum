var lang = "eng"

const english = document.getElementsByClassName("en")
const nederlands = document.getElementsByClassName("nl")

if (localStorage.getItem("lang") == "nl") {
    lang = "nl"
    nl()

}

function nl() {
    for (let words of english) {
        words.style.display = "none"
    }
    for (let words of nederlands) {
        words.style.display = "inline-block"
    }
    lang = "nl"

    localStorage.setItem("lang", "nl")
    document.getElementById("nl").style.fontWeight = "bold"
    document.getElementById("en").style.fontWeight = "normal"
}

function en() {
    for (let words of nederlands) {
        words.style.display = "none"
    }
    for (let words of english) {
        words.style.display = "inline-block"
    }
    lang = "en"
    localStorage.setItem("lang", "en")
    document.getElementById("en").style.fontWeight = "bold"
    document.getElementById("nl").style.fontWeight = "normal"
}