import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapData from "../../constants/mapData";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapOptions: {
        title: {
          text: "Map Chart"
        },
        colorAxis: {
          min: 0,
          stops: [
            [0, "#EFEFFF"],
            [0.67, "#4444FF"],
            [1, "#000022"]
          ]
        },
        tooltip: {
          pointFormatter: function() {
            return this.properties["woe-label"].split(",")[0];
          }
        },
        series: [
          {
            mapData: mapData,
            dataLabels: {
              formatter: function() {
                return this.point.properties["woe-label"].split(",")[0];
              }
            },
            name: "Norway",
            data: [
              ["no-mr", 0],
              ["no-st", 1],
              ["no-ho", 2],
              ["no-sf", 42],
              ["no-va", 4],
              ["no-of", 5],
              ["no-nt", 6],
              ["no-ro", 7],
              ["no-bu", 8],
              ["no-vf", 9],
              ["no-fi", 10],
              ["no-no", 11],
              ["no-tr", 12],
              ["no-ak", 13],
              ["no-op", 14],
              ["no-he", 15],
              ["no-os", 16],
              ["no-te", 17],
              ["no-aa", 18]
            ]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"mapChart"}
          options={this.state.mapOptions}
        />
      </div>
    );
  }
}

export default Clock;
