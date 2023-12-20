const op = prompt('Enter operator ( +,-,*,/): ');   
const num1 = parseFloat(prompt ('Enter the first number: '));  
const num2 = parseFloat(prompt ('Enter the second number: '));  
let res; 
if (op == '+') {  
    res = num1 + num2;  
}  
else if (op == '-') {  
    res = num1 - num2;  
}  
else if (op == '*') { 
    res = num1 * num2;  
}  
else {  
    res = num1 / num2;
}  
  
window.alert(" Result is " + res+ " \n Thank You!!!");  