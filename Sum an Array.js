function sumArray(numbers) {
    let total = 0; 

    for (let i = 0; i < numbers.length; i++) {
        [i]
        let currentNumber = numbers[i]; 
        
        total = total + currentNumber; 
    
    }

    return total; 
}
const myNumbers = [1, 2, 3, 4, 5];
const result = sumArray(myNumbers);
console.log(result); 