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

});
