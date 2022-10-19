var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent="hello";
li[1].style.fontWeight="bold";
li[1].style.background="red";
//items.style.background="red";//wrong way and gives error
for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor='red';
}
/*var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
items[1].textContent="hello";
items[1].style.fontWeight="bold";
items[1].style.background="red";
//items.style.background="red";//wrong way and gives error
for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='red';
}*/