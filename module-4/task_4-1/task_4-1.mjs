"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Task 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const accounttype = {
    Normal: "Brukskonto",
    Savings: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonskonto"
}

printOut(accounttype.Normal + ", " + accounttype.Savings + ", "+ accounttype.Credit +", "+ accounttype.Pension);
//har laget et objekt med ulike properties som er små variabler(ikke ekte variabler, må kalles på på en annen måte), med innhold som vi kan bruke. 
printOut(newLine);

const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TAccount {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;
     #currencyTypeCode;
    constructor(type, balance){
        this.#type = type;
        this.#balance = balance;
        this.#withdrawCount = 0;
        this.#currencyType = CurrencyTypes.NOK;
        this.#currencyTypeCode = "NOK";
    }
    //har laget en klasse som heter TAccount. en oppskrift på hvordan en konto skal fungere. 
//contruktor er en funksjon som kjører automatisk når vi bruker klassen. 
//brukes til å gi startverdier blant annet.  klassen tildeles en variabel senere, som
//gir variabelen ulike egenskaper. klassen forblir uberørt, men variabelen kan 
// ses på som et objekt med ulike egenskaper tildelt fra klassen. Setter alle parametrene privat
//folk kan ikke utenfra tukle med disse parametrene. 


    #convert(amount, fromCode, toCode){
        const amountNOK = amount / CurrencyTypes[fromCode].value;
        return amountNOK * CurrencyTypes[toCode].value;
    }
    


    toString(){
        printOut("MyAccount = " + this.#type);
        return this.#type;
    }    
    //en slags funksjon inne i klassen. Den kalles da en metode. returnerer egenskapene 
    //til perameteret type. 

    setType(newType){
        printOut("Account is changed from " + this.#type + " to " + newType);
        this.#type = newType;
        printOut("MyAccount is " + this.#type);
        this.#withdrawCount = 0;
    }
    
    getBalance(){
  printOut("My Account balance is " + this.#balance.toFixed(2) + " " + this.#currencyType.denomination);
}
    getBalanceIn(currencyCode){
  // saldo (i kontoens valuta) -> currencyCode
  return this.#convert(this.#balance, this.#currencyTypeCode, currencyCode);
  // Denne er for å sjekke hvor mye saldoen er i en annen valuta. Vi konverterer først saldoen til NOK, og deretter til ønsket valuta.
}


    setCurrencyType(currencyCode) {
    // 1. Sjekk om valuta finnes
    if (!CurrencyTypes[currencyCode]) {
        printOut("Invalid currency type");
        return;
    }

    // 2. Hvis samme valuta, gjør ingenting
    if (this.#currencyType === CurrencyTypes[currencyCode]) {
        return;
    }

    const oldName = this.#currencyType.name;

    // 3. Konverter saldoen fra gammel til ny valuta
    // Formelen: nySaldo = gammelSaldo * (ny value / gammel value)
    this.#balance = this.#balance * (CurrencyTypes[currencyCode].value / this.#currencyType.value);

    // 4. Oppdater valutaen
    this.#currencyType = CurrencyTypes[currencyCode];

    this.#currencyTypeCode = currencyCode;
    //her legger vi inn koden for currency type f.eks NOK. 



    // 5. Vis melding
    printOut(`Currency changed from ${oldName} to ${this.#currencyType.name}`);
    this.getBalance();
}


    Deposite(aAmaunt, Currency = "NOK"){
  const amountInAccountCurrency = this.#convert(aAmaunt, Currency, this.#currencyTypeCode);
  this.#balance += amountInAccountCurrency;
  this.#withdrawCount = 0;

  printOut(
    "Deposite of " + aAmaunt.toFixed(2) + " " + CurrencyTypes[Currency].name +
    ", New balance is " + this.#balance.toFixed(2) + " " + this.#currencyType.denomination
  );
}

    Withdrawel(aAmaunt, Currency = "NOK") {

  // Regler for konto-typer (som du allerede har)
  switch (this.#type) {
    case "Pensjonskonto":
      printOut("You cant withdraw from " + this.#type);
      return;

    case "Sparekonto":
      if (this.#withdrawCount >= 3) {
        printOut("You cant withdraw from a " + this.#type + " more than 3 times");
        return;
      }
      break;
  }

  // Konverter uttaket fra Currency -> kontoens valuta. Vi må gjøre sånn at det vi trekker fra trekkes fra i kontoens valutta. 
  const amountInAccountCurrency = this.#convert(aAmaunt, Currency, this.#currencyTypeCode);

  // Trekk fra
  this.#balance -= amountInAccountCurrency;
  this.#withdrawCount += 1;

  // Snap-to-zero så du slipper -0.00 / små desimalrester
  if (Math.abs(this.#balance) < 0.005) this.#balance = 0;

  // Print i kontoens valuta (ikke alltid NOK!)
  printOut(
    "Withdrawel of " + aAmaunt.toFixed(2) + " " + CurrencyTypes[Currency].name +
    ", new balance after withdrawel is " + this.#balance.toFixed(2) + " " + this.#currencyType.denomination
  );
}}



    

const myAccount = new TAccount("Brukskonto", 0);

//Her lager vi et objekt av klassen TAccount. Vi kaller objektet myAccount. 
//Når vi lager objektet, må vi gi den en startverdi for perameteret type, 
//som er "Brukskonto" her. Dette gjør at vi får alle klassenegenskaper med oss
// i dette objektet der this.type = "Brukskonto".


myAccount.toString();

// vi kjører metoden i klassen tildelt obektet hvilket gjør at vi printer ut 
// hvilken type konto det er snakk om som er this.type. 
myAccount.setType("Sparekonto");
// Her setter vi inn et en egenskap til parameteret NewType, som vi kaller for 
// Sparekontom, det vil si at dette blir verdien til dette parameteret 
//SOm vi kjører og det vil si at vi skriver at vi endrer fra this.type som er brukskonto, 
//og endrer til parameteret new.type som er sparekonto. Deretter endrer vi this.type
// til new type og printer ut den nye verdien av this.type.

    



printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

/* Put your code below here!*/
 myAccount.Deposite(100);
 myAccount.Withdrawel(25);
 myAccount.getBalance();

 //kjører de 3 nye metodene i variabelen tildelt klassen med metodene. Dette gjør
 //at vi setter inn 100, trekker fra 25 og får balansen til slutt. Vi kjører tre metoder tildelt klassen
 // som tildeler egenskaper til objektet eller variabelen som vi gammeldags kaller det.





printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.Deposite(25);

myAccount.Withdrawel(30);
myAccount.Withdrawel(30);
myAccount.Withdrawel(30);
myAccount.Withdrawel(30);  // nå skal vi ikke kunne ta uttak. 

myAccount.setType("Pensjonskonto");
myAccount.Withdrawel(10);      //skal ikke gå

myAccount.setType("Sparekonto");
myAccount.Withdrawel(10);      //skal gå//nå skal det gå igjen da vi er tilbake og hart resettet sparekontoen. 

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



myAccount.Deposite(150);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

myAccount.setCurrencyType("USD");
myAccount.setCurrencyType("EUR");
myAccount.setCurrencyType("GBP");
myAccount.setCurrencyType("INR");
myAccount.setCurrencyType("NOK");







printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.Deposite(12, "USD")

myAccount.Withdrawel(10, "GBP");

myAccount.setCurrencyType("CAD");

myAccount.setCurrencyType("INR");

const restSEK = myAccount.getBalanceIn("SEK");
//lager denne for å sjekke saldoen på kontoen i SEK og deretter bruker denne verdien til å tømme kontoen for penger. 

myAccount.Withdrawel(restSEK, "SEK");



printOut("Replace this with you answer!");
printOut(newLine);
