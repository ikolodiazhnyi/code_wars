/* 
  1. at least six characters long
  2. contains a lowercase letter
  3. contains an uppercase letter
  4. contains a digit
  5. only contains alphanumeric characters (note that '_' is not alphanumeric)
*/

let validatePass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

console.log(validatePass.test("21Xa389"));
console.log(validatePass.test("21Xa"));
console.log(validatePass.test("21aaaaaa"));
