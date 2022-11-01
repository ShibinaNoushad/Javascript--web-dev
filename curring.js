//by bind


/*function multiply(x,y){
    console.log(x*y);
}
//multiply(2,7);
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);//same as function mBt(y){let x=2; c.l(x*y)}*/


//by closure
function multiply(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo=multiply(2);
multiplyByTwo(3);

let multiplyByThree=multiply(3);
multiplyByThree(10);


