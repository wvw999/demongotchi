import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Demongotchi } from './demongotchi';
import './demon-room.jpg';
import { getGiphy } from './giphy'
// import { getFlickr } from './flickr'

function updateDisplay(object) {
  let that = object
  setInterval(() => {
    $('#hunger').text(that.hunger);
    $('#mood').text(that.mood);
    $('#energy').text(that.energy);
    $('#health').text(that.health);
    $('#potty').text(that.potty);
    $('#translucent').fadeTo( "slow", that.trans );
  }, 5000);
}

$(document).ready(function(){

  let monsterList = ["monster1", "monster2", "monster3", "monster4", "monster5"]
  let monsterPick = monsterList[Math.floor(Math.random()*monsterList.length)];
  getGiphy(monsterPick);

  let demon = new Demongotchi();

  $('#demon-name').text(demon.name);
  $('#health').text(demon.health);
  $('#energy').text(demon.energy);
  $('#mood').text(demon.mood);
  $('#hunger').text(demon.hunger);
  $('#potty').text(demon.potty);

  demon.turn();
  updateDisplay(demon);

  $('#feed').click(function(){
    demon.feed();
    $('#hunger').text(demon.hunger);
  });

  $('#ruckus').click(function(){
    demon.ruckus();
    $('#energy').text(demon.energy);
  });

  $('#nappy').click(function(){
    demon.nappy();
    $('#potty').text(demon.potty);
  });

});
