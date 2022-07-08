import React, {Component} from 'react';
import NotesJson from "../../static/note.json";
import * as CanvasJSReact from "canvasjs-react-charts";
import "./Chart.scss";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Button extends Component {

    render() {
        const ListGameName = NotesJson.flatMap((nt) => {
            {
                return nt.tags;
            }
        });

        ListGameName.sort();
        let result = ListGameName.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
        console.log(result.entries());

        const options = {
            height: 1000,
            indexLabelFontSize: 15,
            animationEnabled: true,
            theme: "light2",
            title: {
                fontSize: 20,
                text: "Количество сессий"
            },
            axisY2: {
                labelFontSize: 15,
                interval: 1
            },
            axisX2: {
                labelFontSize: 0,
            },
            dataPointWidth: 13,
            data: [{
                axisYType: "secondary",
                axisXType: "secondary",
                type: "bar",

                dataPoints: Array.from(Array.from(result.entries()).map((item) => {
                    return {y: item[1], indexLabel: item[0], indexLabelFontSize: 15}
                }))
            }]
        }

        return (
            <div className={"chart"}>
                <CanvasJSChart options={options} className={"chart"}
                    /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );


    }

    addSymbols(e) {
        return CanvasJS.formatNumber(e.value);
    }
}