let globalThemesSet = new Set;
let eachMuseumThemesTab = [];
let museumList=  [];

async function fetchMuseumList () {

    const response = await fetch("https://data.culturecommunication.gouv.fr/api/explore/v2.1/catalog/datasets/musees-de-france-base-museofile/records?limit=30")
    const json = await response.json();
    museumList = json.results
    //appel des resultats de l'API
    const firstMuseumName = museumList[0].nomoff;
    console.log(firstMuseumName);


    //tableau pour stocker les themes
    museumList.map((museum)=>{
        eachMuseumThemesTab = museum.dompal;
        for (let i = 0; i < eachMuseumThemesTab.length; i++){
            globalThemesSet.add(eachMuseumThemesTab[i]);
        }
    });
    console.log("globalThemesSet: ", globalThemesSet)

     //Boucle qui affiche les themes des musées dans la liste déroulante
    for(let theme of globalThemesSet.values()){
        console.log("theme: ", theme)

        let filterMuseum = 
        `
        <option value="${theme}">${theme}</option>
        `
        filter.innerHTML += filterMuseum;
    }      
    
    //Boucle pour afficher les musees dans un article
    for(let  i = 0; i < museumList.length; i++){
        const museum = museumList[i];

        const name= museum.nomoff;
        const history = museum.hist;
        const city = museum.ville_m;
        const visit = museum.url_m;

        let infoMuseum = 
        `<article>
                <header class="name_and_star">
                <h2>${name}</h2>
                    <img src="./ressources/star.png" class="star"/>
                </header>
                <p>${history}</p>
                <p><b>Lieu:</b>${city}</p>
                <a href="http://${visit}"><button class="visit"> Nous Visiter</button></a> 
            </article>
            <hr/>`
            targetMuseum.innerHTML += infoMuseum;
    }   
}
   
// fonction qui gère la liste déroulante
function handleSelectChange(event) {
    const selectedElement = event.target.value;
    console.log(selectedElement)
    let filteredTab = []
    museumList.map((museum)=>{
        eachMuseumThemesTab = museum.dompal;
        for (let i = 0; i < eachMuseumThemesTab.length; i++){
            if (eachMuseumThemesTab.includes(selectedElement)) {
                filteredTab.push(museum)
                break;
            }
        }}
    )
    
    targetMuseum.innerHTML = "";
    //Boucle pour afficher les musées filtrés par thèmes 
    for(let  i = 0; i < filteredTab.length; i++){
        const museum = filteredTab[i];

        const name= museum.nomoff;
        const history = museum.hist;
        const city = museum.ville_m;
        const visit = museum.url_m;

        let infoMuseum = 
        `<article>
                <header class="name_and_star">
                <h2>${name}</h2>
                    <img src="./ressources/star.png" class="star"/>
                </header>
                <p>${history}</p>
                <p><b>Lieu:</b>${city}</p>
                <a href="http://${visit}"><button class="visit"> Visiter le site</button></a> 
            </article>
            <hr/>`
            targetMuseum.innerHTML += infoMuseum;
    }   
    console.log('filteredTab:' , filteredTab)
}

//fonction de la barre de recherche
function handleSearchClick() {
   const search_input = document.getElementById('search_input');
    console.log(search_input.value)
    let filteredTab = []
    museumList.map((museum)=>{
        if (museum.nomoff.toLowerCase().includes(search_input.value.toLowerCase())) {
            filteredTab.push(museum)
        } 
    })
    console.log('filteredTab2:' , filteredTab)

    targetMuseum.innerHTML = "";

    for(let  i = 0; i < filteredTab.length; i++){
        const museum = filteredTab[i];

        const name= museum.nomoff;
        const history = museum.hist;
        const city = museum.ville_m;
        const visit = museum.url_m;

        let infoMuseum = 
        `<article>
                <header class="name_and_star">
                <h2>${name}</h2>
                    <img src="./ressources/star.png" class="star"/>
                </header>
                <p>${history}</p>
                <p><b>Lieu:</b>${city}</p>
                <a href="http://${visit}"><button class="visit"> Visiter le site</button></a> 
            </article>
            <hr/>`
            targetMuseum.innerHTML += infoMuseum;
    } 
}


window.addEventListener("load", (event) => {
    fetchMuseumList();
    console.log("Ici, load event listener.");
});

const targetMuseum = document.getElementById("targetMuseum");
const filter = document.getElementById("filter");

