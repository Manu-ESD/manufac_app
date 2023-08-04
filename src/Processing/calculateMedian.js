export default function calcualteMedian(data) {
  var n = data.length;
  var cleandata = [];
  data.forEach((num, index) => {
    cleandata.push(parseFloat(data[index])); //parseFloat is used the some values of Wine-Data is string like '.98' instead of 0.98
  });
  var sortdata = cleandata.sort();
  console.log("sortdata:", sortdata); //Asecnding order sort

  //check even/odd condition
  if (data.length % 2 === 0) {
    console.log("even");
    var q = n / 2;
    return (sortdata[q - 1] + sortdata[q]) / 2.0; //solving mathematical expression median of (n/2)th and (n/2)+1 th element
  } else {
    console.log("odd");
    var f = (n + 1) / 2;
    return sortdata[f - 1] / 1.0; //solving mathematical expression (n+1)/2th element
  }
}
