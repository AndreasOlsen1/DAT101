"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const kalkulasjon3 = 2 + 3 * 2 - 4 * 6;
const kalkulasjon4 = 2 + 3 *( (2 - 4) * 6);
printOut(kalkulasjon4); 
printOut(kalkulasjon3);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const antall_meter = 25;
const antallcentimeter = 34;
const en_inch_i_centimeter = 2.54;
const meter_og_centimeter_i_inch =(antall_meter*100 +antallcentimeter)/en_inch_i_centimeter;

printOut("25 meter og 34 cm er " + meter_og_centimeter_i_inch + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const antall_dager = 3;
const antall_timer = 12;
const antall_minutter = 14;
const antall_sekunder = 45;
const totalt_antall_minutter = (antall_dager*24*60) + (antall_timer*60) + antall_minutter + (antall_sekunder/60); 
printOut("Totalt antall minutter er " + totalt_antall_minutter);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const antall_minutter2 = 6322.52;
const antall_dager2 = Math.floor(antall_minutter2/(60*24));
const antall_timer2 = Math.floor(((antall_minutter2)/60)-antall_dager2*24);
const antall_minutter3 = Math.floor(antall_minutter2 - (antall_dager2*24*60) - (antall_timer2*60));
const antall_sekunder2 = (antall_minutter2*60)-((antall_dager2*24*60*60)+(antall_timer2*60*60)+(antall_minutter3*60));
printOut("6322.52 minutter er " + antall_dager2 + " dager,  " + antall_timer2 + " timer, " + antall_minutter3 + " minutter og " + antall_sekunder2 + " sekunder.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const antall_dollar = 54;
const dollarkurs = 76/8.6; //1 dollar er verdt 76/8.6 kroner
const antall_kroner = Math.ceil(antall_dollar * dollarkurs);  //runder opp siden det blir mer enn dette og da må vi betale en krone mer,siden vi skulle ha hele kroner og dollar. 
printOut("Pris for 54 dollar er " + antall_kroner + " kroner og antall dollar er " + antall_dollar);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const setning1 = "There is much between heaven and earth that we do not understand.";
let tegn_nummer = 0; //lager er variabel for tegn nummer som skal brukes i for løkken senere.
printOut("Det er nøyaktig " + setning1.length + " tegn i setningen: " + setning1);
printOut(newLine);
printOut("tegn nummer 19 er " + setning1.charAt(18)); // finner tegn nummer 19 med funksjon og tanke på null indeksering. 
printOut(newLine);

for (let i = 34; i < 43; i++) {
    tegn_nummer = i+1;
    printOut("Tegn nummer: " + tegn_nummer + " er: " + setning1.charAt(i) + " i setningen " + setning1);
    printOut(newLine);
}

//kjører for løkke for å komme frammover med å skrive ut tegn nummer 35 til 43 i setningen.


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Er 5 > 3 ? " + (5 > 3));
printOut(newLine);
printOut("Er 7 >= 7 ? " + (7 >= 7));
printOut(newLine);
printOut("Er a > b ? " + ("a" > "b"));
printOut(newLine);
printOut("Er 1 > a ? " + (1> "a"));
printOut(newLine);
printOut("Er 2500 < abcd ? " + ("2500" < "abcd"));
printOut(newLine);
printOut("Er arne !== thomas ? " + ("arne"!== "thomas"));
printOut(newLine);
printOut("er 2 === 5 ? " + (2 === 5));
printOut(newLine);
printOut("Er abcd > bcd ? " + ("abcd" > "bcd"));
printOut(newLine);



printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let tekst1 = "254";
let tekst2 = "57.23";
let tekst3 = "25 kroner";
printOut(Number(tekst1));
printOut(Number(tekst2));
printOut(parseInt(tekst3));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 const r = Math.floor(Math.random() * 360) + 1; // ganger med 360 pga høyeste tall er 1 og laveste null. bruker math floor for å runde ned til nærmeste heltall. 
printOut(r); // Skriver ut et tall fra 1 til 360
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const antall_dager3 = 131;
const antall_uker3 = Math.floor(antall_dager3 / 7); // Heltallsdivisjon gir antall uker
const antall_resterende_dager = antall_dager3 % 7; // Modulus gir antall dager som er igjen
printOut("det er "+ antall_uker3 + " uker og "+ antall_resterende_dager + " dager i 131 dager");

printOut(newLine);