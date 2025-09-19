"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

exampleFunction();

function exampleFunction() {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    //lager oprions som skal brukes i toLocateDateString for at long skal bety hele ordet, short forkortet versjon, numeric bare tall og 2 digit betyr tosifret tall i stedet for ett. 

    const today = new Date(); // lager et nytt dato-objekt. denne henter datoen akkurat nå new dat(), slik at når man bruker tolocate DateString, så putter man denne datoen inn der, sammen med option bestemmelser og at det skal være norsk dato. 

    const norskdato = today.toLocaleDateString('no-NB', options); //buker no-NB for å få norsk dato, og options riktig for å få ukedag,måned, år og dag. 
    printOut(norskdato);
}
 

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
exampleFunction2();

function exampleFunction2() {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    //lager oprions som skal brukes i toLocateDateString for at long skal bety hele ordet, short forkortet versjon, numeric bare tall og 2 digit betyr tosifret tall i stedet for ett. 

    const today2 = new Date(); // lager et nytt dato-objekt. denne henter datoen akkurat nå new dat(), slik at når man bruker tolocate DateString, så putter man denne datoen inn der, sammen med option bestemmelser og at det skal være norsk dato. 

    const norskdato2 = today2.toLocaleDateString('no-NB', options); //buker no-NB for å få norsk dato, og options riktig for å få ukedag,måned, år og dag. 
    printOut(norskdato2);
    return today2; //dette gjør jeg for at vi kan bruke datoens egenskaper videre
}

const today3 = exampleFunction2(); // får ut verdien som returneres når funksjonen kjører. dette er  dagen i dag. 
dager_til_2XK0(today3); // kjører ny funksjon der parameteret today3 bruker variabelen today3. 

function dager_til_2XK0(today3){
    const lanseringsdato = new Date(2025, 4, 14)
    //den nye datoen blir manuelt satt til 2025, 4 er mai pga 0 indeksering og 14 er antall dager ut i mai. 

    const forskjell_i_millisekunder = lanseringsdato - today3;
    //nå ser vi på forskjell i tid mellom lanseringsdatoen og nå, dette måles i default som millisekunder.

    const forskjell_i_dager = Math.ceil(forskjell_i_millisekunder/(1000*60*60*24));
    //bruker math.ceil for å runde desimaltall opp til heltall. da 0.4 dager blir 1 dag. og 2.6 dager blir 3 dager. Deler på
    //1000 for å få sekunder, 60 for min, og 60 for time og 24 for dager. 
    printOut("det er " + forskjell_i_dager + " dager til lanseringen av 2XKO ")
    return forskjell_i_dager;
    
}




printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const radius = 5;
kalkulator(radius); // kaller på funksjonen der man setter inn radius variabelen som første parameter. 



function kalkulator(radius){
    const diameter = radius*2;
    const omkrets = radius*2*Math.PI;
    const areal = Math.PI*radius**2;
    printOut("Diameter er " + diameter);
    printOut("omkrets er " + omkrets);
    printOut("areal er " + areal);


}
//lager funksjon der jeg definerer variabler med diameter, onkrets og areal og regner ut hva dette blir når jeg bruker radius. 


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const lengde = 2;

const bredde = 5;

kalkulator2(lengde, bredde);



function kalkulator2(lengde, bredde){
    const omkrets2 = 2*lengde + 2*bredde;
    const areal2 = lengde * bredde
    printOut("Omkretsen av rektangelet er " + omkrets2);
    printOut("Arealet av rektangelet er " + areal2);

}
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const temperatur_K = "K"; // k for kelvin, C for celsius og F for Fahrenheit. 

const temperatur_C = "C";

const temperatur_F = "F";

const antall_grader = 15;

const antall_grader2 = 100;

const antall_grader3 = 30;

konvertering(antall_grader, temperatur_C);
konvertering(antall_grader2, temperatur_F);
konvertering(antall_grader3, temperatur_K);

