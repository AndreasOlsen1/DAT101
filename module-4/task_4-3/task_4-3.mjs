"use strict";





const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

// Task 1: Rectangle

function cmbTask1CalculateClick() {
  const width = Number(document.getElementById("txtRectWidth").value);
  const height = Number(document.getElementById("txtRectHeight").value);
  //cmbTask1CalculateClick() er navnet på en funksjon vi laget uten noen parametere. 
  //document.getElementById("txtRectWidth").value. document da jobber vi med det gjeldene html
  //dokument som denne javascriptfilen er koblet til. Så getElementById("txtRectHeight") betyr 
  // at vi at vi skal hente et element fra denne siden med id = txtRectHeight. som er
  //<input type="number" id="txtRectWidth" value="0" style="width:4em">. Dette er det vi henter
  //men vi henter spesifikt innholdet fra value, som er null i starten men kan ha endret seg når en bruker har
  //skrevet inn egne tall. Så det er bare tallet skrevet inn her vi henter, denne
  //er tekst som vi ved å bruke Number endrer til tall. Dette tallet legges inn i variabelen
  //width. vi lager også en annen variabel height på samme måte bare med en annen id som sikter 
  // til boksen der vi skriver inn tallet for høyde. 


  const circumference = 2 * (width + height);
  const area = width * height;

  //vi bruker variablene i to nye variabler der vi regner ut omkrets og areal. 
  //nå funksjonen kjører henter vi fra inntastningsfeltene for høyde og bredde tallene og bruker 
  //dem til å regne ut omkrets og areal. 

  document.getElementById("txtTask1Output").textContent =
    `Circumference = ${circumference}, Area = ${area}`;
}
// Her henter vi tekst innholdet fra et element med id txtTask1Output og endrer teksten
// til å vise ressultatet av utregningen vår. Circumference = er ny tekst med inholdet fra variabelene
//${circumference} dette gjør at innholdet til variabelen circumference blir vist i tekstfeltet, samme med ${area}. 

// Koble knappen til funksjonen (event listener)
document.getElementById("cmbTask1Calculate")
  .addEventListener("click", cmbTask1CalculateClick);

  // denne er nødvendig for å få funksjonen til å fungere. document.getElementById("cmbTask1Calculate")
  // henter elementet knyttet til knappen for å beregne areal og omkrets. 
  // .addEventListener("click", cmbTask1CalculateClick) betyr at man skal se etter klikk 
  // på denne knappen og hvis det klikkes skal man kjøre funksjonen cmbTask1CalculateClick
  // som vi akkurat har laget.  


//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const task2Words = [];
//Her lager vi en array med navnet task2Words som skal inneholde alle ordene vi skriver inn. 

function txtTask2WordKeyPress(event) {
  // Vi lager en funksjon som skal kjøres hver gang en tast trykkes på i inntastningsfeltet
  // til knappen i task 2. når en tast trykkes lagres informasjonen om hvilken tast som er trykket
  //i variabelen event. event blir sendt fra nettleseren til javascript og vi trenger ikke å definere den. 
  //nettleseren sender alltid dette når den kaller på en funksjon, hvilket vil si at 
  //parameteret vil være event objektet om vi har et parameter i funksjonen. Hvis ikke blir dett ignorert. 
  // dette gjelder når eventlistener kalles, da sender den alltid ut event objektet.

  if (event.key === "Enter") {
    const wordInput = document.getElementById("txtTask2Word");
    const word = wordInput.value.trim();
    // dersom vi klikker enter oprettes to variabler. Wordinput henter ordet skrevet i boksen. 
    //const wordInput = document.getElementById("txtTask2Word") er en kobling til datafeltet i htmlen.
    //dette betyr at om vi endrer variablen wordinput endres også verdien(e) i datafeltet vi henter. 
    // value.trim fjerner mellomrom i starten og slutten av teksten. 

    if (word !== "") {
      task2Words.push(word);
    }

    // Dersom orden som er skrevet inn ikke er tomt, legger vi det til i vår liste(array).
    

    document.getElementById("txtTask2Output").textContent =
      `Number of words = ${task2Words.length}: ${task2Words.join(", ")}`;
    // her endrer vi teksten som kommer ut på nettsiden og skriver følgende med 
    // variabler som lengden på listen, altså hvor mange elementer det er snakk om
    //${task2Words.join(", ")} skriver ut alle ordene i listen med komme og mellomrom 
    //mellom hver av dem. 

    wordInput.value = "";
    // siden wordinput har gjort en kobling mellom variabel og datafeltet i html
    //med tilhørende id go vi setter verdien til dette datafeltet til null
    //da fjerner vi skriften som står skrevet der hver gang det trykkes enter. 
    //slik vi ønsket å ha det. 

  }
}

