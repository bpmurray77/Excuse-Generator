/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector("#excuse").innerHTML = randomNumber;
  console.log("test" + randomNumber);
};

let generateExcuse = () => {
  let subject = {};
  let action = {};
  let what = {};
  let when = {};
};
