import { createElement, appendChildAll } from "../../utils/renderUnits";
import jack from "../../assets/Jack.png";

const header = document.getElementsByClassName("header-container")[0];
const img = createElement(
  "img",
  {
    className: "img-responsive header-container_img",
    src: jack,
    alt: "background"
  },
  []
);
const title = createElement(
  "h1",
  {
    className: "header-container__title centered"
  },
  ["Coding challenge"]
);

appendChildAll(header, [title, img]);
