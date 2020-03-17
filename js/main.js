const dummyCalendar = [
  {
    summary: "Event #1",
    start: {
      dateTime: "2020-03-16T00:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T02:00:00+01:0"
    },
    id: "12312231"
  },
  {
    summary: "Event #2",
    start: {
      dateTime: "2020-03-16T03:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T04:15:00+01:0"
    },
    id: "13231231"
  },
  {
    summary: "Event #3",
    start: {
      dateTime: "2020-03-16T06:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T08:00:00+01:0"
    },
    id: "1431231"
  },
  {
    summary: "Event #4",
    start: {
      dateTime: "2020-03-16T08:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T09:00:00+01:0"
    },
    id: "12531231"
  },
  {
    summary: "Event #5",
    start: {
      dateTime: "2020-03-16T09:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T11:00:00+01:0"
    },
    id: "12316231"
  },
  {
    summary: "Event #6",
    start: {
      dateTime: "2020-03-16T11:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T12:00:00+01:0"
    },
    id: "12371231"
  },
  {
    summary: "Event #7",
    start: {
      dateTime: "2020-03-16T12:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T12:33:00+01:0"
    },
    id: "12381231"
  },
  {
    summary: "Event #8",
    start: {
      dateTime: "2020-03-16T12:33:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T13:53:00+01:0"
    },
    id: "1238123s1"
  },
  {
    summary: "Event #9",
    start: {
      dateTime: "2020-03-16T13:53:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T15:00:00+01:0"
    },
    id: "12381s23s1"
  }
];

window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

