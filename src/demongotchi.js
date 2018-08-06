class Demongotchi {

  namedemon() {
    let nameArray = ['bob', 'drecekku', 'tagrioh', 'ghebreath', 'poxxadex', 'cighaddorth', 'thrantha', 'culmajess', 'dreadaokuu', 'brurkourr', 'khogrohiurm', 'kichath', 'iungos', 'yudaurr', 'khaabrurkoth', 'friuthrialfau', 'hodius', 'frianni', 'bhaucaomfeal', 'diolliomoith', 'phreacih', 'kharkaz', 'luulfion', 'aarnarlouth', 'crossilfok', 'xixtruldis', 'tulthemur', 'ekroitun', 'waumfacaz', 'xourlaus', 'dhiohoukri', 'wiongiol', 'lubri', 'sleggekrac', 'zoibbudhaoth', 'reres', 'inrunthuth', 'sthrartatt', 'shiurao', 'chutrajahr', 'wommiz', 'vialdoih', 'chacendirm', 'ghaocelthen', 'deddaoxew', 'crerteass', 'ghidrol', 'candoja', 'huunthauth', 'gretraz', 'calphizzia', 'stelnoisthin', 'phusal', 'tauxou', 'vurkota', 'uldautruun', 'maunnul', 'phraothon', 'xiugniohlao', 'sthraoxxobiah', 'zeakroun', 'maugniarriuz', 'vaabre', 'erneas', 'prinrughu', 'kaomfauz', 'caldinax', 'phocius', 'imiudio', 'dhaondraarroth', 'yionthoddo', 'gloibbemmauz', 'luudduu', 'bugehr', 'bloudan', 'bhoilniochauz', 'khiudra', 'xathaxorm', 'zoddois', 'noibboi', 'zorsokax', 'sthoxtroszith', 'pearroz', 'kiazaaz', 'uubruuhlea', 'tribao', 'ouru', 'liuntosthia', 'shibre', 'sursa', 'cestra', 'stiphriudhal', 'sthrionrilfaw', 'uuroumlio', 'strumaorre', 'sthaungurkuhr', 'tulfok', 'sralfal', 'ghiurealfe', 'ghathraz', 'pagguntoss', 'gheknaxxe', 'waashiukhaas', 'jekke', 'cadhauxhal', 'olferr', 'kindruunsoin', 'struthrozuul', 'goltignea', 'shoutriz', 'sthruszaukkoc', 'shurlith', 'srorratt', 'vurche', 'crungurr', 'tentiurphoi', 'vreblirkoiz', 'sleaco', 'iniu', 'thammo', 'beaphreaxxauth', 'jegilmoz', 'bhaasaunsias', 'khorze', 'mimmegro', 'herzho', 'crebror', 'phougikho', 'grungakhu', 'genrethrex', 'nathrois', 'cousthiah', 'raundreandrau', 'ellornoin', 'phauttaudrial', 'saggizzoitt', 'retaaxhaah', 'yiushao', 'blunun', 'thrigruw', 'xehluh', 'xaolliulnoi', 'bhaobboi', 'saobe', 'raxxatt', 'deakhiurnos', 'shruusheaxan', 'hukhabaw', 'strukrukrurth', 'pourzuduth', 'vognouz', 'wiohuushao', 'rokraaz', 'aurlekril', 'uphudaz', 'orkurr', 'biachiasthu', 'llealraos', 'prilrac', 'sthrolthistrul', 'tanreth', 'wroidrionoi', 'boxxoshirth', 'aungi', 'maaziol', 'bhoulia', 'bhuulphioz', 'dhautria', 'chehus', 'bluudhiuhlez', 'lukkeas', 'nokroc', 'darsoin', 'thriganro', 'sthrizzaandea', 'chandraun', 'buussous', 'taurdolfohr', 'phioxhiohlu', 'bhelphaa', 'ihox', 'nuphutt', 'throrkiassek', 'toirlioddiu', 'chounsou', 'sraonrass', 'thiusiu', 'noidrurous', 'vixiottiul', 'gliokhaath', 'uuhlaaz', 'jerchakrorm', 'anarrux', 'uggi', 'breknogno', 'xoshuutrarm', 'diutriorloith', 'tishil', 'nistrokhurr'];
    let newName = nameArray[Math.floor(Math.random()*nameArray.length)];
    newName = newName.charAt(0).toUpperCase() + newName.slice(1);
    return newName;
  }

  constructor(){
    this.name = this.namedemon();
    this.health = 1000;
    this.hunger = 100;
    this.energy = 100;
    this.mood = 100;
    this.potty = 21;
    this.dead = 0;
  }

  turn() {
    let gameInterval = setInterval(() => {
      this.hunger --;
      this.energy --;
      this.mood = Math.ceil((this.hunger + this.energy)/2);
      this.potty ++;
      this.turnCheck();
      if (this.dead == 1) {
        self.clearInterval(gameInterval);
      }
    }, 5000);
  }

  feed() {
    this.hunger += 2;
    this.health += 1;
  }

  ruckus() {
    this.energy += 2;
    this.health += 1;
  }

  nappy() {
    this.potty = 0;
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
      this.dead = 1
      alert("You dead dummy!")
    }
  }

}

export { Demongotchi };
