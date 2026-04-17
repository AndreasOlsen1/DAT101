"use strict";

//use strict gjør at javascript koden blir strengere og fanger opp langt flere feil. 
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
//her importerer vi tre klasser fra libsprite. Tsprite er vanlige 
//bilder og sprites. TspriteButton er en knapp man kan klikke på.
//tspriteNumber er tall spirtes, Blant annet de som brukes for nedtelling og score 

import { startGame, EGameStatus, hero, obstacles, baits } from "./FlappyBird.mjs";

//her henter vi en metode og et objekt fra flappybirds.mjs. startgame gjør at
//spillet kan starte og egamestatus er et objekt som holder styr på tilstanden
//til spillet. 

import { TSoundFile } from "libSound";

//her importerer vi lydklassen til spillet som brukes til 
//å laste inn og spille av de lydfilene som hører til spillet. 

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

//fnCountDown er en variabel som peker på en nedtellingslyd. 
// fnRunning er en variabel som peker på lyden som kjører når spillet
//kjører. 

export class TMenu{
  //her lages en klasse som heter Tmenu, den eksportes ut slik at den er 
  //tilgjengelig for bruk av andre filer. Denne klassen styrer 
  //alle knappene og teksten for score, nedtelling og lyd. og titler
  //som måtte dukke opp. 
  #spTitle;
  //dette er flapy bird tittelen
  #highScores;
  //dette er en liste som skal inneholde de beste scorene.

  #spPlayBtn;
  //play knappen som man trykker på for å spille. 
  #spCountDown;
  //nedtellingstallene 3,2,1
  #sfCountDown;
  //nedtellingslyden. 
  #sfRunning;
  //bakgrunnslyden når spillet går. 
  #spGameScore;
  //poengsummen som står skrevet ned når man får poeng. 
  #spInfoText;
  //dette er private egenskaper i klassen som betyr at de bare kan 
  //brukes inne i Tmenu. sp står for sprite eller grafikk altså bilder. 
  // sf står for lydfil på engelsk sound file. 
  #spGameOver;
  //dette er en sprite for game over om du taper i spillet. denne lagrer 
  //sprite objektet for gameoverbildet. 
  #spMedal;
  //medaljen som skal ligge oppå game over-brettet. om toppplassering
  //gull, sølv eller bronse medalje. inneholder en medalje sprite. 

  #spFinalScore;
  //viser sluttscore, lager en privat variabel med sluttscore. etter hver runde. 

  #spHighScore;
  //viser high score. Dette er en toppscorer liste som viser hvem som har gjort det best og
  //hvilken score de fikk. lagrer tall spirten for high score.

 



  constructor(aSpcvs, aSPI){
    //konstruktøren kjøres hver gang klassen kalles i et nytt objekt. 
    //aspcvs er spillområdet der det tegnes grafikk. 
    //aspi er et objekt som inneholder et sprite eller bilde som skal brukes

    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    //her lager vi tittelen flappybird, tegner og legger den inn som et sprite
    //element. denne blir plassert øverst på skjermen som et tittel. 
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 220);