document.getElementById("txtTask2Word")
  .addEventListener("keypress", txtTask2WordKeyPress);

  // Her skjer det at vi henter elementetmed id txttask2word. dette er elementer
  // i input feltet for ord. .addEventListener("keypress", txtTask2WordKeyPress)
  // her ser vi etter tastetrykk og om det er tilfellet kjøres funksjonen der eventobjektet
  // blir sendt inn som parameter, siden vi har et parameter i denne funksjonen. 

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function cmbTask3CheckAnswerClick()
// Dette er funksjonen som kjører når vi i html dokumentet trykker på 
//knappen check answer. 
{

  const checkboxes = document.getElementsByName("chkTask3");

  // Dette betyr at vi skal finne alle elementene som har navnet chkTask3. 
  // Dette er i vårt tilfelle alle avkrysningpunktene for denne oppgaven.
  // checkboxt blir en array med checkbox elementer, 5 stykker. 
  //checkboxes blir en liste med alle checkbox-elementene

  let selected = [];

  // Vi lager en array som er tom og heter selected. Denne skal brukes til å 
  //lagre hvilke checkbokser som er valgt. 

  for (let i = 0; i < checkboxes.length; i++) {

    if (checkboxes[i].checked)
      //er checkboxes[i] hukket av, dersom svaret er ja legger vi til verdien av
      // denne i selected. 
      {
      selected.push(checkboxes[i].value);
    }

  }

  // her gå vi gjennom i løkke, ved først å se hvor mange elementer som er i arrayen
  //så begynner vi på element 0 og kjører gjennom alle elementene i arrayen og
  // sjekker 

  document.getElementById("txtTask3Output").textContent =
    "Selected: " + selected.join(", ");
}

// nå endrer vi teksten i txtTask3Output for å vise hvilke alternativet som er 
//hukket av. med andre ord legger vi til ordet selected i tillegg til det fra variabel arreyet
// der vi legger inn hvert element adskil med komma og mellomrom. 

document.getElementById("cmbTask3CheckAnswer")
  .addEventListener("click", cmbTask3CheckAnswerClick);

  // vi henter elementet med id cmbTask3CheckAnswer og legger til en klikk-hendelse
  //dette gjør at når vi klikker på knappen check answear så kjører vi funksjonen
  //cmbTask3CheckAnswerClick. 
 


//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const carDiv = document.getElementById("divTask4Cars");

//lager en variabel som kobler html elementet med id divTask4Cars.
// dette er konteineren der vi vil se de ulike radioknappene på html siden. 

for (let i = 0; i < CarTypes.length; i++) {

  //for løkken begynner på element nummer 0 og strekker seg til lengden i objektet
  //cartyper minus 1. cartypes er et objekt definert i toppen av koden med info om de
  //ulike bilene. vi lager en løkke for å lage radioknapper som skal legges i
  //carDiv som produserer knapper på html siden. Den gjør dette slik at vi kan produsere
  //knapper for hver bil i objektet. 

  const radio = document.createElement("input");
  // vi lager en input som et html element, og lagrer det i variabelen radio. 
  //Dette er ikke på html siden enda, men bare i javascript. 
  radio.type = "radio";
  //nå gjør vi input html elementet til en radioknapp. 
  radio.name = "car";
  // vi gir radioknappene et navn slik at de grupperes sammen. De får et gruppenavn. 
  //alle radioknapper med samme navn tillhører samme gruppe, der bare en i gruppen
  //kan velges. og vi kan bare hukke av en radioknapp om gangen. 
  radio.value = CarTypes[i].value;
  //vi gir radioknappen en verdi som vi henter fra objektet tilhørende bilen. 
  //Nå får vi en et nummer som identifiserer hver bil i objektet. Denne brukes ikke nå
  //men kan være nyttig om vi senere får utvidet funksjonaliteten. 


  radio.addEventListener("click", function () {
    document.getElementById("txtTask4Output").textContent =
      "Selected car: " + CarTypes[i].caption;
  });

  //når man kaller på en funksjon som ikke er definert over med noe navn,
  //blir funksjonen det som kommer under radio.addEventListener("click", function () {. 
  //Nå kobler vi til html elementet der det skal skrives tekst ut og vi velger
  //fra objektet våres element nummer i, og caption er navnet på bilen. Dette skal vises
  //dersom det klikkes på radio knappen. dette er en oppførsel som er knyttet til hver enkelt
  //knapp i for løkken. Dette legges til i vår radio variabel. Denne legges så til senere i html.  

  const label = document.createElement("label");
  //vi lager et html dokument med label, det vil si tekstfeltet før radioknappen.  
  label.textContent = CarTypes[i].caption;
  // nå setter vi inn teksten fra objektet tilhørende bilen med nummer i, og det vises
  //på html siden. under label. dette er teksten før en radioknapp og vi lager flere slike. 


  carDiv.appendChild(radio);

  // carDiv var koblet til html der vi skulle legge inn radioknappene med tilhørende
  //navn/label. for at denne knappen vi har generert vi for løkken og de kommende skal bli synlige 
  //på html siden må vi bruke funksjonen apendChild som gjør at vi legger til et og ett
  //barn etter hverandre av elementer på nettsiden. Nå i første runde legger vi til første knapp
  //så legger vi i neste runde til en ny knapp til for løkken har kjørt gjennom. 
  carDiv.appendChild(label);
  // nå legger vi rett etter radioknappen til en tekst som forklarer betydningen av knappen. 
  
  carDiv.appendChild(document.createElement("br"));
  // nå lager vi et element som lager et linjeskift slik at neste knappe med tilhørende label 
  //kan komme rett under den første. Slik kjører løkke og lager knapper med label som kan klikkes på og få tilhørende skrift. 
}


