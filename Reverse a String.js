function reverseString(str){

let newstr ="";

for(let i = str.length - 1; i >= 0; i--){

    let char = str[i];
    
    newstr += char;
}
return newstr;
}
const result = reverseString("hello")
console.log(result);