function finalGrade(num1, num2, num3){
let average = (num1 + num2 + num3) / 3;
   if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) ||   (num3 < 0 || num3 > 100)) {
        return 'You have entered an invalid grade.'
  } else  if( average < 100 && average >= 90){
    return 'A';
  } else if( average > 80 && average <= 89){
    return 'B';
  } else if (average > 70  && average <= 79){
    return 'C';
  } else if(average > 60 && average <= 69){
    return 'D';
  } else {
    return 'F';
  }
}

console.log(finalGrade(99, 92, 95)) // Should print 'A'

//The difference between this code file and v1 is that in the first version we did not check each number for less than 0 and greater than 100. 
//We only checked for the first number
