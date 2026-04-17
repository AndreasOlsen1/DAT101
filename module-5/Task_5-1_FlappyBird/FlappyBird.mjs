"use strict";
// Import necessary modules
import { TSpriteCanvas } from "libSprite";
import { TBackground } from "./background.js";
import { THero } from "./hero.js";
import { TObstacle } from "./obstacle.js";
import { TBait } from "./bait.js";
import { TMenu } from "./menu.js";

//--------------- Objects and Variables ----------------------------------//
const chkMuteSound = document.getElementById("chkMuteSound");
const rbDayNight = document.getElementsByName("rbDayNight");
//her kobler vi variabelene rbDayNight meed elementet rbDayNight
//i html dokumentet som er to radioknapper for dag og natt. 

const cvs = document.getElementById("cvs");
//vi kobler en variabel cvs til elementet cvs i html dokumentet
//der vi skal tegne. 

let menuShown = false;
//dette er en variabel som brukes for å sjekke om gameover menyen ikke
//blir vist når man ikke er død. men mens man er død så skal den bli vist. 

const spcvs = new TSpriteCanvas(cvs);
//vi lager et objekt basert på obskriften TSpriteCanvas med masse bilder. 
//der vi putter inn den koblede delen av html dokumentet. 

// prettier-ignore
const SpriteInfoList = {
  hero1:        { x: 0   , y: 545 , width: 34   , height: 24  , count: 4  },
  hero2:        { x: 0   , y: 569 , width: 34   , height: 24  , count: 4  },
  hero3:        { x: 0   , y: 593 , width: 34   , height: 24  , count: 4  },
  obstacle:     { x: 0   , y: 0   , width: 52   , height: 320 , count: 4  },
  background:   { x: 246 , y: 0   , width: 576  , height: 512 , count: 2  },
  flappyBird:   { x: 0   , y: 330 , width: 178  , height: 50  , count: 1  },
  ground:       { x: 246 , y: 512 , width: 1152 , height: 114 , count: 1  },
  numberSmall:  { x: 681 , y: 635 , width: 14   , height: 20  , count: 10 },
  numberBig:    { x: 422 , y: 635 , width: 24   , height: 36  , count: 10 },
  buttonPlay:   { x: 1183, y: 635 , width: 104  , height: 58  , count: 1  },
  gameOver:     { x: 0   , y: 384 , width: 226  , height: 114 , count: 1  },
  infoText:     { x: 0   , y: 630 , width: 200  , height: 55  , count: 2  },
  food:         { x: 0   , y: 696 , width: 70   , height: 65  , count: 34 },
  medal:        { x: 985 , y: 635 , width: 44   , height: 44  , count: 4  },
};

//dette er et objekt som sier hvor de ulike bildene til spillet
//skal plasseres. men også hvor mange det er av dem. obstacle har count 4, dvs 4
//bilder med obstacles. background har count 2 og det er to indekser 
//i kategorien under navnet background. 

export const EGameStatus = { idle: 0, countDown: 1, gaming: 2, heroIsDead: 3, gameOver: 4, state: 0 };
//Dette objektet gjør at vi kan holde styr på hvor man er i spillet. idle betyr at spillet venter. 
//gaming betyr at spillet kjører, heroisdead betyr at helten er død og gameover betyr at runden er ferdig. 
export let soundMuted = false;
//denne export betyr at andre javascriptfiler som brukes i spillet 
//også kan bruke denne variabelen. Vi lager en variabel for at
//vi ønsker å lagre sant eller usant ettersom at lyden blir muted er sant
//og at lyden er ikke muted er usant. Dette for å kontrollere mekanismen.
//vi setter den til å være usant siden de ikke er muted i starten av 
//spillet.  

let isDayMode = true;
//Denne variabelen brukes for å holde styr på om det er dag eller natt i spillet. 
//true betyr dag og false betyr natt. 

