//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions/javascript
//Invert a given list of interger values

const invert = array => {
  return array.map(i => i === 0 ? 0 : -i)
}
