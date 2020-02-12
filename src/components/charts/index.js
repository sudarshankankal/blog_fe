import React, { Component } from "react";
import HighChart from "./HighChart";
import LineChart from "./LineChart";
import MyStockChart from "./StockChart";
import Clock from "./Clock";

class ShowCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayChart: 0
    };
  }
  render() {
    const { displayChart } = this.state;
    return (
      <>
        <div class="ui equal width grid">
          <div class="column">
            {" "}
            <button
              class="ui primary button"
              onClick={() => {
                this.setState({ displayChart: 0 });
              }}
            >
              Simple Chart
            </button>
          </div>
          <div class="column">
            <button
              class="ui primary button"
              onClick={() => {
                this.setState({ displayChart: 1 });
              }}
            >
              Line Chart
            </button>
          </div>
          <div class="column">
            <button
              class="ui primary button"
              onClick={() => {
                this.setState({ displayChart: 2 });
              }}
            >
              Stock Chart
            </button>
          </div>
        </div>

        <br />
        <br />

        {displayChart === 0 ? (
          <HighChart />
        ) : displayChart === 1 ? (
          <LineChart />
        ) : displayChart === 2 ? (
          <MyStockChart />
        ) : (
          <Clock />
        )}
      </>
    );
  }
}

export default ShowCharts;
