# Inline exercise: Express middleware
## Time limit: 10 minutes

## Instructions

Let's write some basic Express middleware. Open up `skeleton/routes/index.js` to
get started! Install modules with `npm install`, then run the app locally using
`npm start` or `nodemon`.

1. Start by writing a simple middleware function that prints something to
   the console every time it intercepts a request.
1. Now, write a middleware function that prints the message "Access denied" if a
   user tries to access the `/hidden` route.
1. Next, write a middleware function that requires a user to log in if they're
   not already logged in. For now, just store the login information in a
   variable in `index.js`. If the user isn't logged in yet, you should redirect
   them to a login form, and keep track of the page the user tried to visit.
   After they log in using the form, redirect them back to the page they
   originally tried to access.
1. Finally, let a user access `/hidden` only if they've logged in. If not, they
   should continue to see "Access denied."

