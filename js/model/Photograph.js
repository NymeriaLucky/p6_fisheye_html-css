class Photograph{
    constructor(photographJson)  {
        photographJson && Object.assign(this, photographJson ); 
} 
displayList(){
    let tagsbox="";
    for(let tag of this.tags){
    tagsbox+= `<a class="tag" href="tag-${tag}" id="${tag}"><span>#${tag}</span></a>`   
    }
    return `<div class="photographer-profile">
     <a href="src/photographer-page.html?id=${this.id}"> 
       <section>
         <img src="src/image/FishEyes_Photos/Sample_Photos/Photographers_ID_Photos/${this.portrait}" id="${this.name}" alt="${this.name}">
         <h2>${this.name}</h2>
       </section>
          <h4>${this.city}, ${this.country}</h4>
          <blockquote>${this.tagline}</blockquote>
     </a>
          <span class="prix">${this.price}€/jour</span>
       <div class= "tagsbox">
          ${tagsbox}
       </div>
    </div>`;       
  }

  displayDetail(){
     let tagsbox="";
      for(let tag of this.tags){
        tagsbox+= `<a class="tag" href="tag-${tag}" id="${tag}"><span>#${tag}</span></a>`   
        }
       return `<div class="user-page" href="src/photographer-page.html?id=${this.id}">
         <div class ="user-page" id ="243">
             <h1>${this.name}</h1>
                 <button href="form-modal.html">Contactez-moi
                 </button>
                <br>
                <h4>${this.city}, ${this.country}</h4><br>
                 <blockquote>${this.tagline}</blockquote>
                    <div class= "tagsbox">
                    ${tagsbox}
                    </div>
                  <aside>
                    <img src="src/image/FishEyes_Photos/Sample_Photos/Photographers_ID_Photos/${this.portrait}" id="${this.name}" alt="${this.name}">
                  </aside>
          </div>`;     
  }
  /*pour afficher le photograph sur la page photographer-page*/
}
