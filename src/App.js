import "./App.css";
import AnalyticTable from "./component/AnalyticTable/AnalyticTable";
import Winedata from "./Data/Wine-Data.json";
import processedResult from "./Processing/processedResult";

function App() {
  let FlavanoidsResult = processedResult(Winedata, "Flavanoids"); //FlavanoidsResult is generated using processedResult function passed with args
  let GammaData = GammaDataCalculation(Winedata); //generating gamma data
  let GammaResult = processedResult(GammaData, "Gamma"); //GammaResult is generated using processedResult function passed with args

  return (
    <>
      <div className="App">
        <h1>Manufac Analytic App</h1>
        <AnalyticTable Heading="Flavanoids" Result={FlavanoidsResult} />
        <AnalyticTable Heading="Gamma" Result={GammaResult} />
      </div>
    </>
  );
}

export default App;

//Gamma DATA is created from the Winedata using mathematice formule provided
function GammaDataCalculation(datavalues) {
  var gammadata = [];
  for (var w = 0; w < datavalues.length; w++) {
    gammadata.push({
      Alcohol: datavalues[w]["Alcohol"],
      Gamma: (
        (datavalues[w]["Ash"] * datavalues[w]["Hue"]) /
        datavalues[w]["Magnesium"]
      ).toFixed(1),
    });
  }
  return gammadata;
}
