module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);

    bracketsConfig.forEach((el) => {
        if (stack[stack.length - 2] === el[0] && stack[stack.length - 1] === el[1]) {
          stack.pop();
          stack.pop();
        }
      });
  }
  return stack.length === 0;
};