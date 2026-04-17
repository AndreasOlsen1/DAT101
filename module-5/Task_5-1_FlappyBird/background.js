"use strict";
import { TSprite } from "libSprite";

export class TBackground{
  #spriteBackground;
  #spriteGround;

  constructor(aSpcvs, aSPI){
    this.#spriteBackground = new TSprite(aSpcvs,aSPI.background,0,0);
    const groundPosY = aSPI.background.height - aSPI.ground.height;
    this.#spriteGround = new TSprite(aSpcvs, aSPI.ground, 0, groundPosY);
  }

  drawBackground(){
    this.#spriteBackground.draw();
  }
  //denne bakgrunnen tegnes hele tiden. den er først på indeks 0.
  //men om vi endrer på dette tegner den den nye bakgrunnen. 
  //det finnes to bilder av samme bakgrunn. #spriteBackground.draw
  //refererer til to bilder. men den er på den indeksen den er tildelt. 
  

  setDayNight(aIsDayMode){
  if(aIsDayMode){
    this.#spriteBackground.index = 0;  // day
  }
  else{
    this.#spriteBackground.index = 1;  // night
  }
  //det finnes to bilder for bakgrunn. en for dag og en for natt. 
  //indeksen forteller hvilket av bakgrunnene vi skal bruke. 
  //siden spriteBackground er en gruppe av to spritesheett, to bakgrunner. 
  //det finnes mange spritebackgrounds i flappybirdsprites.png, der vi kaller
  //på indekser for å finne det riktige bildet. 

}



  drawGround(){
    this.#spriteGround.draw();
  }

  animate(){
    const x = this.#spriteGround.x + (this.#spriteGround.width / 2);
    if(x < 5){
      this.#spriteGround.x = 0;  
    }else{
      this.#spriteGround.x--;
    }
  }
}


