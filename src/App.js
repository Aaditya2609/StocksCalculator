import { useState } from "react";
import "./styles.css";

export default function App() {
  var [initialPrice, setInitialPrice] = useState(0);
  var [noOfStocks, setNoOfStocks] = useState(0);
  var [currentPrice, setCurrentPrice] = useState(0);
  var [output, setOutput] = useState("");
  var [profitLoss, setProfitLoss] = useState("white");
  const style = {
    color: profitLoss
  };
  function calculateProfitLoss() {
    if (initialPrice !== 0 && noOfStocks !== 0 && currentPrice !== 0) {
      if (+initialPrice > +currentPrice) {
        setProfitLoss("#FF3131");
        var loss = (initialPrice - +currentPrice) * noOfStocks;
        var lossPercent = (loss / initialPrice / noOfStocks) * 100;
        setOutput(
          "Your loss is " +
            loss.toFixed(2) +
            ", and loss percentage is " +
            lossPercent.toFixed(2) +
            "%"
        );
      } else if (+initialPrice === +currentPrice) {
        setOutput("Nothing gained,Nothing lost.");
        setProfitLoss("white");
      } else {
        setProfitLoss("#39ff14");
        var profit = (currentPrice - initialPrice) * noOfStocks;
        var profitPercent = (profit / initialPrice / noOfStocks) * 100;
        setOutput(
          "Your profit is " +
            profit.toFixed(2) +
            ", and profit percentage is " +
            profitPercent.toFixed(2) +
            "%"
        );
      }
    } else setOutput("Please fill out all fields");
  }
  return (
    <div className="App">
      <h1>STOCKS CALCULATOR</h1>
      <label>Initial Price</label>
      <input
        type="number"
        onChange={(event) => setInitialPrice(event.target.value)}
      ></input>
      <label>No Of Stocks</label>
      <input
        type="number"
        onChange={(event) => setNoOfStocks(event.target.value)}
      ></input>
      <label>Current Price</label>
      <input
        type="number"
        onChange={(event) => setCurrentPrice(event.target.value)}
      ></input>
      <button onClick={calculateProfitLoss}>Calculate</button>
      <p style={style}>{output}</p>
    </div>
  );
}
