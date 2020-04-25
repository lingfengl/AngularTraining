function Calculator(num1:number, num2:number, operator:string): number
{
    switch(operator)
    {
        case "-":
            return num2-num1;
        case "/":
            return num1/num2;
        case "*":
            return num1*num2;
        default:
            return num1+num2;
    }
}

console.log(Calculator(2,4,"*"))