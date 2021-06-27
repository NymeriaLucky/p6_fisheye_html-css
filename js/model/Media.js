class Media{
    constructor(photographJson)  {
        photographJson && Object.assign(this, photographJson ); 
    }

 displayList() { 
     // console.log('i : ' + i);
    var m = mediaData[i];

 // On parcours les entrées medias du JSON
 for (let i = 0; i < count; i++) {
    
// On récupère les attributs de chaque média
    m_id = m.id;
    m_p_id = m.photographerId; 

// Hack : à faire plus proprement ?
    if (typeof m.image == 'undefined' && typeof m.video != 'undefined') {
        // console.log("Le média est de type video");
        m_video = m.video;
        m_image = undefined;
        m_title =m_video.replace(".mp4", "");
    } else {
        // console.log("Le média est de type image");
        m_image = m.image;
        m_video = undefined;
        m_title = m_image.replace(".jpg", "");
    }
    m_title = m_title.replaceAll("_", " ");

    m_likes = m.likes;
    m_date = m.date;
    m_price = m.price;

// Un média peut avoir plusiseurs tags, ils sont stockés dans un tableau
 m_tags = [];
 for (tag of m.tags) {
     // console.log("m_tag: " + tag);
     m_tags.push(tag);
 }
// Création de l'instance media
media = new Media(m_id, m_p_id, m_image, m_video, m_title, m_tags, m_likes, m_date, m_price);
 // Ajout du média dans la liste des médias
 mediaList.push(media);
}
// Mise à jour de l'instance Medias avec la liste des média
medias.setMedias(mediaList);
// console.log(medias.constructor.name);

// Affichage des photographes de l'objet Photographers
console.log("List of medias from Medias object:");
for (property in medias) {
    console.log(medias[property]);
}
} 
/*pour mercredi/jeudi afficher les media
et jeudi/vendredi commencer les filtres
conseil : utiliser fetch api, template litterals( ok commencé)*/
