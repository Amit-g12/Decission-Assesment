// Ques 
// You are given 3 distinct integers X,Y, and Z, and your task is to find and return the second smallest integer among the three provided integers.

// Note: You have to complete findSndSmallest function. No need to take any input.


// input format 
// The first and the only line of the input contains three space-separated integers 
// X, Y, and Z, denoting the integers among which you have to find the second smallest element.

// output format 
// Return the second smallest integer among the three integers given to you.


const findSndSmallest = (x,y,z) => {
    if((x>y&& y>z)||(z>y&&x<y)){
      return y;
    }
    else if((x>y&&x<z)||(z<x&&x<y)){
      return x;
    }
    else{
      return z;
    }
};

console.log(findSndSmallest(6,3,7));