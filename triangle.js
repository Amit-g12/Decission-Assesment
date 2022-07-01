// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

// Note: You have to complete Triangle_Check. No need to take any input


// input format 
// The input contains three numbers A, B and C which denotes the angles of a triangle.

// output format 
// Return the required result.


const Triangle_Check = (A,B,C) => {
    if (A < 90 && B < 90 && C < 90){
    return ("acute");
  }
  else{
    return ("obtuse");
  }

    
};

console.log(check_triangle(60,100,20));