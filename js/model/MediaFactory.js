class MediaFactory{
    constructor(mediaJson)  {
        if(mediaJson.hasOwnProperty("image")){
            return new Image(mediaJson);
        }else{
            return new Video(mediaJson);

        }

       
    }


}