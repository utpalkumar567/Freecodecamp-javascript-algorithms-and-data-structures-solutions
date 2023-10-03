function palindrome(str) {
  /*
  Take a new String and use .toLowerCase() function to ignore casing while matching. Now use .match property to extract all the alpha-numeric character only and store it in new string.
  */
  const newStr = str
  .toLowerCase().match(/[a-z0-9]/g); // this will give a array of character of string passed.
console.log(newStr) //  to check the new sting.
  /* 
  Now use join method and pass ('') parameter to convert it in string and then use .reverse function to check whether it matches or not.
  */
  console.log(newStr.join(''));
  return newStr.join('') === newStr.reverse().join(''); 
}
palindrome("eye");
