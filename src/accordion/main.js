import style from "./main.scss";
import { Accordion } from './accordion'
import dataJSON from './data.json'

const acc = new Accordion()
const header = '<h1>Q&A Accordion</h1>';

document.getElementById("accordion").innerHTML = header;

function getButton(question) {
    return '<button class="accordion">' + question + '<i></i></button>';
}

function getPanel(answer) {
    return '<div class="panel"> <p>' + answer + '</p></div>'
}

for (let i = 0; i < dataJSON.accordionData.length; i++) {
    document.getElementById("accordion").innerHTML += getButton(dataJSON.accordionData[i].header) + getPanel(dataJSON.accordionData[i].content);
  }

const buttons = document.getElementsByClassName('accordion');
const panels = document.getElementsByClassName('panel');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        for (let j = 0; j < buttons.length; j++) {
            if(i != j) {
                panels[j].classList.remove('panel-active');
                buttons[j].classList.remove('button-active');
            }
        }
        panels[i].classList.toggle('panel-active');
        buttons[i].classList.toggle('button-active');
    });
  }

