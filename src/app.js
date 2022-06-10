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
  let randomSubj = Math.floor(Math.random() * 3);
  let randomAction = Math.floor(Math.random() * 3);
  let randomItem = Math.floor(Math.random() * 3);
  let randomTime = Math.floor(Math.random() * 3);
  let subject = ["My cat", "A bird", "A snake"];
  let action = [" ate", " stole", " destroyed"];
  let item = [" my homework", " my money", " my whole house"];
  let time = [
    " last night.",
    " yesterday.",
    " right in front of us just now, you saw it!"
  ];

  return (
    subject[randomSubj] +
    action[randomAction] +
    item[randomItem] +
    time[randomTime]
  );
};
//  let what = {};
//  let when = {};
//};
