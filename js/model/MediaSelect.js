 // TODO : Utilser la fonction de tri par Popularité/Date/titre quand on sélectionne un élément de la dropdown des boutons
 
 class MediaSelect{
    constructor(photographJson)  {
        photographJson && Object.assign(this, photographJson ); 
    }
 document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});
// si besoin de plusieurs listes Déroulantes :

// document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
//     this.querySelector('.custom-select').classList.toggle('open');
// })
for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

// window.addEventListener('click', function (e) {
//     const select = document.querySelector('.custom-select')
//     if (!select.contains(e.target)) {
//         select.classList.remove('open');
//     }
// });

window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});
//autre exeple de liste ,déroulante dans le dossier liste déroulant, (choisir la plus pertinante)
/*___________________________________________________________________________________________________________________________________________________________________*/

 // RstAFaire : Utilser la fonction de tri par Popularité/Date/titre quand on sélectionne un élément 

import data from "./data";
import { createPhotographerElmt } from "./photographer-elmt"/*créer l'élémnent =>photographe

/**
 * DOM Elements
 */
const tagsElmt = document.getElementById("tags");
const photographersElmt = document.getElementById("photographers");

/**
 * Photographers data
 *
 * @const {Array}
 */
const photographers = data.photographers;

/**
 * Gérez toute la logique de basculement(toogle) pour afficher les bons photographes dans le DOM
 *
 * @param   {object}  evt  event
 *
 * @retourner {vide}
 */
const toggleFilter = (evt) => {
  evt.preventDefault();
  const selectedTag = getClassToToggle(evt.target);
  addTagParamToURL(selectedTag);
  toggleNavSelectedTags();
  const tagsInURL = getParamsFromURL("tag");
  const photographerToDisplay = getFilteredPhotographers(tagsInURL);

  displayFilteredPhotographers(photographerToDisplay);
  toggleEltSelectedTags();

  const tagsListElts = document.querySelectorAll(".ph-elt-tags");
  tagsListElts.forEach((elt) => elt.addEventListener("click", toggleFilter));
};

/* Obtenir la classe sur laquelle vous avez cliqué
 
  @param   {object} , cibler l'élément sur lequel on a cliqué
 
  à retourner un {string}, le tag cliqué
 */
const getClassToToggle = (target) => {
  let tagSelected = "";
  if (target.tagName === "A") tagSelected = target.textContent;
  if (target.tagName === "LI") tagSelected = target.lastChild.textContent;

  return tagSelected.toLowerCase(); /*retour en minuscule*/
};

/*Obtenir les paramètres de l'URL actuelle
 
  @param   {string}  param  le nom du paramètre à rechercher
 
  à retourner  {tableau:(array)}  et  la liste des paramètres inclus dans l'URL
 */
const getParamsFromURL = (param) => {
  const currentPath = window.location.href;
  const currentParams = new URL(currentPath).searchParams;

  return currentParams.getAll(param);
};

/*Ajouter une nouvelle balise à l'URL actuelle
 
  @param   {string}  tag  à ajouter  à ajouter à l'URL
 
  à retourner {vide}
 */
const addTagParamToURL = (tagToAdd) => {
  if (tagToAdd == "") return;

  let url = "index.html";
  let tagParams = getParamsFromURL("tag");

  if (tagParams.includes(tagToAdd))
    tagParams = tagParams.filter((tag) => tag !== tagToAdd);
  else tagParams.push(tagToAdd);

  tagParams.forEach((tag, index) => {
    if (index === 0) url += `?tag=${tag}`;
    else url += `&tag=${tag}`;
  });
  window.history.pushState({}, "", url);
};

/*Basculez la classe sélectionnée vers les balises de la barre de navigation principale
 
  à retourner {vide}
 */
const toggleNavSelectedTags = () => {
  const tagParams = getParamsFromURL("tag");
  tagsElt.childNodes.forEach((elt) => {
    if (tagParams.includes(elt.lastChild.textContent.toLowerCase()))
      elt.classList.add("selected");
    else elt.className = "";
  });
};

/*Créer le DOM avec les éléments photographe à afficher
 
 @param   {array}  photographerToDisplay  Liste des photographes à afficher dans la page HTML
 
  à retourner {vide}
 */
const displayFilteredPhotographers = (photographerToDisplay) => {
  photographersElmt.innerHTML = "";
  photographerToDisplay.forEach((photographer) =>
    photographersElmt.appendChild(createPhotographerElmt(photographer))
  );
};

/*
 Basculer la classe sélectionnée vers les balises sur les éléments des photographes
 
  à retouner {vide}
 */
const toggleEltSelectedTags = () => {
  const tagParams = getParamsFromURL("tag");
  const phTagsElts = document.querySelectorAll(".ph-elt-tags li");
  phTagsElts.forEach((elt) => {
    if (tagParams.includes(elt.lastChild.textContent.toLowerCase()))
      elt.classList.add("selected");
    else elt.className = "";
  });
};

/*Générer un tableau de photographes à afficher en fonction d'un tableau donné de tagss
 
 @param   {array}  tagsList : La liste des tags de filtrage
 
  à retourner le {[type]}
 */
const getFilteredPhotographers = (tagsList) => {
  let photographersToDisplay = photographers;
  photographersToDisplay = photographersToDisplay.filter((photographer) => {
    for (let i = 0; i < tagsList.length; i++) {
      if (!photographer.tags.includes(tagsList[i])) return false;
    }
    return true;
  });

  return photographersToDisplay;
};

/*
 Afficher les photographes filtrés en fonction des paramètres dans l'URL (création de page)
 
   à retourner {vide}
 */
const checkFilterOnPageCreation = () => {
  toggleNavSelectedTags();
  const tagsInURL = getParamsFromURL("tag");
  const photographerToDisplay = getFilteredPhotographers(tagsInURL);

  displayFilteredPhotographers(photographerToDisplay);
  toggleEltSelectedTags();

  const tagsListElts = document.querySelectorAll(".ph-elt-tags");
  tagsListElts.forEach((elt) => elt.addEventListener("click", toggleFilter));
};

export { getFilteredPhotographers, toggleFilter, checkFilterOnPageCreation };
