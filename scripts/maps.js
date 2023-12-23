const iframe = document.getElementById("iframe");
const myApiKey = window.config.apiKey;

let googleMaps = 
        `<iframe width="600" height="450" style="border:0" Load="lazy" allowfullscreen 
        src="https://www.google.com/maps/embed/v1/place?key=${myApiKey}&q=48.824977,7.482915"></iframe>`

iframe.innerHTML = googleMaps;