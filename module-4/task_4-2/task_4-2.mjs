"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//lager en array med tallene fra 1 til 20 som legger seg i listen. 

for (let i = 0; i < array1.length; i++)  {
        printOut(array1[i]);
    }


// lager en for løkke som begynner på 0 som er første element i en liste og går til lengden på listen. Når den begynner på 
//0 så går den vell til akkurat før 20. når i skal være mindre enn 20 med dette går da siste element i listen er element nummer 19. 
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(array1.join("- "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

const tekst = "Hei på deg, hvordan har du det?"

let array2 = tekst.split(" ");

for (let i = 0; i < array2.length; i++) {
  printOut(
    "Ord nummer " + (i + 1) +
    " har indeks " + i +
    " og er: " + array2[i]
  );
}


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

const names = [
  "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva",
  "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig",
  "Marianne", "Randi", "Ida", "Nina", "Maria",
  "Elisabeth", "Kristin"
];

// lager en array med 20 navn elementer. Vi lager så en funskjon som har to parametere array og tekst. 
//her legger vi inn arraynavnet og søker gjennom informasjonen i array, og teksten er den teksten vi ønsker å fjerne. 

function removeElement(array, text) {

  if (array.includes(text)) {
    printOut(`${text} finnes i arrayet.`);
    const index = array.indexOf(text);
    //Dersom array inkluderer den teksten som vi øsnker å gjerne opprettes en konstant variabel der vi sjekker
    //hvilken indeks i arrayet som har denne teksten, og dette blir verdien til variablen. 
    array.splice(index, 1);

    //ved splice begynner vi på indeks nummer som er indeksen med teksten og fjerner denne ene. dersom det var tallet 2 eller 3 jobber den seg framover 
    //i indeksene og fjerner de to eller tre indeksene som er etterfølgende denne. 

    printOut(text + " ble fjernet.");
  } else {
    printOut(text + " finnes ikke.");
  }

}

removeElement(names, "Ingrid");
//printOut(names)
// jeg kjører så funksjonen med arrayet names og navnet ingrid for å fjerne hennes navn fra arrayet. 
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

const boys = [
  "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William",
  "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel",
  "Kasper", "Mathias", "Jonas", "Tobias", "Liam",
  "Håkon", "Theodor", "Magnus"
];

//lager en ny array med guttenavn. 

const allNames = names.concat(boys);

printOut(allNames);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

class TBook {

    constructor(aTitle, aAuthor, aISBN){
        this.title = aTitle;
        this.Author = aAuthor;
        this.ISBN = aISBN;
    }
    toString() {
        return `Title: ${this.title}, Author: ${this.Author}, ISBN: ${this.ISBN}`;
    }
}

//lager en klasse der konstruktøren tar for seg tre parametere for tittel, forfatter og isbn. to string funksjonen 
//kjører gjennom en boks tittel og forfatter og isbn og skriver ut dette. arrayet vært bruker klasen tBook og legger inn
//ulike bøker. Disse legger seg i this.title, this.Author og this.ISBN.

const books = [
  new TBook("Emil i lønneberger", "Astrid Lindgren", "736283748"),
  new TBook("Harry Potter og de vises stein", "J.K. Rowling", "9788203251612"),
  new TBook("Ringenes herre", "J.R.R. Tolkien", "9788252572022")
]

for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString());
}

//Vi lager en løkke som starter ved index 0 og går fram til lengden av arayet, nummeret minus 1. 
//vi printer ut this.title, this.Author og this.ISBN lagt inn i tostring funcksjonen som gjør at de kan printes ut. 

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },

    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" }
};

//lager objektet med ukedager og verdier som man senere skal bruke. 

const keys = Object.keys(EWeekDays);

//lager et array med keys ved å bruke funksjonen, dette er det ordet som står helt til venstre, eks. weekday1. 
// dette er keyer og disse legges inn i et nytt array. 

