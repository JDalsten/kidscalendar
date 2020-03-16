const dummyCalendar = [
  {
    summary: "Steven Tyler",
    start: {
      dateTime: "2020-03-15T15:30:00+01:00"
    },
    end: {
      dateTime: "2020-03-15T01:15:00+01:0"
    }
  },
  {
    summary: "Steven Tyler",
    start: {
      dateTime: "2020-03-15T06:15:00+01:00"
    },
    end: {
      dateTime: "2020-03-15T01:15:00+01:0"
    }
  },
  {
    summary: "Steven Tyler",
    start: {
      dateTime: "2020-03-15T22:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-15T01:15:00+01:0"
    }
  },
  {
    summary: "Steven Tyler",
    start: {
      dateTime: "2020-03-15T18:45:00+01:00"
    },
    end: {
      dateTime: "2020-03-15T01:15:00+01:0"
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

