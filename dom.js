/*console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.title);
document.title='shibina';
console.log(document.title);
*/
//console.log(document.all);
//document.all[10].textContent="hello";
// console.log(document.links);
// console.log(document.forms);
// console.log(document.forms[0]);
//console.log(document.images);
//console.log(document.getElementById("header-title"));
var hello=document.getElementById('header-title');
console.log(hello.textContent);
console.log(hello.innerText);
// hello.textContent="Hello";
 hello.style.borderBottom='solid 3px #000';
// var header=document.getElementById('main-header');
// header.style.borderBottom='solid 3px #000';
var items=document.getElementsByClassName('title');
var add_item=items[0];
console.log(add_item);
add_item.innerHTML='<b>Add Items<b>';
add_item.style.color='green';


