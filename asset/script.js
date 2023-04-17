const ol= document.querySelector("ol");
const olFirstChild = ol.children[0];
const olLastChild = ol.children [4];


ol.insertBefore(olLastChild, olFirstChild);

