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
  do {
    emptyArray1.push("I love the Beatles!");
    num++
  } while (num < 15);
  return emptyArray1;
}



