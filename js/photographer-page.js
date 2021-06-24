let searchParam = (new Url(window.location)).urlSearchParams;
let id = searchParam.get("id");
fetch("../../FishEyeData.json")
.then(result => result.json())
.then(data => {
    let photograph = data.photographers.find(p => p.id == id);/*condition pour identifier le photographe*/
    let photographerElement = document.querySelector("#photograph-header");
    photographerElement.innerHTML = photograph.displayDetail();
})

/*
var urlSearchParams = URL.searchParams;
Si l'URL de votre page est https://example.com/?nom=Jonathan%20Smith&age=18
vous pouvez extraire les paramètres 'nom' et 'age' en utilisant:

let params = (new URL(document.location)).searchParams;
let name = params.get('nom'); // la chaine de caractère "Jonathan Smith".
let age = parseInt(params.get('age')); // le nombre 18*/