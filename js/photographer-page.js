let searchParam = (new Url(window.location)).urlSearchParams;
let id = searchParam.get("id");
fetch("../../FishEyeData.json")
.then(result => result.json())
.then(data => {
    let photograph = data.photographers.find(p => p.id == id);/*condition pour identifier le photographe*/
    let photographerElement = document.querySelector("#photographer-profile");
    photographerElement.innerHTML = photograph.displayDetail();
})