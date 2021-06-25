class Video{
    constructor(videoJson)  {
        videoJson && Object.assign(this, videoJson ); 
    }
    display(){ 
     return `<div class ="video">
      <video controls poster ="image/FishEyes_Photos/Sample_Photos/Mimi_Keel/${this.video}"  aria-label="${this.video}" width="650px">
        <source src="image/FishEyes_Photos/Sample_Photos/Mimi_Keel/${this.video}" alt= "${this.video}">
           <div class="caption">
                <div class="title">${this.generateTitle()}</div>
           </div> 
       </video>
              </div>`;
      
    }
    generateTitle(){
          let title = this.video .split(".")[0];
          return title.replaceAll("_"," ");
    }
}