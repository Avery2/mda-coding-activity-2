import React, {useEffect, useState} from 'react';
import {DatePicker} from '@mantine/dates';
import {Button, Table, TableData} from '@mantine/core';

interface Event {
  date: string;
  event: string;
  description: string;
}

interface CalenderWrapperProps {
  events: Event[];
}

const eventsToTableData = (events: Event[], monthView: boolean): TableData => ({
  caption: monthView ? 'Events for this month' : 'Events for selected dates',
  head: ['Date', 'Event', 'Description'],
  body: events.map((event) => [new Date(event.date).toDateString(), event.event, event.description]),
});

const currentMonthTableData = (events: Event[], date: Date): TableData => {
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const currentMonthEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
  });
  return eventsToTableData(currentMonthEvents, true);
}

const currentDatesTableData = (events: Event[], dates: Date[]): TableData => {
  const currentDatesEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return dates.some((date) => date.toDateString() === eventDate.toDateString());
  });
  return eventsToTableData(currentDatesEvents, false);
}

const CalenderWrapper: React.FC<CalenderWrapperProps> = ({events}) => {

    const dataFromEvents = currentMonthTableData(events, new Date());
    const [dates, setDates] = useState<Date[]>([]);
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
    const [eventsDisplayed, setEventsDisplayed] = useState<TableData>(dataFromEvents);
    const [isMonthView, setIsMonthView] = useState<boolean>(true);

    useEffect(() => {
      if (isMonthView) {
        setEventsDisplayed(currentMonthTableData(events, currentMonth));
      } else {
        setEventsDisplayed(currentDatesTableData(events, dates));
      }
    }, [currentMonth, dates, isMonthView]);

    return (
      <div>
        <Button variant="light"
          onClick={() => {
            setIsMonthView(!isMonthView);
          }}
        >
          {isMonthView ? 'Show only events for selected dates' : 'Show all events for this month'}
        </Button>
        <DatePicker
          type="multiple"
          value={dates}
          onMonthSelect={(month) => {
            setCurrentMonth(month);
          }}
          onNextMonth={(month) => {
            setCurrentMonth(month);
          }}
          onPreviousMonth={(month) => {
            setCurrentMonth(month);
          }}
          onChange={(newValue) => {
            setDates(newValue);
          }}
        />
        <Table data={eventsDisplayed}/>
      </div>
    );
  }
;

export default CalenderWrapper;
