// Take three numbers and print the largest number among them if all of three are same print  −1
// .

// Note: You have to complete Max_out_of_three. No need to take any input.


// input format 
// The input contains three numbers A, B and C.


// output format 
// Return the maximum number out of the three numbers as result.


const Max_out_of_three = (A,B,C) => {
    if (A > B && A > C) 
 {
   return A;
 }
 else if (B > A && B > C)
 {
   return B;
 }
 else if (C > A && C > B)
 {
   return C;
 }
 else if (A == B && B == C & C == A)
 {
   return (-1);
 }
 

};

console.log(large_num(2,5,4));