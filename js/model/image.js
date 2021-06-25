class Image{
    constructor(imageJson)  {
        imageJson && Object.assign(this, imageJson ); 
    }
    display(){
return `<div class="thumb-imgfull">
        <div class="thumb-img">
          <img src="image/FishEyes_Photos/Sample_Photos/Mimi_Keel/${this.image}" id="${this.image}" alt="${this.generateTitle()}">
        </div>
        <a class = "texte">
          <div class="title">${this.generateTitle()}</div>
          <div class = "likes"><i class="fas fa-heart content"aria-hidden="true">${this.likes}</i>aria-label="likes"</div>
        </a>
   </div>`;
      
    }
    generateTitle(){
          let title = this.image .split(".")[0];
          return title.replaceAll("_"," ");
    }
}