// FizzBuzz without Ifs https://www.codewars.com/kata/584c702256c98fc0a0000043/solutions/javascript

const fizzBuzz = n => {
  return (n % 15 === 0 && "FizzBuzz") ||
         (n % 3 === 0 && "Fizz") ||
         (n % 5 == 0 && "Buzz") ||
         n
}
