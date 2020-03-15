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

// Client ID and API key from the Developer Console
var CLIENT_ID =
  "454882688468-8q009r6uk11poenblrh2clh9gfn9gr9t.apps.googleusercontent.com";
var API_KEY = "AIzaSyDJDZ8bb6thsrCpYlqr6oO-_XVPDy3Qwi8";

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

var authorizeButton = document.getElementById("authorize_button");
var signoutButton = document.getElementById("signout_button");

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    .then(
      function() {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
      },
      function(error) {
        appendPre(JSON.stringify(error, null, 2));
      }
    );
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = "none";
    signoutButton.style.display = "block";
    //listUpcomingEvents();
    userSessions();
    
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById("content");
  var textContent = document.createTextNode(message + "\n");
  pre.appendChild(textContent);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */

const userSessions = () => {
    let sessionList;
    function listUpcomingEvents() {
        var tasty;
        var startDay = new Date();
        startDay.setHours(0, 0, 0, 0);
        var endDay = new Date();
        endDay.setHours(23, 59, 59, 999);
        gapi.client.calendar.events
          .list({
            calendarId: "primary",
            timeMin: startDay.toISOString(),
            timeMax: endDay.toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 10,
            orderBy: "startTime"
          })
          .then(function(response) {
            var events = response.result.items;
            sessionList = events;
            tasty = events;
            console.log(events[0].start.dateTime);
            appendPre("Upcoming events:");
            if (events.length > 0) {
              for (i = 0; i < events.length; i++) {
                var event = events[i];
                var when = event.start.dateTime;
                if (!when) {
                  when = event.start.date;
                }
                appendPre(event.summary + " (" + when + ")");
              }
            } else {
              appendPre("No upcoming events found.");
            }
          });
      }
      console.log(sessionList);
      return sessionList;
}
 



const delaythis = () => {
  console.log(listUpcomingEvents());
};
console.log("new20");
