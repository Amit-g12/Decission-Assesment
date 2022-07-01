//Find Grades
//Your school has the following grading system based upon the marks(M) obtained by a student:

//If M≤10 , the grade will be E.If 11≥M≤20, the grade will be D.
//If 21≥M≤30, the grade will be C.
//If 31≥M≤40 , the grade will be B.
//If 41≥M≤50 , the grade will be A.
//Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.


const findGrades = (a) => {
    switch(true){
      case (a <= 10):
      return ("E");
      
      case (a <=20 && a >= 11):
      return ("D");
      
      
      case (a <= 30 && a >= 21):
      return ("C");
     
      
      case (a <= 40 && a >= 31):
      return ("B");
      
      case (a <= 50 && a >= 41):
      return ("A");
      
      
      default:
      return ("Invalid grade");
      break;
      
    }
    
    
};

console.log(findGrades(45));