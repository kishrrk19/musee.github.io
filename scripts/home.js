async function fetchMuseumList () {

    const response = await fetch("https://data.culturecommunication.gouv.fr/api/explore/v2.1/catalog/datasets/musees-de-france-base-museofile/records?limit=30")
    const json = await response.json();

    const firstMuseumName = json.results[0].nomoff;
    console.log(firstMuseumName);
    
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
        targetName.innerHTML += infoMuseum;
    }       
}
   
    window.addEventListener("load", (event) => {
        fetchMuseumList();
        console.log("Ici, load event listener.");
    });

const targetName = document.getElementById("targetName");

