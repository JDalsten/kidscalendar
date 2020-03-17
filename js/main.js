const dummyCalendar = [
  {
    summary: "Tegnefilm",
    start: {
      dateTime: "2020-03-16T00:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T02:00:00+01:00"
    },
    id: "12312231"
  },
  {
    summary: "Morgenmad",
    start: {
      dateTime: "2020-03-16T03:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T04:15:00+01:00"
    },
    id: "13231231"
  },
  {
    summary: "Agnes skole / E+V fri leg",
    start: {
      dateTime: "2020-03-16T06:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T08:00:00+01:00"
    },
    id: "1431231"
  },
  {
    summary: "Formiddagsmad",
    start: {
      dateTime: "2020-03-16T08:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T09:00:00+01:00"
    },
    id: "12531231"
  },
  {
    summary: "Agnes skole / E+V krea",
    start: {
      dateTime: "2020-03-16T09:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T11:00:00+01:00"
    },
    id: "12316231"
  },
  {
    summary: "Frokost",
    start: {
      dateTime: "2020-03-16T11:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T12:00:00+01:00"
    },
    id: "12371231"
  },
  {
    summary: "Fri leg / tur m. Berta",
    start: {
      dateTime: "2020-03-16T12:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T12:33:00+01:00"
    },
    id: "12381231"
  },
  {
    summary: "Dagens ?",
    start: {
      dateTime: "2020-03-16T12:33:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T14:32:00+01:00"
    },
    id: "1238123s1"
  },
  {
    summary: "Event #9",
    start: {
      dateTime: "2020-03-16T22:32:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T23:04:00+01:00"
    },
    id: "12381s23s1"
  },
  {
    summary: "Event 10 frokost",
    start: {
      dateTime: "2020-03-16T23:04:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T23:30:00+01:00"
    },
    id: "1238s1s23s1"
  }
];

window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

