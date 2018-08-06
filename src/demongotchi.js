class Demongotchi {

  constructor(){
    this.name = "Lil Demon";
    this.health = 100;
    this.hunger = 100;
    this.energy = 100;
    this.mood = 100;
    this.potty = 0;
  }

  turn() {
    setInterval(() => {
      this.hunger --;
      this.energy --;
      this.mood = Math.ceil((this.hunger + this.energy)/2);
      this.potty ++;
      this.turnCheck();
    }, 5000);
  }

  feed() {
    this.hunger += 2
  }

  turnCheck() {
    if (this.potty > 21) {
      this.health --;
    }
    if (this.energy < 25) {
      this.health --;
    }
    if (this.hunger < 25) {
      this.health --;
    }
    if (this.mood < 25) {
      this.health --;
    }
    if (this.health <= 0) {
      alert("You dead dummy!")
    }
  }

}

export { Demongotchi };
