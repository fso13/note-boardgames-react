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

        let result = ListGameName.reduce((acc, e) => acc.set(e.title, (acc.get(e.title) || 0) + e.count), new Map());

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

                dataPoints: Array.from((Array.from(result.entries()).sort((a, b) => a[1] - b[1])).map((item) => {
                    return {y: item[1], indexLabel: item[0], indexLabelFontSize: 15}
                }))
            }]
        }

        return (
            <div>
                
                <div className={"chart"}>
                    <CanvasJSChart options={options} className={"chart"}
                    />
                </div>
            </div>

        );
    }

    addSymbols(e) {
        return CanvasJS.formatNumber(e.value);
    }
}