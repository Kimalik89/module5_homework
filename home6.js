function hasDuplicates (arr) { return new Set(arr).size !== arr.length;}
let arr = [1,'kiwi',2,5,'apple',4,2,9];
if (hasDuplicates(arr)) {
  console.log("true");
}
else {
  console.log("false");
}
