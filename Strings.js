// Extract the last four characters from the string below;
// "extravaganza"
// Insert the following string at the fourth index of the below variable:
// "eat"
// const food = "The quick fox jumped over the lazy dog"
// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."brown"
// const story= "The quick brown fox jumps over the lazy dog"
// Using JavaScript, find the following words from the following strings:
// 1. "are"
// const string1 = "The pupils are reading in the library";
// 2. "sitting"
// const string2 = "The child was sitting on the table before it fell"
// Convert the following strings into the specified format:
// 1. UpperCase: "wonderful"
// 2. LowerCase: "amazing", "UndERneath"
// 3. Title case "A wonderful world"


//1
let a="extravaganza";
console.log(a[8],a[9],a[10],a[11]);
const b="eat"
// const food="the quick fox jumped over the lazy dog";
const food=`The quick fox jumped ${b} over the lazy dog`;
console.log(food)
// 1."the"
// 2."brown"
// const story="The quick brown fox jumps over the lazy dog"
const story="The quick brown fox jumps over the lazy dog";
const find=(story.match(/the/g)||[]).length;
const fox=(story.match(/brown/g)||[]).length;
console.log(find);
console.log(fox);
// using Java scriptfind the following words from the following Strings;

const String1="The pupils are reading in the library"
const library=String1.search("are");
console.log(library);
const2="The child was sitting on the table before it fell"
const child=String2.search("sitting");
console.log(child);

uppercase="wonderful"
const hug="wonderful";
const hug1=(hug.touppercase());