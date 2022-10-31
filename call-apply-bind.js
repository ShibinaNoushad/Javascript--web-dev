var mark={science:50};
//call
function total(maths,english,hindi){
    return this.science+maths+english+hindi;
}
console.log(total.call(mark,10,10,10));
//apply

var arr=[10,10,10];
console.log(total.apply(mark,arr));

//bind
var newmark=total.bind(mark);
console.log(newmark(10,10,10));



//create object student

var student={age:20};
function printAge(){
    return this.age;
}
var bind=printAge.bind(student);
console.log(bind());

//another object

var student={name:'Tom',
age: 20,
email:'Tom@email.com',
};

function showuser(){
    console.log(this.name);
    return this.age;
}
console.log(`Age = ${showuser.apply(student)}`)

var bound=showuser.bind(student);
console.log(`age=${bound()}`);
