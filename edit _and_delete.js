var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener('submit',addItem);
function addItem(e)
{
    e.preventDefault();

    var input_value=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(input_value));
    var deleteBtn=document.createElement('button');
     deleteBtn.className='btn btn-danger btn-sm float-right delete'; 
     deleteBtn.appendChild(document.createTextNode('x'));
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
var itemlist=document.getElementById('items');

itemlist.addEventListener('click',deleteFn)

   
function deleteFn(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}



    
/*var form=document.getElementById('addForm');
//var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);//form submit event
//itemList.addEventListener('click',removeItem);//delete event

function addItem(e)//addItem function
{
    e.preventDefault();

    //adding item 

    var input_value=document.getElementById('item').value;//get input value
    var li=document.createElement('li');//create li element
    li.className='list-group-item';//adding class to li
    li.appendChild(document.createTextNode(input_value));//add textnode with input value
    //add delete button to li
    var deleteBtn=document.createElement('button');//create delete button element
     deleteBtn.className='btn btn-danger btn-sm float-right delete'; //add class to delete button
     deleteBtn.appendChild(document.createTextNode('x'));//append text node
     li.appendChild(deleteBtn);//append button to li

    itemList.appendChild(li);//adding li to list/page


}

/*function removeItem(e){//function delete event
    if(e.target.classList.contains('delete'))//if click delete btn not item
    {
        if(confirm('Are you Sure')){//to delete confirmation
            var li=e.target.parentElement;//taking the li to delete
            itemList.removeChild(li);//deleting li


        }
    }
}
/*On clicking the delete button we should be able to remove the newly created li tag
Now add an edit button next to the delete icon.[Dont have to build the functionality]

*/



    
