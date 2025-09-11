"use strict";
import { newLine, printOut } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let output = ""; // lager en variabel som legger til tall i strengen senere

for (let i = 1; i < 11; i++) {
  if (i === 10) {
    output += i;}
  else{
    output += i + ", ";
}}

//lager en løkke som legger til tallene mellom 1 og 10 til strengen pluss et komma og et mellomrom.men ikke når i =10. 

printOut(output); //printer ut outputen som går fra 1-10. 

output = ""; //resetter output til en tom streng igjen.

for (let i = 10; i > 0; i--) {
  if (i === 1) {
    output += i;}
  else{
    output += i + ", ";
}}
//lager en løkke som legger til tallene mellom 10 og 1 til strengen pluss et komma og et mellomrom. 

printOut(output); //printer ut outputen som går fra 10-1.


printOut(newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const riktig_tall = 45; //definerer riktig tall som 45.
let gjette_tall = 1; //starter gjettingen på 0.

while (true) { //lager en løkke som fortsetter til riktig tall er 45.
  gjette_tall = Math.floor(Math.random() * 60 + 1); // lager et tilfeldig tall mellom 1 og 60. 
  if (gjette_tall === riktig_tall) { //sjekker om det gjettede tallet er riktig tall.
    break;}}
printOut("Tallet er 45!"); //når tallet er 45 brytes løkken og denne setningen printes ut. 

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
gjette_tall = 1; //starter gjettingen på 0.
let antall_gjett = 0; //lager en variabel som teller antall gjetninger.
let start = Date.now(); //starter en timer som teller hvor lang tid det tar å gjette riktig tall.  

while (true) { //lager en løkke som fortsetter til riktig tall er 45.
  gjette_tall = Math.floor(Math.random() * 1000000 + 1); // lager et tilfeldig tall mellom 1 og 60. 
  
  antall_gjett+=1; //hver gang løkken går oppdateres antall gjetninger med 1.
  if (gjette_tall === riktig_tall) { //sjekker om det gjettede tallet er riktig tall.
    break;}}
let slutt = Date.now(); //tar tiden når while løkken slutter
printOut("gjettingen tok " + (slutt-start)+ " ms");
printOut("Tallet er 45!"); //når tallet er 45 brytes løkken og denne setningen printes ut. 
printOut("Antall gjetninger: " + antall_gjett); //printer ut antall gjetninger det tok å finne riktig tall.

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

output = ""; //resetter output til en tom streng igjen.

let primtall = "";

for (let i = 1; i < 200; i++) {
  if (i > 1 && i/2 === true){

    printOut(i + " er ikke primtall")
  } else {
    for (let j = 2; j < i; j++) {
        if (Number.isInteger(i/j) === true){
            break;
        } else if (i - j === 1){
            output += i + " ";
        }

        }


  }
    
}

printOut(output);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ord1 = "K";
const ord2 = "R";

let rad = "";
for (let m = 1; m < 8; m++) {

  for (let n = 1; n < 10; n++) {
    rad += ord1+ n+ ord2 +m + " ";
  }
printOut(rad);
rad = ""; //må resette raden for hver runde loopen kjører. 

}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalt_poeng = 236; // man kan maks få 236 poeng
let tilfeldig_poeng = 0; // lager variabel med tilfeldig poeng som man skal bruke senere. 

for (let student = 1; student < 6; student++) {
  tilfeldig_poeng = Math.floor(Math.random() * 236 + 1); //simmulerer tilfeldig poeng hos en elev
  if (tilfeldig_poeng/236 < 0.41) {
    printOut("student" + student + " sin karakter er: F ");
  }
  else if (tilfeldig_poeng/236 >= 0.41 && tilfeldig_poeng/236 < 0.53) {
    printOut("student" + student + " sin karakter er: E ");
  }
  else if (tilfeldig_poeng/236 >= 0.53 && tilfeldig_poeng/236 < 0.65) {
    printOut("student" + student + " sin karakter er: D ");
  }
  else if (tilfeldig_poeng/236 >= 0.65 && tilfeldig_poeng/236 < 0.77) {
    printOut("student" + student + " sin karakter er: C ");
  }
  else if (tilfeldig_poeng/236 >= 0.77 && tilfeldig_poeng/236 < 0.89) {
    printOut("student" + student + " sin karakter er: B ");
  }
  else {
    printOut("student" + student + " sin karakter er: A ");
  }


}



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let terning_1 = 0;
let terning_2 = 0;
let terning_3 = 0;
let terning_4 = 0;
let terning_5 = 0;
let terning_6 = 0;

let alle_terningkast_samlet = 0;

kjoor = true;

let ooyne_paa_terninger = "";

let full_straight = false;
let tre_par = false;
let taarn = false;
let yatzy = false;

let antall_kast_yatzy = 0;
let antall_kast_full_straight = 0;
let antall_kast_tre_par = 0;
let antall_kast_taarn = 0;

while (yatzy === false || full_straight === false || tre_par === false || taarn === false) {
    terning_1 = Math.floor(Math.random() * 6 + 1);
    terning_2 = Math.floor(Math.random() * 6 + 1);
    terning_3 = Math.floor(Math.random() * 6 + 1);
    terning_4 = Math.floor(Math.random() * 6 + 1);
    terning_5 = Math.floor(Math.random() * 6 + 1);
    terning_6 = Math.floor(Math.random() * 6 + 1);


    antall_kast_yatzy += 1;
    antall_kast_full_straight += 1;
    antall_kast_tre_par += 1;
    antall_kast_taarn += 1;

    ooyne_paa_terninger = terning_1 + ", " + terning_2 + ", " + terning_3 + ", " + terning_4 + ", " + terning_5 + ", " + terning_6;

    

    alle_terningkast_samlet = [terning_1, terning_2, terning_3, terning_4, terning_5, terning_6];
    let count_1 = 0;
    for (let v of alle_terningkast_samlet) {
      if (v === 1) {
        count_1++;
      }
  }
    let count_2 = 0;
    for (let w of alle_terningkast_samlet) {
      if (w === 2) {
        count_2++;
      }
    }
    let count_3 = 0;
    for (let u of alle_terningkast_samlet) {
      if (u === 3) {
        count_3++;
      }
    }
    let count_4 = 0;
    for (let p of alle_terningkast_samlet) {
      if (p === 4) {
        count_4++;
      }
    }
    let count_5 = 0;
    for (let f of alle_terningkast_samlet) {
      if (f === 5) {
        count_5++;
      }
    }
    let count_6 = 0;
    for (let d of alle_terningkast_samlet) {
      if (d=== 6) {
        count_6++;
      }
    }

    let counts = [count_1, count_2, count_3, count_4, count_5, count_6];


    if (counts.includes(6) && yatzy === false) {
        printOut(ooyne_paa_terninger);
        printOut("Yatzy! Antall kast: " + antall_kast_yatzy);
        yatzy = true;
        printOut(newLine);
      }

    if (counts.includes(2) && counts.includes(4) && taarn === false) {
      printOut(ooyne_paa_terninger);
      printOut("Tårn! Antall kast: " + antall_kast_taarn);
      taarn = true;
      printOut(newLine);
    }
    
    let par_count = counts.filter(c => c === 2).length; // sjekker om hvor mange par med 2 like det er. om 1 par får vi ut 1. 

    if (par_count === 3 && tre_par ===false){
      printOut(ooyne_paa_terninger);
      printOut("Tre par! Antall kast: " + antall_kast_tre_par);
      tre_par = true;
      printOut(newLine);
    }


    if (counts.every(c => c ===1) && full_straight === false) {
      printOut(ooyne_paa_terninger);
      printOut("Full straight! Antall kast: " + antall_kast_full_straight);
      full_straight = true;
      printOut(newLine);
    }
      if (yatzy === true && full_straight === true && tre_par === true && taarn === true) {
        kjoor = false;
      }


}


    




printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
