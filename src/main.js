import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Demongotchi } from './demongotchi';
import './demon-room.jpg';
import './giphy.js'
// import './monster1.svg';
// import './monster2.svg';
// import monster3 from './images/monster3.svg';
// import './monster4.svg';
// import './monster5.svg';



function updateDisplay(object) {
  let that = object
  setInterval(() => {
    $('#hunger').text(that.hunger);
    $('#mood').text(that.mood);
    $('#energy').text(that.energy);
    $('#health').text(that.health);
    $('#potty').text(that.potty);
  }, 5000);
}

$(document).ready(function(){

  // let testImage = document.getElementById('monster');
  // testImage.src = monster3;

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
