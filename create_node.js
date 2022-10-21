//var itemList=document.querySelector('#items');
//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="red";
// console.log(itemList.parentNode.parentNode.parentNode);

//parent element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="red";
// console.log(itemList.parentElement.parentElement.parentElement);

//children
// 
//children good way to write
// console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor="yellow";

//firstchild consider spaces also
// console.log(itemList.firstChild);

// console.log(itemList.firstElementChild);//correct way to write- firstelementchild 
// itemList.firstElementChild.style.color="red";

//last child
//console.log(itemList.lastChild);
 
//last child element
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="hello";

//siblings
//console.log(itemList.nextSibling);

//sibling element
//console.log(itemList.nextElementSibling);

//previoussibling
//console.log(itemList.previousSibling);
//previous siblingelement
//console.log(itemList.parentElement);
//itemList.previousElementSibling.style.color="green";


//create elements

//create div
/*var newDiv=document.createElement('div');
newDiv.className="hello"; //add class
newDiv.id='helloid';//add id
newDiv.setAttribute('title','hellodiv');//add attr

var newdivtext=document.createTextNode('hello world');//create text node btw div
newDiv.appendChild(newdivtext);//adding text to div

//adding newdiv to screen
var container=document.querySelector('header .container');//selecting headerspace to insert new div
var h1=document.querySelector('header h1');
// h1.insertBefore(newDiv,container);
newDiv.style.fontSize= '30px';

container.insertBefore(newDiv,h1);

console.log(newDiv);*/




var newDiv=document.createElement('div');
var newdivtext=document.createTextNode('Hello word');
newDiv.appendChild(newdivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
/*var parent_node=document.getElementById('items');
//var li=document.createElement('li');
//var liText=document.createTextNode('Hello word');
//li.appendChild(liText);
parent_node.innerHTML='<li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li>';
parent_node.innerHTML='<li>Hello word</li>'+ parent_node.innerHTML;*/
var items=document.getElementsByClassName('list-group-item');
items[0].prepend('hello world');

/*let SS=document.createElement('div')
SS.className='new-Div1';
SS.id='1234';
//create text node
let TText=document.createTextNode('HEllo word')
//add to div
SS.appendChild(TText);
console.log(SS)
//add element to the page
let M=document.querySelector('ul .item ')
let TT=document.querySelector('ul h2');
console.log(SS);
M.insertBefore(SS,TT);*/

