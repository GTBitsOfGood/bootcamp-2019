# Inline exercise: Cookies
## Time limit: 10 minutes

## Goal

Your goal is to use cookies to create a simple session store, allowing you to
store information about a user such as their username. It should work like this:

- If a user accesses the `/` route without logging in, they get a message saying
  "I don't know who you are," with a link to the login form.
- If a user accesses the `/` route after logging in, they're welcomed by name,
  e.g., "Welcome back, Ethanello156," with a link to the logout form.

## Instructions

Use the scaffolding in the `skeleton/` folder. The views and some of the routes
are filled in for you. Open up `skeleton/routes/index.js` to get started.

Install modules with `npm install`, then run the app locally using
`npm start` or `nodemon`.

## Tips

You can read a cookie using `req.cookies`. This is an object that stores each
cookie keyed by name, e.g., a cookie called "mySession" would be stored at
`req.cookies.mySession`.

You can set a cookie like this:

````javascript
res.cookie(cookieName, cookieValue);
````
