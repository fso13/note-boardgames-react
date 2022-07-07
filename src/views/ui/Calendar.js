import {Col, Row,} from "reactstrap";
import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listYear from '@fullcalendar/list';
import timeGridDay from '@fullcalendar/timegrid';
import NotesJson from "../../static/note.json";

const Calendar = () => {
    return (
        <div>
            <Row className="p-4">
                <Col>
                    <FullCalendar
                        timeZone='UTC'
                        firstDay={1}
                        locale={'ru'}
                        allDayText='Весь вечер'
                        headerToolbar={{
                            left: 'prev,next',
                            center: 'title',
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listYear"
                        }}
                        views={{
                            dayGridMonth: {buttonText: "Месяц"},
                            timeGridWeek: {buttonText: "Неделя"},
                            timeGridDay: {buttonText: "День"},
                            listYear: {buttonText: "Игра за год"}
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
                </ Col>
            </Row>
        </div>
    );
};

export default Calendar;