    //her lages play knappen og den plasseres litt lenger ned i bildet. 
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    // når play knappen klikkes på kjører vi funksjonen spPlayBtnClick og 
    //bind(this) sørger for at this peker på riktig objekt inne i funksjonen.
    //vi lager denne for å ikke forvirre funksjonen, slik at den vet hvordan den skal fungere.  
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 230);
    //Her brukes tall sprite for nedtelling numberBig gjør at vi får store tall. 
    //

    this.#spCountDown.visible = false;
    //denne er falsk da nedtallingstallet eller tallene skal være skjult i begynnelsen før man 
    //klikker på play. 
    this.#sfCountDown = null;
    // lyden for nedtelling skal settes til null, dvs. at den skal ikke høres før man klikker play. 
    this.#sfRunning = null;
    //ingen running lyd før spillet kjøres. 
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    // her lages poengvisning med små tall, disse vises i toppen av et av hjørnene. 
    this.#spGameScore.alpha = 0.5;
    // her gjør vi endringer på hvordan poengvisningen vises. .alpha = 0.5 betyr at poengvisningen skal 
    //være 50% gjennomsiktig. 
    this.#spInfoText = new TSprite(aSpcvs, aSPI.infoText, 190, 170);
    //her lager man en infotekst som sprite, denne bruker bildet infotext
    this.#spInfoText.index = 0;
    //vi setter denne infotext index lik null. denne brukes når et bilde har flere små bilder inne
    //i det. Så vi skal ha bilde med indext 0. 
    this.#spInfoText.hidden = true;
    // denne gjør at vi skjuler infoteksten i starten av spillet. 

    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 180, 40);
    // game over delen som skal vises i de gitte koordinatene. vi lager et sprite objekt. 
    //bruker bildet gameover for dette.
    this.#spGameOver.hidden = true;
    //denne gjør at den ikke synes i begynnelsen av spillet, men bare når 
    //den skal vises. 

    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 205, 83);
    // medaljen. Denne skal vises når spillet er over typisk i hischore delen. 
    
    this.#spMedal.hidden = true;
    //vises ikke når den ikke skal. 

    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 355, 75);
    // sluttscore ved gameover. vi lager sprite grafikk for sluttscore. 
    //denne vises når vi taper spillet. 
    
    this.#spFinalScore.visible = false;
    //vises ikke når den ikke skal. 

    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 360, 115);
    // high score som vises bare når den skal på de gitte koordinatene.
    //denne lager vi for å vise toppscorerlisten når spillet er over. 
   
    this.#spHighScore.visible = false;

    //vi skjule denne i starten av spillet. 

    this.#highScores = [];

    //vi lager en array som en tom liste for toppscorer fordi denne skal være tom i starten,
    //og fylles opp etter hvert som man spiller og får poengscore.her lagres
    //score etter hver runde. 





  

  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }
  //dette er en metode som gjør at vi kan legge til poengscore. poengscoren økes
  //med det det som legges inn i ascore variablen. 

  showGameOver(){
  this.stopSound();
  //her kjører vi funksjonen som stopper running lyden. 

  this.#spInfoText.index = 1;

  //vi endrer index fordi infoteksten har to bilder, en for ready og en for game over. 
  //nå ønsker vi å bruke den for game over siden spillet et slutt. 

  this.#spInfoText.hidden = false;
//vi setter at den er skult til falsk så dette bildet blir synlig. 

  this.#spGameScore.visible = false;

  //Nå skjules den scoren oppe i venstre hjørnet som vises når du spiller. 
  

  this.#spGameOver.hidden = false;
  //NÅ VISES selve rammen med toppscorer informasjon. Rammebildet. 
  this.#spPlayBtn.hidden = false;
  //nå dukker playknappen opp så du kan starte nytt spill. 
  this.#spMedal.hidden = false;
  //nå dukker medljen som du skal ha opp. 
  this.#spFinalScore.visible = true;
  //nå dukker spriten med riktig score opp for det ressultatet du oppnådde. 
  this.#spHighScore.visible = true;
  //Nå dukker spriten med toppscorer opp. 
  

  const score = this.#spGameScore.value;
  //henter nåværende score og lagrer denne i en variabel som heter score. 


this.#highScores.push(score);
// vi legger til en ny score i liste med highscores. 


this.#highScores.sort((a, b) => b - a);
//vi sorterer listen fra høyeste til laveste score. 


const highScore = this.#highScores[0];
//vi henter beste score i listen, som er første elementet i listen etter
//sortering. 

// sett verdier på skjermen
this.#spFinalScore.value = score;
this.#spHighScore.value = highScore;

//vi henter informasjonen om score og highscore og legger til den verdien vi skal 
//vise på rammen for gameover. 

  if(this.#spGameScore.value >= 3){
    this.#spMedal.index = 2;
  }
  else if(this.#spGameScore.value == 2){
    this.#spMedal.index = 1;
  }
  else if(this.#spGameScore.value == 1){
    this.#spMedal.index = 0;
  }
  else{
    this.#spMedal.hidden = true;
  }
}

