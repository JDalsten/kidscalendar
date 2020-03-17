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
    listUpcomingEvents();
    
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
    dailySessions(dummyCalendar);
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

function listUpcomingEvents() {
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
        // Handle the results here (response.result has the parsed body).
        let sessionList = response.result.items;
        dailySessions(sessionList);
        console.log(sessionList);
      },
      function(err) { console.error("Execute error", err); }); 
  
}

console.log("new50");
