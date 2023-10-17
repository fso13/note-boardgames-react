import React, {Component} from 'react';
import NotesJson from "../../static/note.json";
import { Chart } from "react-google-charts";

export const options = {

    isStacked: "true",
            bar: {
              groupWidth: "85%"
            },
    height: "2500",
    chartArea: { width: "50%", height: "2500" },
    title: "Сыгранные партии",
    legend: { position: "none" },
    hAxis: {
      title: "",
      minValue: 0,
    },
    vAxis: {
        textStyle : {
            fontSize: 18 // or the number you want
        },
      title: "",
    },
  };



export default class Button extends Component {

    render() {
        const ListGameName = NotesJson.flatMap((nt) => {
            {
                return nt.tags;
            }
        });

        let result = ListGameName.reduce((acc, e) => acc.set(e.title, (acc.get(e.title) || 0) + e.count), new Map());
        let data =  [["Игра", ""]].concat(Array.from(result.entries()).sort((a, b) => b[1] - a[1]))



        console.log(data)

        return (
            <div>
                
                    <Chart
                    chartType="BarChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
    />
            </div>

        );
    }
}