let button = document.querySelector('.button'); //creo delle variabili e grazie al DOM
let inputValue = document.querySelector('.inputValue');// più specifico document.querySelector
let input = document.querySelector(".inputValue");//assegno i valori delle classi in CSS e HTML

let main = document.querySelector('#name'); //Nome città cercata
let temp = document.querySelector('.temp');//temperatura attuale
let tempPerc = document.querySelector('.tempPerc');//temperatura percepita
let minTemp = document.querySelector('.minTemp');//temperatura minima
let maxTemp = document.querySelector('.maxTemp');//temperatura massima
let hum = document.querySelector('.hum');//temperatura umidità
let desc = document.querySelector('.desc');// descrizione tempo


button.addEventListener('click' , function() //aggiungo listener, quando avviene click vine creata la funzione
  {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=metric&appid=' + process.env.WEATHERAPIKEY + '&lang=it')
  //fetch recupera le informazioni dell API
   .then(respose => respose.json())// le rendo in formato.JSON
   .then(data => //se informazioni vengono recuperate correttamente, cioè non ci sono errori
      {
      let nameValue = data['name']; //recupero dall' insieme di informazioni recuperate solo quelle
      let tempValue = data['main']['temp'];// che mi interessano, specificando il percocorso
      let tempPercValue = data['main']['feels_like'];//per visualizzare tutte le info uso console.log
      let minTempValue = data['main']['temp_min'];//assegno i valori recuperati a delle variabili
      let maxTempValue = data['main']['temp_max'];
      let humValue = data['main']['humidity'];
      let descValue = data['weather'][0]['description'];

      main.innerHTML = nameValue.fontcolor("yellow");//trasferisci il valore delle variabili dichiarate qui sopra alle
      temp.innerHTML =tempValue + "°C gradi";//alle variabili dichiarate nelle prime righe del codice
      tempPerc.innerHTML = "Temperatura percepita - "+tempPercValue+"°C";//le stesse che sono collegate con i nomi classe
      minTemp.innerHTML = "Temperatura Minima - "+minTempValue+"°C";// in HTML
      maxTemp.innerHTML = "Temperatura Massima - "+maxTempValue+"°C";
      hum.innerHTML = "Umidità - "+humValue+"%";
      desc.innerHTML = descValue+"  ";
    }
  )

    .catch (error => //In caso di errore, tipo l'utente ha cercato una città che non esiste e il fetch non e riuscito
           {        //a recuperare i dati
             let nameValue = ("Ops, il nome inserito non corrisponde con nessuna città, prova di nuovo").fontcolor("red");
             //creo un a var e gli assegno un messaggio di errore, colorato di rosso
             main.innerHTML = nameValue; // assegno il valore della variabile a quella collegata a classe HTML

             temp.innerHTML =null; // assegno alle altre variabili il valore null
             tempPerc.innerHTML = null;//In questo modo, Se utente effettua una ricerca che da errore
             minTemp.innerHTML = null;//SUBITO DOPO aver cercat una citta esistente, i dati visualizzati dalla ricerca
             maxTemp.innerHTML = null;//precedente verranno cancellati
             hum.innerHTML =null;
             desc.innerHTML = null;

           }
          )
  }
)
//Informazioni aggiuntive su altre città
//prima città
let main1 = document.querySelector('#name1');
let temp1 = document.querySelector('.temp1');
let desc1 = document.querySelector('.desc1');

function citta()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+"Roma"+'&units=metric&appid=' + process.env.WEATHERAPIKEY + '&lang=it')
   .then(respose => respose.json())
   .then(data =>
     {
       let nameValue1 = data['name'];
       let tempValue1 = data['main']['temp'];
       let descValue1 = data['weather'][0]['description'];

       main1.innerHTML = nameValue1.fontcolor("yellow")+":";
       temp1.innerHTML =tempValue1 + "°C gradi";
       desc1.innerHTML = descValue1+"  ";
     }
   )
}
citta();
//Seconda città
let main2 = document.querySelector('#name2');
let temp2 = document.querySelector('.temp2');
let desc2 = document.querySelector('.desc2');

function citta2()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+"Milano"+'&units=metric&appid=' + process.env.WEATHERAPIKEY + '&lang=it')
   .then(respose => respose.json())
   .then(data =>
     {
       let nameValue2 = data['name'];
       let tempValue2 = data['main']['temp'];
       let descValue2 = data['weather'][0]['description'];

       main2.innerHTML = nameValue2.fontcolor("yellow")+":";
       temp2.innerHTML =tempValue2 + "°C gradi";
       desc2.innerHTML = descValue2+"  ";
     }
   )
}
citta2();

//terza città
let main3 = document.querySelector('#name3');
let temp3 = document.querySelector('.temp3');
let desc3 = document.querySelector('.desc3');

function citta3()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+"Napoli"+'&units=metric&appid=' + process.env.WEATHERAPIKEY + '&lang=it')
   .then(respose => respose.json())
   .then(data =>
     {
       let nameValue3 = data['name'];
       let tempValue3 = data['main']['temp'];
       let descValue3 = data['weather'][0]['description'];

       main3.innerHTML = nameValue3.fontcolor("yellow")+":";
       temp3.innerHTML =tempValue3 + "°C gradi";
       desc3.innerHTML = descValue3+"  ";
     }
   )
}

citta3();


input.addEventListener("keyup", function(event) //Se inserisco il nome di una citta e premo invio partirà la ricerca
  {
    if (event.keyCode === 13)
    {
      event.preventDefault();
      document.querySelector(".button").click();
    }
  }
);
