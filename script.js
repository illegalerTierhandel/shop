var preisTotal = 0;
var select = document.querySelector("select");
var alleProdukte = document.querySelectorAll("div.product");
var anzahlProdukte = alleProdukte.length;

select.addEventListener("click", triggerino);

function triggerino(){
    for(var i=0; i < anzahlProdukte; i++){
        if(select.value === "alle"){
            if(alleProdukte[i].classList[1] === "nein")
                alleProdukte[i].classList.toggle("nein");
        }
        for(var j=1; j<select.length; j++)
            toggleNein(select[j].value, i);
    }
}

function toggleNein(gattung, i){
    if(select.value === gattung){
        if((alleProdukte[i].getAttribute("gattung") === gattung && alleProdukte[i].classList[1] === "nein")
         || (alleProdukte[i].getAttribute("gattung") !== gattung && alleProdukte[i].classList[1] !== "nein"))
            alleProdukte[i].classList.toggle("nein");
    }
}