# PrevisioniDelTempo
Ciao, questo è il mio secondo progetto per Start2Impact, il progetto della guida
di javascript.

Questa appliczione utilizza le informazioni dalle API di OpenWeatherMap.
Prima di utilizzarla quindi e necessario registrarsi su https://openweathermap.org/
e richiedere la API key.

prima di aprire la pagina HTML (all'interno della cartella dist) bisogna eseguire
i seguenti passi

1)creare un file .env

2)copiare all'interno del file .env il contenuto del file .env.example

3)alla variabile WEATHERAPIKEY= assegnare la key personale di OpenWeatherMap

4)nel comand prompt di node.js digitare  npm install per installare Webpack e dotenv-webpack

5)nel comand prompt di node.js digitare  npm run built

WARNING:
se per caso "Previsioni del tempo" non dovesse funzionare, restituendo error401,
la causa puo essere che la vostra key non sia ancora stata attivata,  
consultare https://openweathermap.org/faq per ulteriori informazioni
