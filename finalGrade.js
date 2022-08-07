function finalGrade(num1, num2, num3){

  let average = (num1 + num2 + num3) / 3;
  if (average > 100 || average < 0){
    return 'You have entered an invalid grade.';
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
