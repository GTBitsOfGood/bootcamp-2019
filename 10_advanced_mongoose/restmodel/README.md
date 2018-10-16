# Inline Exercise: Restaurant Model

## Goal

The goal of this exercise is to create models with one-to-one and
one-to-many relationships using embedded MongoDb arrays and objects.

## Instructions

1. Find the menu for your favorite restaurant online.
1. Pick 4 dishes that you like from the menu.
1. Edit `week05/day1/restmodel/menu.json`. Add your restaurant's name,
  the 4 dishes you picked and their names prices and ingredients.
1. Copy your `connect.js` from last week into this folder.
1. Edit `week05/day1/restmodel/app.js` where it says `YOUR MODEL HERE`
1. Edit the `Restaurant` model to add fields from `menu.json` to your model.
  The names of these fields should match the names in `menu.json`.
  <br>
  Fields to add:

   - Restaurant name
   - Menu
    - Menu item
      - Item name
      - Item price
      - Ingredients array
        - Ingredient name

1. Run your app with `npm start`.
1. Open up [localhost:3000/](http://localhost:3000/) check that it's empty.
1. Open up [localhost:3000/import/restaurants](http://localhost:3000/import/restaurants)
   to load the contents of `menu.json` into MongoDb.
1. Open up [localhost:3000/](http://localhost:3000/) check that it
  contains the right information.
