# Individual Exercise: Forms

## Goal

### [Watch Me: Form Validation](https://vimeo.com/221131674)

The goal of this exercise if to familiarize yourself with a few key concepts: **server-side rendering w/ templating** and **form validation**.

In comparison to everything we've done before, this will feel a little bit
different. Typically, we fetch data and then render new items on a page
client-side (that is, the browser). In this case, we're going to be fetching
*static* pages, and showing those. *Static* pages that you won't have to render
anything on, ***because it's already done ('compiled' with the necessary data)
on the server*** before it's sent.

At the end of this, you should be a bit more comfortable with using templates to
render a page and validating form input.

## Read the docs

For this exercise you will need to refer to the following documenation as you
work through the exercise.

### [Reference: `express-validator` docs](https://github.com/ctavan/express-validator)
### [Reference: `node-validator` docs](https://github.com/chriso/validator.js)

## Instructions

1. Install your dependencies.

    ```bash
    npm install
    ```

1. We have included the following for you:

    1. [**Bootstrap**](https://www.npmjs.com/package/bootstrap) - for building the UI
    1. [**Handlebars**](https://www.npmjs.com/package/handlebars) - for rendering our pages server-side
    1. [**Express**](https://www.npmjs.com/package/express) - our web server framework

1. Start your web server

    ```bash
    npm start
    ```

1. Use **Bootstrap** to create a user registration form (do this in `/forms/views/register.hbs`)

    Create user registration form according to this specification:

    <table>
      <tr>
        <th> Field name </th>
        <th> Required </th>
        <th> Form field type </th>
        <th> Validation rules </th>
      <tr>
      <tr>
        <td> First Name </td>
        <td> Y </td>
        <td> text </td>
        <td> Must not be empty </td>
      </tr>
      <tr>
        <td> Middle initial </td>
        <td> N </td>
        <td> text </td>
        <td> Single letter </td>
      </tr>
      <tr>
        <td> Last name </td>
        <td> Y </td>
        <td> text </td>
        <td> Must not be empty </td>
      </tr>
      <tr>
        <td> Date of Birth </td>
        <td> N </td>
        <td> date </td>
        <td> Must be a date in the past</td>
      </tr>
      <tr>
        <td> Password </td>
        <td> Y </td>
        <td> password </td>
        <td> Must not be empty </td>
      </tr>
      <tr>
        <td> Repeat Password </td>
        <td> Y </td>
        <td> password </td>
        <td> Must not be empty and match the password field </td>
      </tr>
      <tr>
        <td> Gender </td>
        <td> Y </td>
        <td> radio </td>
        <td> Male/Female/Rather not say </td>
      </tr>
      <tr>
        <td> Sign-up for newsletter </td>
        <td> Y </td>
        <td> checkbox </td>
        <td> Must not be blank </td>
      </tr>
      <tr>
        <td> Bio </td>
        <td> N </td>
        <td> textarea </td>
        <td> </td>
      </tr>
    <table>

    You will be creating two pages: a registration form page and a profile page.
    Create a form with these fields using Bootstrap and Handlebars. Similarly,
    create a separate page for displaying all this information once you've
    successfully registered.

    If all data is valid, render a profile page using this information after submit.

    If not, render form back with error messages on validation errors.
1. When you're done with your form it should look something like this (it's ok if it's slightly different).

    ![Empty form](img/form.png)

1. Make a `/register` route in your express app.

    The `/register` route should respond to 2 http methods: **GET** and **POST**.
    It should do two things:

    1. if it's a **GET** request, it should return the handlebars-compiled empty form
    2. if it's a **POST** request, it should validate the post data, and if the post data is:

        - **valid**, it should send the handlebars-compiled profile page

            <details><summary>
            Screenshot
            </summary><p>

            ![Valid form output](img/registered.png)

            </p></details>

        - **invalid**, it should send the handlebars-compiled registration form
        with an error message about which form fields are invalid.

            <details><summary>
            Screenshot
            </summary><p>

            ![Registration error](img/error.png)

            </p></details>

## Validation

Use [`express-validator`](https://github.com/ctavan/express-validator) to validate form fields.

Example usage:

```javascript
app.post('/', function(req, res) {

  // VALIDATION
  // checkBody only checks req.body; none of the other req parameters
  req.checkBody('requiredNumberParam', 'Invalid requiredNumberParam').notEmpty().isInt();
  // checkQuery only checks req.query (GET params).
  req.checkQuery('required', 'Invalid getparam').isInt();
  var errors = req.validationErrors();
  if (errors) {
    res.send('There have been validation errors: ' + errors, 400);
  } else {
    res.render('index');
  }
}
```

## Templates and Handlebars

Your templates live under `views/`. We have put two templates there for you to edit.

1. `register.hbs`: The registration form. You should use this template to render validation errors if there are any as well.
1. `profile.hbs`: This is what should be rendered if the user submits a valid registration request.

These templates are rendered using [**Handlebars**](http://handlebarsjs.com).
