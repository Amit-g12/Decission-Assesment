const Calculator = (A, B, C) => 
{
  switch (A) {
        case "+":
            return((B + C));
            break;
        case "-":
            return((B - C));
            break;
        case "*":
            return((B * C));
            break;
        case "/":
            return((B / C));
            break;
        default:
            ("Values are not assigned")
            break;
    }
    return A;
    
};
console.log(Calculator('+',1,2));