const dummyCalendar = [
  {
    summary: "Steven Tyler",
    start: {
      dateTime: "2020-03-16T15:30:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T16:45:00+01:0"
    }
  },
  {
    summary: "Steven Tyler",
    start: {
      dateTime: "2020-03-16T06:15:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T08:15:00+01:0"
    }
  },
  {
    summary: "Steven Tyler",
    start: {
      dateTime: "2020-03-16T22:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T23:15:00+01:0"
    }
  },
  {
    summary: "Steven Tyler",
    start: {
      dateTime: "2020-03-16T18:45:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T20:15:00+01:0"
    }
  }
];

window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

