import { v4 as uuidv4 } from "uuid";
import randomName from "random-name";

export class Creature {
  constructor(
    xPullChanage,
    yPullChange,
    parrent,
    age,
    speed,
    xPull,
    yPull,
    xPos,
    yPos,
    pregnencyTimer
  ) {
    this._id = uuidv4();
    this._xPullChanage = xPullChanage;
    this._yPullChange = yPullChange;
    this._name = randomName.first();
    this._parrent = parrent;
    this._age = age;
    this._speed = speed;
    this._xPull = xPull;
    this._yPull = yPull;
    this._xPos = xPos;
    this._yPos = yPos;
    this._pregnencyTimer = pregnencyTimer;
  }

  // id
  get id() {
    return this._id;
  }

  // xPullChanage
  get xPullChanage() {
    return this._xPullChanage;
  }

  // yPullChange
  get yPullChange() {
    return this._yPullChange;
  }

  // name
  get name() {
    return this._name;
  }

  // parrent
  get parrent() {
    return this._parrent;
  }

  // age
  get age() {
    return this._age;
  }
  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    }
  }

  // speed
  get speed() {
    return this._speed;
  }
  set speed(newSpeed) {
    if (typeof newSpeed === "number" && newSpeed > 0) {
      this._speed = newSpeed;
    }
  }

  // xPull
  get xPull() {
    return this._xPull;
  }
  set xPull(newXPull) {
    if (typeof newXPull === "number" && newXPull >= 0 && newXPull <= 1) {
      this._xPull = newXPull.toFixed(2);
    }
  }

  // yPull
  get yPull() {
    return this._yPull;
  }
  set yPull(newYPull) {
    if (typeof newYPull === "number" && newYPull >= 0 && newYPull <= 1) {
      this._yPull = newYPull.toFixed(2);
    }
  }

  // xPos
  get xPos() {
    return this._xPos;
  }
  set xPos(newXPos) {
    if (typeof newXPos === "number") {
      this._xPos = newXPos;
    }
  }

  // yPos
  get yPos() {
    return this._yPos;
  }
  set yPos(newYPos) {
    if (typeof newYPos === "number") {
      this._yPos = newYPos;
    }
  }

  // pregnencyTimer
  get pregnencyTimer() {
    return this._pregnencyTimer;
  }
  set pregnencyTimer(newPregnencyTimer) {
    if (typeof newPregnencyTimer === "number" && newPregnencyTimer >= 0) {
      this._pregnencyTimer = newPregnencyTimer.toFixed(0);
    }
  }
}