// vi kjører en if og else setning som sier at dersom man har mer enn 3 i score så får du gull
//dersom du har 2 så får du sølv, og dersom du har 1 så får du bronse. dersom du ikke har noen poeng så får du ingen medalje og da skjuler vi medaljen.

  setSoundMute(aIsMuted){
    //LAGER EN funksjon som kjører musikk dersom vi har ikke huket av mute
    //dersom den er huket av er aIsMuted=truem og da sjekker vi om ulike lyder er 
    //ikke like ingenting og dersom de er det, da pauser vi lyden. hvis false så spiller vi
    //av lyden. 
  if(aIsMuted){
    if(this.#sfRunning !== null){
      this.#sfRunning.pause();
    }
    //dersom sfRunning ikke er ingenting så pauser vi lyden. 

    if(this.#sfCountDown !== null){
      this.#sfCountDown.pause();
      //samme prinsipp med nedtellingslyden. 
    }
  }
  else{
    if(this.#sfRunning !== null){
      this.#sfRunning.play();}
      //den vanlige spillelyden fortsetter når aismuted = false. 
    if(this.#sfCountDown !== null && this.#spCountDown.visible){
      this.#sfCountDown.play();
      //her sjekker vi om nedtellingslyden ikke er lik null og nedtellignen
      //er synlig. hvis begge disse er tilfellet så fortsetter lyden. 
      //spCountDown handler om at det vi ser av nedtellingsgrafikk. 
    
    }
  }
}

  stopSound(){
    this.#sfRunning.stop();
  }

//vi lager en metode som er en slags indre funksjon som brukes til å stoppe running lyden. 
//altså avspillingen av denne lyden. De må være når man dør i spillet. 

  draw(){
    this.#spTitle.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spInfoText.draw();
    this.#spGameOver.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spHighScore.draw();
    this.#spPlayBtn.draw();
  }

  //dette er en metode som tegner alt som tegnes på skjermen av alementer fra menyen. 
  //dvs. tittel, play knapp, nedtelling, poeng, tekst. 


  countDown(){
  this.#spCountDown.value--;
  console.log("Nedtelling:", this.#spCountDown.value);

  //dette er en metode for å telle ned fra 3 til 0, det trekkes fra  en på verdien
  //av variablen spCountDown.value. 

  if(this.#spCountDown.value > 0){
    setTimeout(this.countDown.bind(this), 1000);  
  }else{
    console.log("Nedtelling ferdig");
    this.#spCountDown.visible = false;
    this.#spInfoText.hidden = true;

    console.log("Lager running-lyd");
    this.#sfRunning = new TSoundFile(fnRunning);

    console.log("Prøver å spille running-lyd");
    this.#sfRunning.play();

    startGame();
  }

  //dersom nedtellingen er større enn 0 så kjører nedtellingen igjen med ett sekunds ventetid. 
  //countdown bind sørger for at this peker på riktig objekt. nå nedtellingen er ferdig
  //nedtellingstallet forsvinner, infoteksten forsvinner, running lyden starter og spillet starter.
}

  spPlayBtnClick(){
  console.log("Play-knapp trykket");

  hero.restart();
  //når vi klikker på play knappen så kjører vi funksjonen restart, da kommer
  //fugles tilbake til gammel posisjon slik spillet var til å begynne med. 
  obstacles.length = 0;
  //vi fjerner listen med hindre slik at de gamle hindrene ikke er der
  //når vi starter spillet på nytt.
  baits.length = 0;
  //vi fjerner listen med matbiter slik at de gamle matbitene ikke er der og sommer
  //fuglene ikke er der heller. 
  this.#spGameScore.value = 0;
  //vi setter score tilbake til null. 



  EGameStatus.state = EGameStatus.countDown;

  //metode for å starte nedtelling og som kjøres når man klikker på playknappen. 
  //her endrer vi gamestatus til nedtelling, slik at spillet vet at det skal starte nedtelling.

  this.#spPlayBtn.hidden = true;
  this.#spTitle.hidden = true;
  this.#spGameOver.hidden = true;
  this.#spMedal.hidden = true;
  this.#spFinalScore.visible = false;
  this.#spHighScore.visible = false;
  this.#spInfoText.hidden = false;
  this.#spCountDown.visible = true;
  this.#spCountDown.value = 3;
  this.#spInfoText.index = 0;

  //vi skjuler da playknappen, vi skjuler tittelen, vi viser infoteksten get ready ved å putte index null og vise det, gameover elementene. Vi viser nedtellingstallet og setter det til 3.

  console.log("Lager countdown-lyd");
  this.#sfCountDown = new TSoundFile(fnCountDown);

  // vi lager countdownlyden som brukes til å telle ned før spillet starter. 

  console.log("Prøver å spille countdown-lyd");
  this.#sfCountDown.play();

  //vi kjører countdownlyden. 

  setTimeout(this.countDown.bind(this), 1000);

  //vi starter nedtellingen med ett sekunds ventetid. 

}

}