//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function selectTask5AnimalsChange() {
  //vi lager en funksjon som kjøres når vi bytter alternativ. 

  const select = document.getElementById("selectTask5Animals");

  //vi lager først en variabel vi kobler med elementet selectTask5Animals. 
  //dette går på at vi kan velge et alternativ der vi velger et type dyr. 
  const selectedText = select.options[select.selectedIndex].text;
  // nå lager vi en variabel som tar for seg teksten til elementet fra html siden
  //som vi har koblet med variabelen select. .options[select.selectedIndex].text 
  //gjør at vi kan hente teksten tilhørende den teksten som er knyttet til valget
  //vi gjorde i html dokumentet. om vi velger girafe henter vi teksten girafe fra html
  //dokumentet og gjør det til en tekst variabel ved navn selectedText. 
  //select.options er alle option elementene i dropdown menyen. select.selectedIndex
  // dette er nummeret til det valgte alternativet. når man skriver .text henter man teksten
  //til det alternativ i i dropdown menyen som er valgt. 

  document.getElementById("txtTask5Output").textContent =
    "Selected animal: " + selectedText;
    //nå endrer vi det som står skrevet i html dokumentet under txtTask5Output
    //og skriver "Selected animal: " og så setter vi inn teksten vi har funnet i 
    //variabelen selectedText
}

document.getElementById("selectTask5Animals")
  .addEventListener("change", selectTask5AnimalsChange);

  //dersom html elementet selectTask5Animals gjøres noe med, at man bytter et alternativ.
  //dette er det change betyr. da kjøres funksjonen selectTask5AnimalsChange som vi har laget. 

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectGirls = document.getElementById("selectTask6Girls");

//vi kobler "selectTask6Girls" fra html til variablen selectGirls. 

for (let i = 0; i < GirlsNames.length; i++) {
  //vi lager en for løkke for å skape girlsnames til alternativer
  //i dropdown menyen. 

  const option = document.createElement("option");
  //svaralternativene er ulike options, og i javascript lager vi ulike optionselementer 
  //som skal fungere i html. Nå lager vi det første, så når løkken kjører skaper vi flere. 
  option.textContent = GirlsNames[i];

  //disse optionsalternativ skal vise en tekst du kan velge, og riktig navn når vi lager løkke
  //blir generert ved å skrive GirlsNames[i]. Hvilket henter et og et navn fra våres array med 
  //jentenavn. 
  option.value = GirlsNames[i];

  // vi velger å legge til en verdi til hvert alternativ og i dette tilfellet så lar vi 
  //verdien være navnet på hver enkelt jente. 

  selectGirls.appendChild(option);
  // så når vi har laget en option i javascript legger vi til dette i html dokumentet som
  //er koblet til variabelen selectGirls, som vil medføre en endring i html dokumentet. 
  //når vi kjører løkken genereres alle alternativene for jentenavn i dropdown menyen. 
}

function selectTask6GirlsChange() {
  //Når vi nå har generert alle svaralternativene, lager vi en funksjon som kjører 
  //dersom vi endrer på et slikt alternativ. 

  const select = document.getElementById("selectTask6Girls");
  //vi lager en variabel vi kobler med dropdownmenyen selectTask6Girls
  const selectedName = select.value; // Vi lager en variabel med verdien 
  //til det valgte navnet. document.getElementById("selectTask6Girls") 
  //peker på hele dropdownmenyen, men når man skriver .value og ikke refererer
  // til et spesifikt alternativ finner html den valgte alternativet og 
  // finner verdien til dette som i vårt tilfelle er det valgte jentenavnet. 

  document.getElementById("txtTask6Output").textContent =
    "You selected: " + selectedName;

    //Nå endrer vi det vi skriver ut til "You selected: " + selectedName;
    // selected name blir det navnet vi har valgt fra dropdown menyen vår. 
}

