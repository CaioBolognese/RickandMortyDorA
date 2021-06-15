var image = document.querySelector(`.imagem1`)
var image2 = document.querySelector(`.imagem2`);
var image3 = document.querySelector(`.imagem3`); 
var image4 = document.querySelector(`.imagem4`);
const nome = document.querySelector(`#nome1`);
const nome2 = document.querySelector(`#nome2`);
const nome3 = document.querySelector(`#nome3`);
const nome4 = document.querySelector(`#nome4`);
const dora = document.querySelector(`#dora1`);
const dora2 = document.querySelector(`#dora2`);
const dora3 = document.querySelector(`#dora3`);
const dora4 = document.querySelector(`#dora4`);
const botao = document.querySelector(`button`);

const todosospersonagens = 671;

generateRandomNumber = () => {
    return Math.floor(Math.random () * todosospersonagens)
}

generateRandomNumber1 = () => {
    return Math.floor(Math.random () * todosospersonagens)
}

generateRandomNumber2 = () => {
    return Math.floor(Math.random () * todosospersonagens)
}

generateRandomNumber3 = () => {
    return Math.floor(Math.random () * todosospersonagens)
}

getCharacter = () => {
    const id = generateRandomNumber ();

return fetch (`https://rickandmortyapi.com/api/character/${id}`, {
    method: `GET`,
    headers: {
        Accept: `application/json`,
        "Content-Type": `application/json`
    }
}) .then((response) => response.json() ) .then((data) => { 
    image.src = data.image;
    nome.innerHTML = data.name;
    dora.innerHTML = data.status;
});
}

getCharacter2 = () => {
    const id2 = generateRandomNumber1 ();

return fetch (`https://rickandmortyapi.com/api/character/${id2}`, {
    method: `GET`,
    headers: {
        Accept: `application/json`,
        "Content-Type": `application/json`
    }
}) .then((response) => response.json() ) .then((data) => { 
    image2.src = data.image;
    nome2.innerHTML = data.name;
    dora2.innerHTML = data.status;
});
}

getCharacter3 = () => {
    const id3 = generateRandomNumber2 ();

return fetch (`https://rickandmortyapi.com/api/character/${id3}`, {
    method: `GET`,
    headers: {
        Accept: `application/json`,
        "Content-Type": `application/json`
    }
}) .then((response) => response.json() ) .then((data) => { 
    image3.src = data.image;
    nome3.innerHTML = data.name;
    dora3.innerHTML = data.status;
});
}

getCharacter4 = () => {
    const id4 = generateRandomNumber3 ();

return fetch (`https://rickandmortyapi.com/api/character/${id4}`, {
    method: `GET`,
    headers: {
        Accept: `application/json`,
        "Content-Type": `application/json`
    }
}) .then((response) => response.json() ) .then((data) => { 
    image4.src = data.image;
    nome4.innerHTML = data.name;
    dora4.innerHTML = data.status;
});
}


getRandomCharacters = () => {
    this.getCharacter();
    this.getCharacter2();
    this.getCharacter3();
    this.getCharacter4();
}

botao.onclick = getRandomCharacters


