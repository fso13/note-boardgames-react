import {Row,} from "reactstrap";
import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listYear from '@fullcalendar/list';
import timeGridDay from '@fullcalendar/timegrid';
import NotesJson from "../../static/note.json";
import MetaTags from 'react-meta-tags';

const Calendar = () => {
    return (
        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>Календарь</title>
                    <meta id="og-title" property="og:title" content="Календарь"/>
                </MetaTags>
            </div>
            <Row>
                <FullCalendar
                    timeZone='UTC'
                    firstDay={1}
                    locale={'ru'}
                    allDayText='Весь вечер'
                    headerToolbar={{
                        left: 'prev,next',
                        center: 'title',
                        right: "dayGridMonth,listYear"
                    }}
                    views={{
                        dayGridMonth: {buttonText: "за месяц"},
                        listYear: {buttonText: "за год"}
                    }}
                    plugins={[dayGridPlugin, listYear, timeGridDay]}
                    initialView="dayGridMonth"
                    events={NotesJson.flatMap((nt) => {
                        {
                            return nt.tags.map((tag) => {
                                return {
                                    title: tag,
                                    date: nt.title.split('.').reverse().join('-')
                                }
                            })
                        }
                    })}
                />
            </Row>
        </div>
    );
};

export default Calendar;
