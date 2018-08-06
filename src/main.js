import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Demongotchi } from './demongotchi';
import './demon-room.jpg';

function updateDisplay(object) {
  let that = object
  setInterval(() => {
    $('#hunger').text(that.hunger);
  }, 5000);
}

$(document).ready(function(){

  let demon = new Demongotchi();

  $('#demon-name').text(demon.name);
  $('#hunger').text(demon.hunger);

  demon.turn();
  updateDisplay(demon);

  if (demon.dead === 1) {
    window.clearInerval(turn());
  }



});