function konvertering(temperatur, temperatur_id){
    
    if (temperatur_id === "K"){
        const kelvin_celsius = temperatur - 273.15; // for å finne hvor mange grader kelvin er i celsius
        const kelvin_fahrenheit = (temperatur - 273.15)*(9/5)+32;
        printOut("Din innsendte temeperatur er " + temperatur + " grader Kelvin")
        printOut("temperaturen din i kelvin er også " + kelvin_celsius + " grader Celsius");
        printOut("temperaturen din i kelvin er også " + kelvin_fahrenheit + " grader Fahrenheit")
        

    }

    else if (temperatur_id === "C"){
        const celsius_kelvin = temperatur + 273.15;
        const celsius_fahrenheit =  (celsius_kelvin -273.15)*(9/5)+32;
        printOut("Din innsendte temeperatur er " + temperatur + " grader Celsius")
        printOut("temperaturen din i Celsius er også " + celsius_kelvin + " grader Kelvin");
        printOut("temperaturen din i Celsius er også " + celsius_fahrenheit + " grader Fahrenheit")

    }

    else {
        const fahrenheit_celsius = (temperatur-32)*(5/9);
        const fahrenheit_kelvin = fahrenheit_celsius + 273.15;
        printOut("Din innsendte temeperatur er " + temperatur + " grader Fahrenheit")
        printOut("temperaturen din i Fahrenheit er også " + fahrenheit_kelvin + " grader Kelvin");
        printOut("temperaturen din i Fahrenheit er også " + fahrenheit_celsius + " grader Celsius")
    }

    printOut(newLine);

}






printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const pris1 = 100;
const momstype1 = "normal";

const pris2 = 150;
const momstype2 = "food";

const pris3 = 50;
const momstype3 = "hotel";

const pris4 = 10000;
const momstype4 = "drugs";

kalkulator_pris_u_moms(pris1, momstype1);
kalkulator_pris_u_moms(pris2, momstype2);
kalkulator_pris_u_moms(pris3, momstype3);
kalkulator_pris_u_moms(pris4, momstype4);


function kalkulator_pris_u_moms(pris_m_moms, moms_gruppe){
    const taxgruppe = moms_gruppe.toLowerCase(); //dette gjør alt om til små bokstaver og det er derfor ikke case sensitivt.  

    if (taxgruppe === "normal"){
        let vekstfaktor = 1.25;
        let pris_u_moms = pris_m_moms/vekstfaktor;
        printOut(pris_m_moms+ " kr med " + taxgruppe + " koster " + pris_u_moms + " uten moms.")
    }
    else if(taxgruppe === "food"){
        let vekstfaktor = 1.15;
        let pris_u_moms = pris_m_moms/vekstfaktor;
        printOut(pris_m_moms+ " kr med " + taxgruppe + " koster " + pris_u_moms + " uten moms.")
    }
    else if (taxgruppe === "hotel" || taxgruppe === "transport" || taxgruppe === "cinema"){
        let vekstfaktor = 1.10;
        let pris_u_moms = pris_m_moms/vekstfaktor;
        printOut(pris_m_moms+ " kr med " + taxgruppe + " koster " + pris_u_moms + " uten moms.")
    }
    else {
        printOut(momstype4+ " er Unknown Vat group")
    }

    }



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const tid_i_timer1 = 100;
const distanse_i_kilometer_1 = 20;

const tid_i_timer2 = 50;
const fart_i_km_per_time = 50;

const distanse_i_kilometer_3 = 30;
const fart_i_km_per_time3 = 100;

farts_formel(undefined, distanse_i_kilometer_1, tid_i_timer1);
farts_formel(fart_i_km_per_time, undefined, tid_i_timer2);
farts_formel(fart_i_km_per_time3, distanse_i_kilometer_3, undefined);
farts_formel(undefined, distanse_i_kilometer_3, undefined);

