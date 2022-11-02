function saveToLoCalStorage(event){
    event.preventDefault();
    var username=document.getElementById('name').value;
    var email=document.getElementById('email').value;
      
      let myobj={
          username,
          email
      };
  
      let myobj_serialized=JSON.stringify(myobj);
      
      localStorage.setItem(myobj.email,myobj_serialized);
      ShowNewUser(myobj);
}
  
 //function to display user
  function ShowNewUser(user){
    if(localStorage.getItem(user.email))
    {
        //localStorage.removeItem(email.value);
        //document.removeChild(myobj[email.value]);
        removeUserFromScreen(user.email);

      }
    const parentNode=document.getElementById('itemss');
    const HTML= `<li id="${user.email}"> <b>Name:</b> ${user.username} <b>Email:</b> ${user.email} <button onclick=deleteUser('${user.email}')> Delete</button>
    <button onclick=EditUser('${user.email}','${user.username}')> Edit</button> 
  
 </li>`;
    // const btn=document.createElement('button');
    // btn.appendChild(document.createTextNode('x'));//append text node

    // HTML.appendChild(btn);

    parentNode.innerHTML=parentNode.innerHTML + HTML;
    
    
    
  }
  
  //function to display list of users when clicking reload
  window.addEventListener("DOMContentLoaded",() => {
       const localStorageobj=localStorage;
    const localStoragekeys=Object.keys(localStorageobj);
    localStoragekeys.forEach(key =>{
      const userdetailsStrings=localStorageobj[key];
      const userdeailsObj=JSON.parse(userdetailsStrings);
      ShowNewUser(userdeailsObj);
    })
    
  });

  //function to remover user with same mail id
  function removeUserFromScreen(userid){
    const parentNode=document.getElementById('itemss');
    const childNodeToBeDeleted = document.getElementById(userid);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted);
    }
};

//function to delete user from ls and screen
function deleteUser(mailid){
    localStorage.removeItem(mailid);
    removeUserFromScreen(mailid);

};

//function to edit user
function EditUser(mailid,username){
     var inputname=document.querySelector('#name');
     inputname.value=username;
     var inputemail=document.querySelector('#email');
     inputemail.value=mailid;
     removeUserFromScreen(mailid);

    localStorage.removeItem(mailid);
    

    

}
