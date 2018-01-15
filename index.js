function theBeatlesPlay (arrayOfMusicians, arrayOfInstruments) {
  var emptyArray = [];
  for (var i = 0; i < arrayOfMusicians.length; i++) {
      emptyArray.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`)
    }
  return emptyArray;
}

function johnLennonFacts (arrayOfFacts) {
  var i = 0;
  while (i < arrayOfFacts.length) {
    arrayOfFacts[i] = arrayOfFacts[i] + "!!!";
    i++;
  }
  return arrayOfFacts;
}

function iLoveTheBeatles (num) {
  var emptyArray1 = [];
  var i = 0;
  do {
    i++;
    emptyArray1.push("I love the Beatles!");
  } while (num < 15);
  return emptyArray1;
}



var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