const background = new TBackground(spcvs, SpriteInfoList);
//lager bakgrunnen til spillet ved klassen TBackground.
export const hero = new THero(spcvs, SpriteInfoList.hero1);
//lager helten eller fuglen i spillet og eksporterer den slik at flere filer kan bruke den.
export const obstacles = [];
//lager en liste der vi lagrer alle hindringer som opprettes i spillet. 
export const baits = [];
//vi lager en liste som lagrer alle matbitene som oprettes i spillet. 
export const menu = new TMenu(spcvs, SpriteInfoList);
//lager et objekt med obskriften Tmenu som man finner i menu.js. 
//denne kan brukes i andre javascript også. 



let obstaclePassed = false;

//Denne bruker vi for å passe på at man bare får ett poeng per hindring. Når man passerer en hindring så setter vi denne til true, og når det kommer en ny hindring så setter vi den tilbake til false. På den måten kan man bare få ett poeng per hindring.

//--------------- Functions ----------------------------------------------//
export function startGame() {
  //dette er en funksjon som starter hele spillet. 
  menuShown = false;
  //vi setter Menushown til false slik at gameover menyen ikke blir vist når vi starter spillet 
  //på nytt igjen. 
  //EGameStatus.state = EGameStatus.gaming; vi setter spillet til gaming og 
  //hindringer og mat begynner å dukke opp hvert sekund. 
  EGameStatus.state = EGameStatus.gaming;
  setTimeout(spawnObstacle, 1000);
  setTimeout(spawnBait, 1000);
}

function spawnBait() {
  //denne funksjonen lager nye matbiter så lenge spillet er i gang. Vi legger 
  //hver baits inn i listen med baits og disse kommer i tilfeldig tid. 
  if (EGameStatus.state === EGameStatus.gaming) {
    const bait = new TBait(spcvs, SpriteInfoList.food);
    //vi lager et nytt matbit objekt som er en sprite. 
    baits.push(bait);
    //denne legger vi over i listen med matbiter. 
    const nextTime = Math.ceil(Math.random() * 3) + 1;

    //lager er tilfeldig tall mellom 2 og 4 som brukes til å bestemme
    //hvor  mange sekunder det skal gå til neste matbit kommer. 
    setTimeout(spawnBait, nextTime * 1000);
  }
}

function spawnObstacle() {
  if (EGameStatus.state === EGameStatus.gaming) {
    const obstacle = new TObstacle(spcvs, SpriteInfoList.obstacle, isDayMode);
    obstacles.push(obstacle);
    const nextTime = Math.ceil(Math.random() * 3) + 1;
    setTimeout(spawnObstacle, nextTime * 1000);
  }
}

//funksjonen lager en ny hindring så lenge spillet er i gang. 

function animateGame() {
  hero.animate();
  let eaten = -1;
  for (let i = 0; i < baits.length; i++) {
    const bait = baits[i];
    bait.animate();
    if (bait.distanceTo(hero.center) < 20) {
      eaten = i;
    }
  }
  if (eaten >= 0) {
    console.log("Eaten!");
    baits.splice(eaten, 1);
    hero.eat();
  }

  if (EGameStatus.state === EGameStatus.gaming) {
    background.animate();
    let deleteObstacle = false;
    for (let i = 0; i < obstacles.length; i++) {
      const obstacle = obstacles[i];
      obstacle.animate();
      if (obstacle.x < -50) {
        deleteObstacle = true;
        obstaclePassed = false;
      }else if((obstacle.x + obstacle.width) < hero.x){
        if(!obstaclePassed){
          menu.incGameScore(1);
          obstaclePassed = true;
        }
      }
    }
    if (deleteObstacle) {
      obstacles.splice(0, 1);
    }
  }
  if (EGameStatus.state === EGameStatus.gameOver && menuShown === false) {
  menu.showGameOver();
  menuShown = true;

}
console.log("hero.isDead =", hero.isDead);
}

//denne funksjonen oppdaterer og styrer spillets bevegelser. 

