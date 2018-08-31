import { Z_FULL_FLUSH } from "zlib";

export function createElement(elementDom = "DIV", attrs = {}, content = "") {
  const element = document.createElement(elementDom);

  addAttributs(element, attrs);
  appendChildAll(element, content);

  return element;
}

function addAttributs(element, attrs) {
  Object.keys(attrs).forEach(key => {
    element[key] = attrs[key];
  });
}

export function appendChildAll(parent, elements = []) {
  const [firstElemt] = elements;

  if (typeof firstElemt === "string") {
    const textHTML = document.createTextNode(elements.join(""));
    parent.appendChild(textHTML);

    return;
  }

  elements.forEach(element => {
    parent.appendChild(element);
  });
}
