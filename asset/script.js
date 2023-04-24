const ol= document.querySelector("ol");
const olFirstChild = ol.children[0];
const olLastChild = ol.children [4];


ol.insertBefore(olLastChild, olFirstChild);



const section = document.querySelectorAll("section");
const div = document.querySelector("div");
const h2 = document.querySelectorAll("h2");


section[1].prepend(h2[2]);
div.prepend(h2[1]);

section[2].remove();



