const theArtists = document.getElementsByClassName("name")

function randomRotation(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function scheef() {
    for (let myName of theArtists) {
        const randomDegree = randomRotation(-1.26, 1.25)
        myName.style.transform = "rotate(" + randomDegree + "deg)";
    }
}

scheef()