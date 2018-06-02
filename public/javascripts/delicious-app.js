import "../sass/style.scss";
import Quill from "./quill.js";

import { $, $$ } from "./modules/bling";

var quillDescription = new Quill("#editor-description", {
  theme: "snow"
});

var quillResponsibilities = new Quill("#editor-responsibilities", {
  theme: "snow"
});

var descriptionOne = document.querySelector("input[name=description]");
console.log(JSON.parse(descriptionOne.value));
quillDescription.setContents(JSON.parse(descriptionOne.value));

var responsibilitiesOne = document.querySelector(
  "input[name=responsibilities]"
);
quillResponsibilities.setContents(JSON.parse(responsibilitiesOne.value));

quillDescription.on("text-change", function() {
  var description = document.querySelector("input[name=description]");
  var delta = quillDescription.getContents();
  description.value = JSON.stringify(delta);
});

quillResponsibilities.on("text-change", function() {
  var responsibilities = document.querySelector("input[name=responsibilities]");
  var delta = quillResponsibilities.getContents();
  responsibilities.value = JSON.stringify(delta);
  console.log(responsibilities.value);
});
