class student{
    constructor(name,age,phone_number,marks){
        this.name=name;
        this.age=age;
        this.phone_number=phone_number;
        this.marks=marks;
       
    }

    eligible(minimum=40,re_age=25){
        return ()=>{
            let result=false;
            if(this.marks>=minimum && this.age>=re_age){

                result=true;
                console.log(`${this.name} is eligible`);
            }
            
        }
        
    }
    
}

let Arun=new student('Arun',27,544343323,45);
var arun_eligible=Arun.eligible();
arun_eligible();
let Sona=new student('Sona',18,644343323,41);
var sona_eligible=Sona.eligible();
sona_eligible();
 let Nithin=new student('Nithin',28,744343323,99);
 let nithin_eligible=Nithin.eligible();
 nithin_eligible();
 let Vishnu=new student('Vishnu',29,844343323,27);
 let vishnu_eligible=Vishnu.eligible();
 vishnu_eligible();











// let print=a=>a;
// console.log(print(100));
// let square =(a) => {return a*a};
// console.log(square(5));

// let a=6;
// let mysquare=()=>{return a*a};
// console.log(mysquare());


// let multiply=(a,b) =>{return a*b};
// console.log(multiply(2,4));


// var x=function(){
//     let that=this;
//     this.count=1;
//     setTimeout(function(){
//         that.count++;
//         console.log(that.count);
//     },3000)
// };
// var xx=new x();



// var x=function(){
//     this.count=1;
//     setTimeout(() =>{
//         this.count++;
//         console.log(this.count);
//     },3000)
// };
// var xx=new x();

// var a=function(){
//     console.log(arguments[0]);
// }
// a(1,3,4)


// var a=(...n)=>{
//     console.log(n[0]);
// }
// a(1,3,4);

