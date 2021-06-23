class Photograph{
    constructor(photographJson)  {
        photographJson && Object.assign(this, photographJson ); 
} 
displayList(){
    let tagsbox="";
    for(let tag of this.tags){
    tagsbox+= `<a class="tag" href="tag-${tag}" id="${tag}"><span>#${tag}</span></a>`   
    }
    return `<a class="photographer-profile" href="src/photographer-page.html?id=${this.id}">
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
    </a>`;       
  }

  displayDetail(){
       let photographer="";
       for(let photographer of this photographers){
       photographerList+= `<div class="photographer" href="photographer-${photographer}" id="${photographer}"
       ><span>#${photographer}</span></div>` 
       }
       return '<div class="user-page" href="src/photographer-page.html?id=${this.id}">
         <div class ="user-page" id ="243">
             <h1>${this.name}</h1>
                 <button href="form-modal.html">Contactez-moi
                 </button>
                <br>
                <h4>${this.city}, ${this.country}</h4><br>
                 <blockquote>{this.tagline}</blockquote>
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

essai :


var photographer= {
  id :243 ,
  photographerElement: "user-page",

   displayDetail:function({
     console.log(this.id + " " + this.photographerElement);
   })
}
photographer.displayDetails(); // 243 user-page


var myPhotographerDetails =  photographer.displayDetails.bind(photographer);///methode bind peut être réutilisée pour un photograph
myPhotographerDetails();//243 user-page