/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log(generateExcuse());
  console.log(generateExcuse());
  console.log(generateExcuse());
  console.log(generateExcuse());
  console.log(generateExcuse());
  console.log(generateExcuse());
};

const generateExcuse = () => {
  let randomNumber = Math.round(Math.random() * 2);
  let subject = ["subj a", "subj b", "subj c"];
  let action = ["action a", "action b", "action c"];

  let subjectIndex = randomNumber;

  return subject[subjectIndex];
};
//  let what = {};
//  let when = {};
//};
