# Inline Exericse: My first Heroku deploy

## Goal

The goal of this exercise is to deploy our first app to Heroku.

## Instructions

1. Create a new Git repository **outside** `week04` with `git init`.
1. Add a `.gitignore` file to your repository. Add the following lines to
   it:

    ```
    node_modules
    npm-debug.log
    .DS_Store
    ```

1. `npm init` to create your `package.json`
1. Install `express` with `npm install --save`
1. Create an `app.js` file, `app.js` should:
    1. `require('express')`
    1. Create `app` using `express()`
    1. Create a `GET /` route that `res.send()`s a string of your choice
    1. Listen on a port

    ```javascript
    app.listen(process.env.PORT || 3000);
    ```

1. Add a start script to `package.json` that runs `node app.js`.
   Run `npm start` and confirm your server works.
1. Commit your changes locally, then create a new heroku app and push your code there:

    ```bash
    heroku create
    git push heroku
    ```

1. Connect to Heroku from your laptop and check that it works.
1. Post a link to your Heroku app on Slack so your friends can check it out too! Welcome to the Cloud!

