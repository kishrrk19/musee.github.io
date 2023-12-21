async function fetchMuseumList () {

    const response = await fetch("https://data.culturecommunication.gouv.fr/api/explore/v2.1/catalog/datasets/musees-de-france-base-museofile/records?limit=30")
    const json = await response.json();
 
    //appel des resultats de l'API
    const firstMuseumName = json.results[0].nomoff;
    console.log(firstMuseumName);

   //creation tableau pour filtres de themes
   let globalThemesSet = new Set;
   let eachMuseumThemesTab = [];
    //tableau pour stocker les themes
    json.results.map((museum)=>{
        eachMuseumThemesTab = museum.dompal;
        for (let i = 0; i < eachMuseumThemesTab.length; i++){
            globalThemesSet.add(eachMuseumThemesTab[i]);
        }
    });
    console.log(globalThemesSet[0])
/*
     //Boucle qui affiche les themes du musee
     for(let  i = 0; i < globalThemesSet.length; i++){
        const theme = globalThemesSet[i];
       
        let filterMuseum = 
        `
        <option value="">--Faites votre choix--</option>
        <option value="${theme}">${theme}</option>
        `
        filter.innerHTML += filterMuseum;
    }      */
    
    //Boucle pour afficher les musees dans un article
    for(let  i = 0; i < json.results.length; i++){
        const museum = json.results[i];

        const name= museum.nomoff;
        const history = museum.hist;
        const country = museum.ville_m;
        const visit = museum.url_m;

        let infoMuseum = 
        `<article>
                <header class="name_and_star">
                <h2>${name}</h2>
                    <img src="./ressources/star.png" class="star"/>
                </header>
                <p>${history}</p>
                <p><b>Lieu:</b>${country}</p>
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

