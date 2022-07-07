import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import NotesJson from "../../static/note.json";

export default class Button extends Component {

    render() {
        const ListGameName = NotesJson.flatMap((nt) => {
            {
                return nt.tags;
            }
        });

        ListGameName.sort();
        console.log(ListGameName);
        let result = ListGameName.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
        console.log(result);
        console.log(result.keys());
        console.log(result.values());

        const dataHorBar = {
            labels: Array.from(result.keys()),
            datasets: [
                {
                    label: 'Количество партий',
                    backgroundColor: '#2f8aec',
                    borderColor: 'rgb(8,88,167)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgb(115,40,171)',
                    hoverBorderColor: 'rgb(178,152,191)',
                    data: Array.from(result.values())
                }
            ]
        };
        return (
            <div>
                <HorizontalBar data={dataHorBar}/>
            </div>
        );

    }
}