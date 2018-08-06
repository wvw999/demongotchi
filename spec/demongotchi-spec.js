import { Demongotchi } from './../src/demongotchi';

describe('Demongotchi', function(){
  let demon;
  beforeEach(function(){
    demon = new Demongotchi;
    jasmine.clock().install();
    demon.turn();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('the turn function will decrement health, energy, and increment need to go potty', function(){
    jasmine.clock().tick(16000);
    expect(demon.hunger).toEqual(97);
    expect(demon.energy).toEqual(97);
    expect(demon.mood).toEqual(97);
    expect(demon.potty).toEqual(3);
  });

  it('will feed the little demon', function(){
    jasmine.clock().tick(16000);
    demon.feed();
    expect(demon.hunger).toEqual(99);
  });

  it('will play with little demon', function() {
    jasmine.clock().tick(16000);
    demon.ruckus();
    expect(demon.energy).toEqual(99);
  });

  it('will change little demon poopy pants', function(){
    jasmine.clock().tick(16000);
    demon.nappy();
    expect(demon.potty).toEqual(0);
  });

  it('will decrement extra health when potty greater than 21', function(){
    demon.potty = 22;
    jasmine.clock().tick(16000);
    expect(demon.health).toEqual(97);
  });

  it('will decrement extra health when energy lower than 25', function(){
    demon.energy = 24;
    jasmine.clock().tick(16000);
    expect(demon.health).toEqual(97);
  });

  it('will decrement extra health when hunger lower than 25', function(){
    demon.hunger = 24;
    jasmine.clock().tick(16000);
    expect(demon.health).toEqual(97);
  });

  it('will decrement extra health when mood lower than 25', function(){
    demon.hunger = 24;
    demon.energy = 24;
    jasmine.clock().tick(16000);
    expect(demon.health).toEqual(91);
  });

  it('it will let you know you are dead', function(){
    demon.health = 0;
    jasmine.clock().tick(16000);
    console.log(demon.name);
    expect(demon.dead).toEqual(1);
  });

});
