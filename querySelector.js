// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
// var input=document.querySelector('input');//first input
// input.value='shibina';
// var submit=document.querySelector('input[type="submit"]');//selecting second input submit  btn
// submit.value="SEND";
// var item=document.querySelector('.list-group-item');
// item.style.color="red";
// var last_item=document.querySelector('.list-group-item:last-child');
// last_item.style.color="blue";
// var second_item=document.querySelector('.list-group-item:nth-   child(2)');
// second_item.style.color="yellow";

//queryselectall
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent="hello";
// var odd=document.querySelectorAll('li:nth-child(odd');
// var even=document.querySelectorAll('li:nth-child(even');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor="red";
//     even[i].style.backgroundColor="blue";
// }
var item=document.querySelector('.list-group-item:nth-child(2)');
item.style.color="green";
 var odd=document.querySelectorAll('li:nth-child(odd)');
 for(var i=0;i<odd.length;i++)
 {
 odd[i].style.backgroundColor="green";
 }
