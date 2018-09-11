module.exports = function getZerosCount(number) {
  // your implementation URL:https://en.wikipedia.org/wiki/Trailing_zero : ащ==for every n!= n/5^i, where 5^i< n
   let result = 0,
    i = 1;
    while (Math.pow(5,i) < number){
        result += Math.floor(number/Math.pow(5,i));
        i++;
    }
    return result;
}
