const links = [...document.getElementById('verbs').getElementsByTagName('a')];
const verbs = [,
]
const werkwoorden = [...document.getElementById('verbs').querySelectorAll('span.nederlands')]



console.log(links)


const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

const shuffledVerbs = shuffle(verbs)

document.getElementById("links").innerText = shuffledVerbs;