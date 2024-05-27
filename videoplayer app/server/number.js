function calculateDigitSumAndSumOfSum(number) {
    let sum = 0;
    
  
   
    for (let temp = number; temp !== 0; temp = Math.floor(temp / 10)) {
      sum += temp % 10;
   

while (sum > 10) {
    sum = Math.floor(sum / 10) + (sum % 10);
  }
  
     
    }
  

    return {
   
      sumOfDigits: sum,
    
    };
  }
  
  const result = calculateDigitSumAndSumOfSum(999999999999);

  console.log("Sum of each digit:", result.sumOfDigits);
  