for (let i = 0; i < keys.length; i++) {

    const key = keys[i];
    const day = EWeekDays[key];

    printOut(key + ": " + day.name + " (" + day.value + ")");
}

//vi kjører en løkke som tar for seg alle keys altså lengden av dette. vi lager i løkken en variabel
//key, som inneholder ulike keyer ettersom vi blar gjennom alle elementene til keys arrayet. 
//så har vi en variabel day som kjører gjennom de ulike keyene og henter innholdet fra objektet 
//til disse. hver key har to underelementer value og name. Så vi printer ut navnet på keyen, så name tilhørende denne
// så value tilhørende denne. Oppgaven er så løst. 



printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

let numbers = [];

//lager først en tom array som kan endres på.

for (let i = 0; i < 35; i++) {
    numbers.push(Math.floor(Math.random() * 20) + 1);
}

// lager en for løkke som legger til tall fra 1 til 20, 35 stykk av disse legges til i arrayet. 
// math random gir tilfeldige tall mellom 0 og 1. vi ganger med 20 for å få tilfeldige 
//tall mellom 0 og 20. For å slippe komma till men bare få heltall runder vi ned tallet til nærmeste
//heltall. 

printOut("Original array:");

// Så skriver vi ut original array, som er det første arrayet før vi har sortert tallene. 
printOut(numbers);
// så printer vi ut arrayet der vi har lagt til 35 tall fra 0 til 20. 


let ascending = [...numbers].sort(function(a, b) {
    return a - b;
});
//vi lager en ny array med kopi av den gamle for å gjøre sorteringer. 
// [...numbers] dette er en spread operator. Denne lager en kopi av innholdet i arrayet numbers. 
// sort sorterer i arrayet og function(a,b) sammenligner to tall, ved å trekke b fra a
//så flytter b plass dersom a-b er positivt. Det forblir på plassen sin ellers. denne sorterer 
// elementene to og to helt til alt stemmer.
// callback i denne situasjonen er a-b. stigende rekkefølge. 


printOut("Ascending order:");
printOut(ascending);

// Nå skal vi sortere i synkende rekkefølge
let descending = [...numbers].sort(function(a, b) {
    return b - a;
});

// litt samme som i sta, vi lager en ny kopi variabel, som sorterer basert på om b - a gir 
//positiv verdi. Hvis tilfellet bytter de to og to plass helt til alle elementer i arrayet 
// stemmer. 

printOut("Descending order:");
printOut(descending);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");


// 1. Tell hvor mange ganger hvert tall forekommer
let frequency = {};

//et objekt som er tomt. Denne skal brukes til å lagre hvor mange ganger hvert tall forekommer. 


numbers.forEach(function(num) {
    if (frequency[num]) {
        frequency[num]++;
        // numbers.forEach(function(num) kjører automatisk for alle elementene i arrayet . 
        //hvis frequency[num] allerede eksisterer, så øk verdien med 1.
        //den går gjennom alle verdier i arrayet, om den har gått gjennom liknende tall
        //tidligere da øker vi frekvensen med 1 sånn at den har telt at det er andre gang
        //dette tallet oppstår. 
        //om 3 er i arrayet og frequency[3] eksisterer, så øk den med 1.
        //dette er en teller av hvor ofte et tall forekommer.
        //frequency er et objekt og er annerledes enn et array, da frequency[3] ikke
        //betyr indeks nummer tre fra dette arrayet. Objekt er mer en ordbok så dette betyr om
        //det finnes en verdi for nøkkelen 3 i objektet, da legger vi til en i telleren 
        //for hvor mange det er i dette objektet. frequency[num] er en nøkkel som
        //inneholder et tall. 
         
    } else {
        frequency[num] = 1;
        //hvis det er første gang funksjonen ser et spesifikt tall setter vi telleren for dette 
        //tallet til 1.
    }
});

