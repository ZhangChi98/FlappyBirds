//开始游戏类
import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

export class StartButton extends Sprite {
  constructor() {
    
    const image = Sprite.getImage('startButton');

    super(
      image,
      0,
      0,
      image.width,
      image.height,
      DataStore.getInstance().canvas.width / 2 - image.width/2,
      DataStore.getInstance().canvas.height / 2.5,
      image.width,
      image.height);
  }
}