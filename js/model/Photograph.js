class Photograph{
    constructor(photographJson)  {
        photographJson && Object.assign(this, photographJson ); 
} 
displayList(){
    let tagsbox="";
    for(let tag of this.tags){
    tagsbox+= `<a class="tag" href= "tag-${tag}" id="${tag}"><span>#${tag}</span></a>`   
    }
    return `<div class="photographer-profile">
     <article> 
       <section>
         <img src="src/image/FishEyes_Photos/Sample_Photos/Photographers_ID_Photos/${this.portrait}" id="${this.name}" alt="${this.name}">
         <h2>${this.name}</h2>
       </section>
          <p>${this.city}, ${this.country}</p>
          <blockquote>${this.tagline}</blockquote>
     </article>
          <span class="prix">${this.price}€/jour</span>
       <div class= "tagsbox">
          ${tagsbox}
       </div>
    </div>`;       
  }
}