function drawGame() {
  background.drawBackground();
  for (let i = 0; i < baits.length; i++) {
    const bait = baits[i];
    bait.draw();
  }

  for (let i = 0; i < obstacles.length; i++) {
    const obstacle = obstacles[i];
    obstacle.draw();
  }
  hero.draw();
  background.drawGround();
  menu.draw();
}

//denne funksjonen tegner alt av elementer som vises på spillet. 

function loadGame() {
  console.log("Game Loaded");
  // Set canvas size to background size
  cvs.width = SpriteInfoList.background.width;
  cvs.height = SpriteInfoList.background.height;

  // Overload the spcvs draw function here!
  spcvs.onDraw = drawGame;

  //Start animate engine
  setInterval(animateGame, 10);
} // end of loadGame

function onKeyDown(aEvent) {
  switch (aEvent.code) {
    case "Space":
      console.log("Space key pressed, flap the hero!");
      if (EGameStatus.state !== EGameStatus.heroIsDead) {
        hero.flap();
      }
      break;
  }
} // end of onKeyDown

function setSoundOnOff() {
  //vi ønsker å lage en funksjon som skrur på eller av lyden
  //avhengig om man huker av på denne på html dokumentet. 
  //denne kaller vi på når avhukningen i checkboxen endres. 
  soundMuted = chkMuteSound.checked;
  //chkMuteSound er en variabel definert tidligere i dokumentet, som
  //kobles til html elementet chkMuteSound. Dette er en avhukningsboks 
  // med tittel mute sound. denne skal brukes til å kontrollere om 
  //lyden skal være på eller av. .checked sjekker om den er huket av og 
  //retunerer true er det fordi den er huket av. False dersom den ikke er 
  //huket av. 
  menu.setSoundMute(soundMuted);
  //vi sakl bruke objektet menu og kjøre metoden setSoundMute, med
  //verdien soundMuted. For at dette skal virke må metoden setSoundMute 
  //være definert i menu. 

  console.log(`Sound muted: ${soundMuted}`);
} 





function setDayNight(aEvent) {
  if(!aEvent.target.checked){
    return;
  }

  //denne tar en parameter som trigges av en event listener,
  //dvs. at den sender ut informasjon som legges i parameteret 
  //aEvent om hva slags event som ble foretatt. aEvent.target gir
  //beskjed om hvilken knapp som ble klikket på. aEvent.target.checked
  //forteller om radioknappen faktisk ble valgt. Hvis ikke skjer det ingenting. 


  isDayMode = (aEvent.target.value == 1);
  //vi endrer en variabel som sjekker om det er dagmode eller nattmode. 
  //aEvent.target.value gir ut 1 om det er dag og null om det er natt. 
  //denne returnerer sant om det er dag go falskt om det er natt. 
  background.setDayNight(isDayMode);
  //vi har laget et objekt basert på oppskriften til background.js og
  //klassen TBackground fra denne filen. fra denne klassen finner
  //vi metoden setDayNight der vi legger inn sant eller usant for om 
  //det er dag eller natt. Dersom sant og dag velger vi bildet med dag i
  //bakgrunnen og om falskt får vi bildet med natt. 

  console.log(`Day mode: ${isDayMode}`);
} // end of setDayNight

//--------------- Main Code ----------------------------------------------//
chkMuteSound.addEventListener("change", setSoundOnOff);
//dersom vi endrer på avhuk og påhuk av knappen for å mute og ikke
//mute da kjører vi funksjonen setSoundOnOff som skrur av og på 
//sangen for spillet. 
rbDayNight[0].addEventListener("change", setDayNight);
//rbDayNight[0] 0 betyr først elementet i en liste av to radioknapper. 
//dersom det blir endringer i avhukning på denne knappen 
//da kjører vi funksjonen setDayNight. 
rbDayNight[1].addEventListener("change", setDayNight);
// samme som over bare at dette er en annen radioknapp med 
//indeks 1. så knapp nummer 2. 

// Load the sprite sheet
spcvs.loadSpriteImage("./Media/FlappyBirdSprites.png", loadGame);
document.addEventListener("keydown", onKeyDown);
