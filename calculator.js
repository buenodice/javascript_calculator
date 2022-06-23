// accept number from the user through prompt box
const number1= parseFloat(prompt("Enter first number: ")); //convert string to number

//take the operator from the user through prompt box
const  operator= prompt("Enter your operator from the list: +, -, /, *. %")

const number2= parseFloat(prompt("Enter second number: ")); // convert string to number to perform computation

let result=0
if(isNaN(number1) || isNaN(number2)){
    alert('Wrong input! Refresh and try again. ');
}else{
    if(operator == '+'){
        result= number1 + number2;
    }else if(operator == '-'){
        result= number1 - number2;
    }else if (operator == '*'){
        result= number1 * number2;
    }else if(operator == '/'){
        result= number1 / number2;
    }
    alert(number1 + ' ' + operator + ' '+ number2 + ' = ' + result)

}

