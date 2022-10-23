const obj={
    key1:'navin',
    key2:'yash',
    key3:'vaibhav'
}
console.log(Object.keys(obj));//return keys
const keys=Object.keys(obj);
keys.forEach(key =>{
    console.log(obj[key]);
});
