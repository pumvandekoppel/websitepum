var focused = true

const aside = document.getElementsByTagName("aside")[0]
const images = document.getElementsByTagName("img")
const main = document.getElementsByTagName("main")[0]

function unfocus() {
    if (focused == true) {
        aside.style.left = "3vw"
        focused = false
        }
    else {
        aside.style.left = "-94vw"
        focused = true
    }
}