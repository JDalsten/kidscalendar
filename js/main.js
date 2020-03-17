const dummyCalendar = [
  {
    summary: "Event #1",
    start: {
      dateTime: "2020-03-16T00:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T02:00:00+01:0"
    }
  },
  {
    summary: "Event #2",
    start: {
      dateTime: "2020-03-16T03:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T04:15:00+01:0"
    }
  },
  {
    summary: "Event #3",
    start: {
      dateTime: "2020-03-16T06:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T08:00:00+01:0"
    }
  },
  {
    summary: "Event #4",
    start: {
      dateTime: "2020-03-16T08:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T09:00:00+01:0"
    }
  },
  {
    summary: "Event #5",
    start: {
      dateTime: "2020-03-16T09:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T11:00:00+01:0"
    }
  },
  {
    summary: "Event #6",
    start: {
      dateTime: "2020-03-16T11:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T12:00:00+01:0"
    }
  },
  {
    summary: "Event #7",
    start: {
      dateTime: "2020-03-16T13:00:00+01:00"
    },
    end: {
      dateTime: "2020-03-16T16:00:00+01:0"
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

