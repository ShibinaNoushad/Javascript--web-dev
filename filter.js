
var filter=document.getElementById('filter');

filter.addEventListener('keyup',filterItems);
function filterItems(e){
    
    //e.preventDefault();
    var text=e.target.value.toLowerCase();
    var items=document.getElementsByTagName('li');//get li
    Array.from(items).forEach(function(item)
    {
        var itemName=item.firstChild.textContent;
        var des=item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || des.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
         else{
                item.style.display='none';
            }
        

    });
}

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value+" ";
  var newItem2=document.getElementById('des').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem2));
  
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('Edit'));


 let edbtn=document.createElement('button');
 edbtn.className='edit-button btn-danger btn-sm float-right edit';
 edbtn.appendChild(document.createTextNode('x'));

  li.appendChild(edbtn);
  li.appendChild(deleteBtn);

  itemList.appendChild(li);

}

var liSelector=document.querySelectorAll('li');
for(let i=0;i<liSelector.length;i++){
    let edbtn=document.createElement('button');
    edbtn.className='edit-button btn-danger btn-sm float-right edit';
    edbtn.appendChild(document.createTextNode('Edit'));
    liSelector[i].appendChild(edbtn);
}

// Remove item
/*function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
*/