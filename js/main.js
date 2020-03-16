const dummyCalendar = [
  {
    summary: "Steven Tyler",
    start: {
      dateTime: "2020-03-16T15:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T16:00:00+01:0"
    }
  },
  {
    summary: "Steven Tyler",
    start: {
      dateTime: "2020-03-16T16:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T17:15:00+01:0"
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

