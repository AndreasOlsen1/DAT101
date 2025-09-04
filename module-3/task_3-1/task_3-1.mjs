"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
}
  else if (wakeUpTime === 8) { 
    printOut("I can take the train to school.");}

  else {
    printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const verdi = 5;
if (verdi > 0) {
  printOut("Positive");
}
else if (verdi < 0) {
  printOut("Negative");
}
else {
  printOut("Zero");
} 

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imagesize = Math.floor(Math.random() * 9); // random generer mellom null og 1, ganges det med ti får vi mellom null og 10, og med 9 mullom 0 og 9. Floor gjør at man runder ned til nærmeste heltall. 
printOut(imagesize);
if (imagesize >= 4) {
  printOut("“Thank you”");
}
else {
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(imagesize);
if (imagesize >= 4 && imagesize < 6) {
  printOut("“Thank you”");
}
else if (imagesize>= 6) {
  printOut("“The image is too large”");
}
else {
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length; // gir tallet 12 som beskriver antall måneder i listen eller arrayen monthlist. 
const monthName = monthList[Math.floor(Math.random() * noOfMonth)]; // her indekserer du og plukker ut en av 12 mulige rom inne i arrayen monthlist, du ganger med 12 for å få et tall mellom null og 11, som gir 12 mulige tilfeldige rom hver gang koden kjøres.
//  den spytter ut navnet på den måneden som tilhører den tilfeldige indekseringen mellom 0 og 11. 

printOut(monthName);
if (monthName.includes("r")) {
  printOut("You must take vitamine D");
}
//.includes("r") gjør at den sjekker om innholdet av indekseringen av variabelen, det som kommer ut innehodler bokstaven r. 
else {
  printOut("You do not need to take vitamine D");
}


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const trettidager = ["April", "June", "September", "November"]; 
const trettiendager = ["January", "Mars", "May", "July", "August", "October", "December"];
// februar er ikke med i noen av listene fordi den har 28 eller 29 dager. 

printOut(monthName);

if (trettiendager.includes(monthName)) {
  printOut("This month has 31 days");
}
//sjekker om navnet på måneden ligger i listen trettiendager. 
else if (trettidager.includes(monthName)) {
  printOut("This month has 30 days");
}
//sjekker om navnet på måneden ligger i listen trettidager.
else {
  printOut("This month has 28 or 29 days");
}
//dette er februar. 

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(monthName); //her sjekker vi hvilken måned det er
const stengte_datoer = ["mars", "may"];
if (monthName.includes("Mars")|| monthName.includes("May")){
  printOut("The art gallery is closed");
}
else {
  printOut("The art gallery is open");
}
//hvis ikke dette stemmer er det stengt. 
  printOut(newLine);
