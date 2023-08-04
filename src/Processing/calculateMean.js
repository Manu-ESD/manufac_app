// calculateMean function provide Mean for the provided data array

export default function calcualteMean(data) {
  console.log("called");
  let sum = 0;
  //calculate sumofallelements using forEach() method
  data.forEach((num) => {
    sum += parseFloat(num);
  });
  console.log("calcualteMean", data.length);

  return sum / data.length; //retuning mean which is sumofallelements/no.of.elements
}
