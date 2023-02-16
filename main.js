'use strict';
// Understanding the problem
// Hide/Show the answer to a question when the question is clicked
// Hacer el logo que cuando le des click, se cierren o habran todos las preguntas.

/////////////////////////
// SELECTING ELEMENTS //
///////////////////////

const questions = document.querySelectorAll('.button');
const answers = document.querySelectorAll('.answer');
const titles = document.querySelectorAll('.title');
const arrows = document.querySelectorAll('.arrow');

/////////////////////////////
// ADDEVENT FUNCTIONALITIES //
///////////////////////////

questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    let answer = answers[index].classList;
    let title = titles[index].classList;
    let arrow = arrows[index].classList;
    answer.toggle('hidden');
    title.toggle('bold');
    arrow.toggle('active');
  });
});
