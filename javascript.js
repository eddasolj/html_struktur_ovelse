const article1 = document.querySelector("article");
console.log(article1);

const p_about_dog = document.querySelector(".trying_console");
console.log(p_about_dog);

const main = document.querySelector("main");
console.log(main);

const footer = document.querySelector("footer");
console.log(footer);

const toptitle = document.querySelector("h1"); /// to change text ////
console.log(toptitle);
toptitle.textContent = "changed title";

const test = document.querySelector("p"); /// to change element in i element ////
console.log(test);
test.innerHTML = "<h4>nytekst</h4>";

const pic = document.querySelector("img"); /// change image ////
pic.src = "https://picsum.photos/id/17/200/300/";
pic.alt = "dette er en alt tekst, so here I can change the text";
