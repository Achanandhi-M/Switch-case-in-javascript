const prompt=require("prompt-sync")()
let a,b,c,operator;
console.log(" Addition Subtraction Multiplication Division Modulo ")
operator=prompt("Enter your operator: ")
 a=prompt("Enter the value of a:");
 b=prompt("Enter the value of b:");
switch (operator)
{
    case "+":
        c= parseInt(a)+parseInt(b)
        console.log("The value is:",c)
        break;
    case "-":
        c=a-b
        console.log("The value is:" ,c)
        break;
    case "*":    
        c=a*b
        console.log("The value is:",c)
        break;
    case "/":    
        c=a/b
        console.log("The value is:",c)
        break;
    case "%":    
        c=a%b
        console.log("The value is:",c)
        break;    
    default:
    console.log("please enter valid option")
}    
