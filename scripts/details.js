//Theme = targetTheme
async function fetchThemes(){
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name"); //await pour attendre que la promesse soit résolue
    const json = await response.json();
    //json[0] == {"name": {"common" : "Christmas island"}}
    const firstCountryName = json[0].name.common;
    console.log(firstCountryName);
    //
    for(let  i = 0; i < json.length; i++){
        const country = json[i].name.common;
        const li = `<li>${country}</li>`; // ! pas des guillemets simples
        target.innerHTML += li;
        //console.log(li);
    }
}

button.addEventListener("click", (event) => {
    fetchCountries();
});

/*console.table(countries); affiche le tableau dans la console*/
const target = document.getElementById("target");



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

// Nom = targetName
// Adresse = targetAddress
// Tel = targetPhone
// atout = targetSkill
// history = targetHistory
// visit = targetVisit
