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


// Nom = targetName
// Adresse = targetAddress
// Tel = targetPhone
// atout = targetSkill
// history = targetHistory
// visit = targetVisit
