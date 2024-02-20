'use strict'
const toHiddenMenu = document.querySelector(".js-two");
const arrowUP = document.querySelector(".js-arrow-up");
const arrowDown = document.querySelector(".js-arrow-down");
const inputName = document.querySelector('.js-name');
const inputJob = document.querySelector('.js-job');
const inputImage = document.querySelector('.js-photo');
const inputEmail = document.querySelector('.js-email');
const inputNumber = document.querySelector('.js-number');
const inputLinkedin = document.querySelector('.js-linkedin');
const inputGit = document.querySelector('.js-git');
const cardPreviewName = document.querySelector('.js-preview-NameCard');
const cardPreviewJob = document.querySelector('.js-preview-JobCard');




function liveEvent() {
  cardPreviewName.innerHTML = inputName.value;
  cardPreviewJob.innerHTML = inputJob.value;
}

inputName.addEventListener('input', liveEvent);
inputJob.addEventListener('input', liveEvent);












function hiddenMenu() {

  toHiddenMenu.classList.toggle('hidden');
  arrowUP.classList.toggle('hidden');
  arrowDown.classList.toggle('hidden');
}

arrowUP.addEventListener('click', hiddenMenu);
arrowDown.addEventListener('click', hiddenMenu);