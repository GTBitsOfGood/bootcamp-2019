# Inline exercise: Pagination with books

## Goal

The goal of this exercise is to get comfortable using `.sort()`,
`.limit()` and `.skip()`

## Instructions

1. Copy your `connect.js` into `week05/day2/books`
1. Import books into your table using [http://localhost:3000/import/books](http://localhost:3000/import/books)
1. Open `app.js`
1. Implement the "Next page" button
  1. Sort books by title in `GET /`
  1. Only display 20 books at a time in `GET /`
  1. Create a query parameter `page` in `GET /` that lets you page through books.
     Use `.skip()` to jump through books.
  1. Verify your work using the "Next page" button.
1. Hide "Next page" button on last page
  1. Change `res.render()` in `GET /` make sure `hasNext` is `false` when
    looking at the last page.
  1. Go to [localhost:3000/?page=4](http://localhost:3000/?page=4) you should
    not see a "Next page" link
1. Implement the "Previous page" buttons
  1. In `app.js`, implement the `prev` Handlebars helper function.
  1. Verify your work using the "Previous page" button.
