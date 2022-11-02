
//this inside global scope
this.department='computer science';
// console.log(this.department);



//this inside object
this.Arun={
    department:'physics',
    
}
/*let Shyam={
    department:'Mathematics'
}*/
// console.log(this.mycollege.department);
// console.log(Shyam.department);



//this inside method

/*let Shyam={
    department:'Mathematics',
    printDepartment(){
        console.log(`this is ${this.department} department`);
    }
}
Shyam.printDepartment();*/


//this inside function
/*const printDepartment=function(){
    console.log(`${this.department} is the main department`);
}
printDepartment.call(this);*/


//this  inside inner function
//by using that as variale by assigning this

/*const printDepartment=function(){
    let that=this;
    const innerfunction=function(){
        console.log(`this is ${that.department} department`);
    }
    innerfunction();
}
printDepartment.call(this);
printDepartment.call(this)
*/

//by using call for innerfunction
/*const printDepartment=function(){
    const innerfunction=function(){
        console.log(`this is ${this.department} department`);
    }
    innerfunction.call(this);
}
printDepartment.call(this)*/

//by using bind

/*const printDepartment=function(){
    const innerfunction=function(){
        console.log(`this is ${this.department} department`);
    }
    innerfunction.bind(this)
}
printDepartment.call(this);*/

//by using arrow function
/*const printDepartment=function(){
    const innerfunction=()=>{
        console.log(`this is ${this.department} department`);
    }
    innerfunction();
}
printDepartment.call(Arun)*/


//this inside constructor function
/*let createroom= function(name){
    this.table=`${name} table`;
}
createroom.prototype.cleantable=function(){
    console.log(`cleaning ${this.table}`);
};
let Varun=new createroom('varun');
Varun.cleantable();*/

//this inside class

/*class createroom{
    constructor(name){
        this.table=`${name} table`
    }
    cleantable(){
        console.log(`cleaning ${this.table}`);
    }
}
let Sona=new createroom('sona');
Sona.cleantable();
*/



class student{
    static count=0;
    constructor(name,age,phone_number,marks){
        this.name=name;
        this.age=age;
        this.phone_number=phone_number;
        this.marks=marks;
        student.count++;
        
    }

    static noofstudents()
    {
        
        console.log(`number of students=${student.count}`);
    }


    eligible(){
        if(this.marks>40){
            console.log(`${this.name} is eligible`);
        }
        else{
            console.log(`${this.name} is not eligible`);
        }
    }
    
}

let Arun=new student('Arun',17,544343323,35);
let Sona=new student('Sona',18,644343323,41);
let Nithin=new student('Nithin',17,744343323,99);
let Vishnu=new student('Vishnu',17,844343323,27);

student.noofstudents()