//foreach går gjennom hvert element i arrayet som bruker foreach(function(num)). 
// for hvert element i arrayet blir num = 3, num = 4 for et array med to elementer av 3 og 4. 


// 2. Print tall og frekvens
printOut("Number -> Frequency");
for (let num in frequency) {
    printOut(num + " -> " + frequency[num]);
}

//kjører en løkke. frequency objektet er allerede laget med hvor mange 
//ganger spesifikke tall forekommer. nå lager vi en tellevariabel num som går gjennom 
//nøkler i frequency objektet. num blir her nøkkelens navn og frequency[num] verdien tilhørende 
//denne nøkkelen. 

// 3. Gjør objektet om til et array
//nå blir nøkkelen indeks 0 og verdien tilhørende denne nøkkelen blir indeks 1. Arayet består 
//av mange par med tall og frekvens eks [[3, 2], [4, 1]]. Grunnen til dette er at vi kan sortere
//i array men ikke i objekt. 
let freqArray = Object.entries(frequency);

// 4. Sorter etter frekvens (mest først)
// hvis lik frekvens → sorter etter tall
freqArray.sort(function(a, b) {
    if (b[1] === a[1]) {
        return a[0] - b[0];
    }
    return b[1] - a[1];
});

//nå bruker vi en funksjon som sorterer de parvise tallene i arrayet. det er frekvensene mellom
// to elementer i arrayet vi ser etter hvilket vil være den helt til høyre med indeks 1.
//husk at vi begynner på indeks 0. så to elementer [3, 2], [4, 1] der vil det være
//to ganger vi får tallet 3 og 1 gang tallet 4. med funksjonen vet vi at dersom vi får
//først sjekker vi om frekvensene er like. Dersom dette er tilfellet sorterer vi tallene
//der lavest tall skal komme før det høyeste tallet. blir det positivt tall bytter de plass. 
//negativt tall da blir de der de er. 
//dersom dette ikke er tilfellet sammenligner vi frekvensene og samme logikk skjer her at to
//elementer bytter plass dersom vi får positivt tall. Dette fordi høyest frekvens skal 
// komme først i sorteringen. 

// 5. Print frekvens → tall
printOut("\nFrequency -> Numbers");

freqArray.forEach(function(item) {
    printOut(item[1] + " -> " + item[0]);
});
// Nå bruker vi en funskjon som går gjennom hvert element i arrayet
//og så printer vi ut hvert element med indeks 1, tilhørende det samme elementet
//med indeks null, frekvens tilhørende tall. Siden denne er inne i funksjonen vil dette 
//bli slik med hvert element. 

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Lag et tomt array
let grid = [];

// 1. vi begynner med å lage rader og kolonner. Vi begynner på rad 0 og kol 0. 
for (let row = 0; row < 5; row++) {

    grid[row] = []; // vi lager maks 5 rader og vår første for løkke fokuserer bare
    //på radene. først rad 0. 

    for (let col = 0; col < 9; col++) {

        grid[row][col] = "Row " + row + " Col " + col;
        //Etter å ha lager rad 0 har vi en løkke inne i denne løkken som lager kolonner. 
        // med dette kan vi lage 9 kolonner for hver rad. for hver kolonne, setter 
        //vi inn et navn for raden og kolonnen med nummerering etter for løkkene. på denne 
        //måten lager vi en array med 9 kolonner og fem rader. 

    }
}


// 2. Print arrayet som rader og kolonner
for (let row = 0; row < 5; row++) {

    let line = ""; // bygger opp én linje (en rad)

    for (let col = 0; col < 9; col++) {

        line += grid[row][col] + "   ";

    }
    //følger samme prinsipp som i sta bare at nå fokuserer vi på printingen og utformingen. 
    //

    printOut(line); // printer hele raden
    //vi lager en variablen som samler en hel rad. Denne printer vi ut en og en slik at det blir 
    // fint å se på. 

}

printOut("Replace this with you answer!");
printOut(newLine);
