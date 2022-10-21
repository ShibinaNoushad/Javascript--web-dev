

var username=document.getElementById('name');
var email=document.getElementById('email');
const btn=document.querySelector('.btn');

btn.addEventListener('click',output);
function output(e){
    e.preventDefault();
    let obj={
        u_name:username.value,
        email:email.value

    };
    var obj_serialized=   JSON.stringify(obj);
    localStorage.setItem("User", obj_serialized);

    let obj_deserialized=JSON.parse(localStorage.getItem("User"));     
    localStorage.setItem("User", obj_deserialized);
    console.log(obj_deserialized);



}












































