fetch("../../FishEyeData.json")
.then(result => result.json())
.then(data => {
    let photographerList = document.querySelector(".photographerList");
    for(let photograph of data.photographers) {
        let p = new Photograph(photograph); 
        photographerList.innerHTML += p.displayList();  
    }                     
})