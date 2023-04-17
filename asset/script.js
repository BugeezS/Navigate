const ol= document.querySelector("ol");
const olFirstChild = ol.children[0];
const olLastChild = ol.children [4];


ol.insertBefore(olLastChild, olFirstChild);


const titre= document.querySelectorAll("h2")[2];
const section = document.querySelectorAll("section");
const titre2 = section[1].children[0];
console.log(titre2);

section[2].appendChild(titre2);