function farts_formel(fart, distanse, tid){
    if (fart === undefined && distanse === undefined || distanse === undefined && tid == undefined ||fart === undefined && tid === undefined){
        printOut("Nan")
        return NaN;
    }
    
    else if (fart === undefined){
        let hastighet = distanse/tid;
        printOut("farten er " + hastighet + " km/t" )
    }
    else if (distanse === undefined){
        let distanse2 = fart*tid;
        printOut("distansen din er " + distanse2 + " km.") 
    }
        
    else{
        let tid2 = fart/distanse;
        printOut("tiden er " + tid2 + " timer.")
    }
        
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const tekst = "halloen";
const Max_lengde = 5;
const spesialtegn = "$";
const boolean1 = true;

sjekk_lengde_streng(tekst, Max_lengde, spesialtegn, boolean1);

function sjekk_lengde_streng(tekst, Max_lengde, spesialtegn,boolean1){
    let igjen_av_tegn = Max_lengde - tekst.length;
    if (igjen_av_tegn < 0){
        if (boolean1 === true){
            let nytt_ord = spesialtegn + tekst;
            printOut(nytt_ord);
        }
        else{
            let nytt_ord = tekst + spesialtegn;
            printOut(nytt_ord);
        }
    } else {
        let nytt_ord = tekst;
        printOut(nytt_ord);
    } 
    printOut(newLine);
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
function testMaths() {
    let antall_ganger_fungerer_ikke = 0; // lager en variabel som teller hvor mange ganger dette ikke fungerer. 
    let nesteTall = 1; // lager en variabel med neste tall siden algoritmen alltid regner ett tall fremmover både på høyre og venstre side. 

    for (let line = 1; line <= 200; line++) {
        let venstre_side = [];
        let hooyre_side = [];

        //lager en for løkke som regner seg 200 linjer fram og tømmer listene for hver gang. 

        // fyll venstre side (line + 1 tall)
        for (let i = 0; i < line + 1; i++) {
            venstre_side.push(nesteTall++);
        }
        //man kjører en for løkke så mange linjer fram som vi er kommet pluss 1. Det er fordi venstre side skal ha ett ekstra tall i forhold til høyre side. 
        // man legger til neste tall økt med 1 for hver gang vi kjører loopen. Så neste tall endrer seg. 
        // fyll høyre side (line tall)
        for (let i = 0; i < line; i++) {
            hooyre_side.push(nesteTall++);
        }

        //vi gjør det samme her, bare at vi har et tall mindre. neste tall øker med en og man legger til et tall mindre enn på venstre side. 



        let sumVenstre = venstre_side.reduce((a, b) => a + b, 0);
        //vi summerer tallene i listen venstre side og lager en variabel med denne summen. 
        //printOut(sumVenstre);
        
        printOut(venstre_side.join("+"));

        // vi printer ut alle elementene i venstre side listen og legger + mellom hver av dem. 

        let sumHooyre = hooyre_side.reduce((a, b) => a + b, 0);
        
        // summerer alle elementene i høyre side listen. dette blir en variabel. 
        
        //printOut(sumHooyre);
        
        printOut(hooyre_side.join("+"));
        //vi printer ut alle elementene i høyre side listen og legger + mellom hver av dem. 

        


        if (sumVenstre !== sumHooyre) {
            antall_ganger_fungerer_ikke++;
            printOut("Feil på linje " + line + ": " + venstre_side.join("+") + " er ikke lik " + hooyre_side.join("+"));
        }

        //dersom summen på høyre og venstre side listene ikke er like får vi beskjed om hvilke det er og hvilken linje de er på. 
        //vi får også beskjed om hvilke summer som ikke er like etter systemet vårt. 

        if (line === 200 && antall_ganger_fungerer_ikke === 0) {
            printOut(newLine);
            printOut("Maths fun!");
        }
    } //dersom det alltid har fungert og vi er på linje 200 skriver den ut at matte er gøy
}

testMaths();


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const tilfeldig_nummer = 4;

let sum = tilfeldig_nummer;

for (let i =tilfeldig_nummer-1; i > 0; i--){
    sum =sum * i;
};

printOut( "Factorial ("+ tilfeldig_nummer+ ") er "+ sum);


printOut(newLine);