document.getElementById("selectTask6Girls")
  .addEventListener("change", selectTask6GirlsChange);
  //vi kjører funksjonen selectTask6GirlsChange dersom vi velger et alternativ 
  //i dropdown menyen til selectTask6Girls. 

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const genreSelect = document.getElementById("selectMovieGenre");

//vi kobler variabelen genreSelect med html elementet selectMovieGenre. Det
//er her vi skal få opp dropdownmenyen med ulike sjangre og velge sjanger. 



for (let i = 0; i < MovieGenre.length; i++) {
  //vi kjører en for løkke gjennom alle elementene til moviegenre
  // fordi vi ønsker å lage listen med så mange sjangre og ønsker å lage disse basert på
  //element i listen. 
  const option = document.createElement("option");
  //nå lager vi et html element av typen option, som ennå ikke er koblet til html delen vår. 

  option.textContent = MovieGenre[i];
  // vi lager teksten som skal dukke opp når vi velger dette alternativet. 
  //det er navnet som står i listen MovieGenre[i] som vil være ulike sjangre i denne løken. 
  //vi får ved å kjøre løkken opp mange ulike sjangre. 
  option.value = MovieGenre[i];
  // vi sette verdien til dette valget til å være navnet på sjangren. 

  genreSelect.appendChild(option);
  // vi legger til denne option i html dokumentet der vi skal velge options. 
}

function cmbAddMovieClick() {

  const title = document.getElementById("txtMovieTitle").value;

  //vi lager en variabel title vi kobler til html elementet txtMovieTitle. når vi
  //skriver .value velger vi den valgte filmen, og denne er innskrevet i html 
  //dokumentet og verdien er tekst. 
  const genre = document.getElementById("selectMovieGenre").value;
  //vi lager en variabel genre, som kobles til dropdownmenyen
  //der man kan velge sjanger og .value indikerer at verdien blir
  //den valgte verdien av value som er et navn. 
  const director = document.getElementById("txtMovieDirector").value;
  //vi lager en variabel director, som kobles til innskrivningsfeltet
  //der man kan velge director og .value indikerer at verdien blir
  //den valgte verdien av value som er et navn. 
  const rate = document.getElementById("txtMovieRate").value;

  //vi lager en variabel rate, som kobles til en slags meny der vi kan 
  //klikke opp og ned og gi en vurdering fra 1-10. denne finner vi under
  //html elementet txtMovieRate og denne delen er definert i html. 
  //der man kan velge karakter fra 1-10 og .value indikerer at verdien blir
  //den valgte verdien av value som er et et tall fra 1-10. 

  const table = document.getElementById("tblMovies");

  //vi lager en variabel table som kobles til tabellen der vi skal legge inn
  //filmtitler og sjangre og hele sulamitten. den kobles til html elementet
  //tblMovies

  const row = document.createElement("tr");

  // her lager vi en variabel som oppretter en ny rad i html, dette ligger foreløpig bare
  // i javascript

  const nrCell = document.createElement("td");
  const titleCell = document.createElement("td");
  const genreCell = document.createElement("td");
  const directorCell = document.createElement("td");
  const rateCell = document.createElement("td");
  // her lager vi html celler for title, genre, director og rate. disse er foreløpig bare
  //i javascript. vi lager en celle for hver kolonne av disse. 

  nrCell.textContent = table.rows.length;
  //her legger vi til teksten i denne cellen som i første rad blir 0, men dette er overskriftene. 
  //så denne hvor vi legger til første tittel blir 1, så neste tittel osv blir 2...lengden av rader
  //det er det som skrives ut. dette er nummerering av filmer, som denne cellen brukes til. 
  titleCell.textContent = title;
  //her setter vi inn valgt tittel, som er skrevet inn og lagt til i variablen title. 
  genreCell.textContent = genre;
  // litt samme her. sjanger er valgt og lagt i variablen genre, som blir det vi skriver
  //ut tilhørende denne cellen i html. Ingenting er koblet med html enda. 
  directorCell.textContent = director;
  rateCell.textContent = rate;
  //disse følger samme prinsipp

  //

  row.appendChild(nrCell);
  row.appendChild(titleCell);
  row.appendChild(genreCell);
  row.appendChild(directorCell);
  row.appendChild(rateCell);

  //Nå legger vi til alle cellene til row som vi har laget med tr for ny rad. i denne raden legger
  //vi cellene. den er fremdeles ikke synlig i html dokumentet. 

  table.appendChild(row);
  //nå legger vi til den nye raden med cellene som elementer i raden og legger den inn i
  //table som er koblet med html dokumentet der vi legger inn rader for filmer under overskriften
  //for titler og sånn.  
}

document.getElementById("cmbAddMovie")
  .addEventListener("click", cmbAddMovieClick);

  //dersom vi klikker på knappen under html elementet cmbAddMovie, så 
  //kjører vi funksjonen cmbAddMovieClick. 


