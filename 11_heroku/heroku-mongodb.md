# Inline Exericse: Heroku and MongoDb

## Goal

The goal of this exercise is to use MongoDb with Heroku.

## Instructions

1. Navigate to the new Heroku project you created for the previous exercise in your command line
1. Install `mongoose` with `npm install --save`
1. Connect to `mongoose` using `process.env.MONGODB_URI` in `app.js`
1. Add a mongoose model `Book` to `app.js`, it should have one required String
   field called `title`
1. Create a `GET /newbook/:title` route that creates a new book with
   `req.params.title`, `.save()`s it and returns the newly created book as JSON
1. Create a `GET /books` route that uses `.find()` and returns all books from
   MongoDb as JSON.
1. First commit, then push your app with `git push heroku`
1. Add your MONGODB_URI to Heroku. Do this with the following in your terminal:
    ```
    heroku config:set MONGODB_URI=YOUR_URI_HERE
    ```
    You can double check if you've added it correctly on your Heroku dashboard (Settings > Config Variables)
1. Create a couple books on your app on Heroku, use `/books` to check that they
   are there.
