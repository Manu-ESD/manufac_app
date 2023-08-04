import removeDuplicates from "./removeDuplicates";

export default function calculateMode(data) {
  var n = data.length;

  var cleandata = [];
  data.forEach((num, index) => {
    cleandata.push(parseFloat(data[index]));
  });

  //calculating duplicate free data for to find the frequency
  var nonDuplicateData = removeDuplicates(cleandata);

  console.log("nonDuplicateData:", nonDuplicateData);

  //calculating frequency of the each element in nonDuplicateData
  var frequencyObj = [];
  var counter = 0;
  for (var r = 0; r < nonDuplicateData.length; r++) {
    counter = 0;
    for (var s = 0; s < cleandata.length; s++) {
      if (nonDuplicateData[r] === cleandata[s]) {
        counter++;
      }
    }
    frequencyObj.push({
      value: nonDuplicateData[r],
      frequency: counter,
    });
  }

  //finding the max value in frequencies
  const maxfrequency = frequencyObj.reduce((prev, current) => {
    return prev.frequency > current.frequency ? prev : current;
  });

  console.log("frequencyObj:", frequencyObj, maxfrequency.frequency);

  //finding values with maxfrequency  == mode's
  var result = [];
  for (let e = 0; e < frequencyObj.length; e++) {
    if (frequencyObj[e]["frequency"] === maxfrequency.frequency) {
      result.push(frequencyObj[e]["value"]);
    }
  }

  console.log("moderesult", result);

  return result.toString();
}
