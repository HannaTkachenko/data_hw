"use strict";

const btns = document.querySelectorAll("div>button");
const blockContainer = document.getElementById("container");

const btnHandler = ({
  target: {
    dataset: { flexDirection },
  },
  target,
}) => {
  blockContainer.style.flexDirection = flexDirection;
};

for (const btn of btns) {
  btn.addEventListener("click", btnHandler);
}
