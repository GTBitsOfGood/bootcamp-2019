# Mini Project 1: Kickstarter

## Introduction

Welcome to the wild world of Node web applications! With Node, Mongo/Mongoose,
Express, and Handlebars, you now have the tools you need to build a
fully-fledged, fully-functional backend web application.

## ⚠️ This is your first mini project! It combines a lot of concepts! ⚠️

### The goal

Our goal is to write a clone of Kickstarter with Node and Express.

Here are the features we're going to implement:

- A front page which lists all projects
- A page that lets you view a project, and donate to that project
- A page that lets you create a new project
- The ability to filter and sort the list of projects on the front page using
  query parameters

## Project files

We've set up a simple Express project for you.

These are the files you will be editing for this exercise:

- Express routes (i.e. endpoints): `07_mini_project_1/routes.js`
- Mongoose models are in: `07_mini_project_1/models.js`
- Your views are in the folder: `07_mini_project_1/views/`
- CSS styles for all pages: `07_mini_project_1/public/css/main.css`

These files, you do **not** need to edit, but you may still find them interesting:

- Express starter script: `07_mini_project_1/app.js`
- Handlebars layout template:
  `07_mini_project_1/views/layouts/main.hbs`

## Setup

We don't store MongoDb usernames and passwords in Git for security reasons.
So you need to create a new MongoDb database on mLab and configure your app
to use it.

1. Create a new database in [mLab](https://mlab.com/home)
2. Click on the database you've just created, then click on `Users > Add
   database user`, and pick a username and password
3. Copy the **MongoDb URI** on mLab and replace `<dbuser>` `<dbpassword>` with the
  username and password you just created. It should look something like this:

    ```bash
    mongodb://yourusername:yourpassword@ds055555.mlab.com:55555/kickstarter-database
    ```

4. Now we are going to store this URI as an environmental variable using a shell script. Create a new file `env.sh` in `07_mini_project_1` and put the `MONGODB_URI` from the previous step there:

    ```bash
    export MONGODB_URI="mongodb://yourusername:yourpassword@ds055555.mlab.com:55555/kickstarter-database"
    ```

5. Run `source env.sh` to import the environment variable from `env.sh`. For an explanation of `source` [click here](https://bash.cyberciti.biz/guide/Source_command). **IMPORTANT**: You must run this command each time you open a new shell. This is because the environmental variables are initialized each time a new shell is opened.
  Note: you can use `dotenv` as an alternative to steps 4 & 5 if you feel comfortable with figuring it out yourself -- ask the tech team for help if you get stuck.

6. Run `npm install` to install all of our project's dependencies.

7. Start your app with `npm start`, if you see this message then you are good to go!

    ```text
    Success: connected to MongoDb!
    ```

    Note: If you encounter a warning reguarding `Db.prototype.authenticate` just ignore it for now. It has been documented as a [bug](https://github.com/Automattic/mongoose/issues/5304). Even professional programmers are known to make mistakes!

## Getting oriented

We've implemented the `GET /create-test-project` endpoint in
`07_mini_project_1/routes.js` for your reference.  This endpoint
creates a `Project` object and saves it to MongoDb.

You can find the definition of the `Project` model in
`07_mini_project_1/models.js`.

Visit [http://localhost:3000/create-test-project](http://localhost:3000/create-test-project)
to create test data and look at your database in mLab. Note how there's now a
collection called `projects` and inside this collection you should see the newly
created document.

## Exercises

### Part 1: View all projects

1. Implement the `GET /` endpoint in `07_mini_project_1/routes.js`.
  Use `Project.find()` to get all the Projects from MongoDb and render
  them on `index.hbs`.

    Remember you have to do `res.render()` inside the callback for `.find()` like
    so:

    ```javascript
    SomeMongoDbModel.find((err, array) => {
      res.render('template', {items: array});
    });
    ```

2. Edit `07_mini_project_1/views/index.hbs` and use [`{{#each}}`](http://handlebarsjs.com/builtin_helpers.html) to display all the Projects you get from `.find()`.

### Part 2: Create project

1. Edit `07_mini_project_1/views/index.hbs` and add a link (i.e. an `<a>`
   tag) that reads "Create new project" and points to
   `http://localhost:3000/new` at the bottom of the page.
2. Edit `07_mini_project_1/models.js` and add/edit these properties for
   the `Project` model:

    1. `title`: make this field required
    2. `goal`: Type: `Number`, required
    3. `description`: Type: `String`
    4. `start`: Type: `Date`, required
    5. `end`: Type: `Date`, required

3. Implement the `GET /new` endpoint in `07_mini_project_1/routes.js`.
  Render `new.hbs`.
4. Edit `07_mini_project_1/views/new.hbs` and render an HTML form
  that has `method` `POST` and `action` `/new`. This form should contain:
    1. `title`: text input field
    2. `goal`: text input field
    3. `description`: [Textarea](http://www.w3schools.com/TAgs/tag_textarea.asp)
    field
    4. `start`: Date input field
    5. `end`: Date input field
5. Implement the `POST /new` endpoint in `07_mini_project_1/routes.js`.
    1. Ensure that the form fields contain valid data, if there are any errors
    render `new.hbs` with error messages and the form fields filled in.

        You can use the `value=""` HTML attribute for this purpose:

        ```html
        <input type="text" name="title" value="{{project.title}}">
        ```

    2. If there are no validation errors, create a new `Project` and
    `.save()` it. If `.save()` is successful use `res.redirect()` to redirect to `/`.
6. You should now see the newly created project on your "View all projects"
  page.

### Part 3: View a single project

1. Implement the `GET /project/:projectid` endpoint in `07_mini_project_1/routes.js`.
  Get the `Project` with the given `projectid` from MongoDb using `Project.findById()`
  then render `project.hbs` with this `Project`.
  You can find `projectid` under `req.params`.
2. Edit `07_mini_project_1/views/project.hbs` and display
  the `Project` `title`, `goal`, `description`, `start` and `end` dates.

### Part 4: Contribute to a project

Let's add the ability to make contributions to projects a la Kickstarter.
We're going to add a new form to the "View a single project" page
that allows us to make contributions.

1. Add a property to the `Project` model in `07_mini_project_1/models.js`:
    - `contributions`: Type: `Array`, contains an array of objects with `name` and `amount` properties.
2. Edit `07_mini_project_1/views/project.hbs` and add an HTML form
  for making contributions. This form should have `name` and `amount` input
  fields for specifying who is making the contribution and the size of the
  contribution.
    - For the `amount` input field, use an `<input type="number" …>`.
3. Implement the `POST /project/:projectid` endpoint in `07_mini_project_1/routes.js`.
  This endpoint should get the `Project` from MongoDb with `.findById()`,
  add a new object to the `contributions` array and `.save()` it back.
4. Edit `07_mini_project_1/views/project.hbs` and display:
     1. Total amount of contributions made.
     2. Percentage of the project goal met
       (use [a Bootstrap progress bar](http://www.w3schools.com/bootstrap/bootstrap_progressbars.asp))
     3. List of all contributions showing who and how much.

---

### Part 5: Project categories

1. Add a property to the `Project` model in `07_mini_project_1/models.js`:

    - `category`: Type: `String`, required. Ensure that this property can only have
    one of these values using the `enum` option in mongoose:

        1. `Famous Muppet Frogs`
        2. `The Pen Is Mightier`
        3. `Famous Mothers`
        4. `Drummers Named Ringo`
        5. `1-Letter Words`
        6. `Months That Start With "Feb"`
        7. `How Many Fingers Am I Holding Up`
        8. `Potent Potables`

    Example `enum` usage:

    ```javascript
    // This model can be used to create Fords and Toyotas
    mongoose.Model('Car', {
      make: {
        type: String,
        enum: ['Ford', 'Toyota']
      }
    })
    ```

2. Edit `07_mini_project_1/views/new.hbs` and add a dropdown
  (i.e. a picklist) to the form to specify the `Project` `category`.
3. Edit `07_mini_project_1/views/project.hbs` and display
  the project category.

### Part 6: Edit project

1. Create a new view in `views` called `editProject.hbs`, add form fields
  to represent all the `Project` properties. You can copy `new.hbs`
  to start with!
2. Create a new endpoint in `routes.js` `GET /project/:projectid/edit`
  that gets the given `Project` from MongoDb using `.findById()` and
  renders `editProject.hbs` with the `Project` object. When the project
  edit page loads, it should have all the properties of the project
  being edited pre-filled into form fields.
3. Create a new endpoint in `routes.js` `POST /project/:projectid/edit`.
  The HTML form in `editProject.hbs` should `POST` data to this endpoint
  (using `action` and `method`).

    When this route is called use [`.findByIdAndUpdate()`](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate)
    to update the `Project` object:

    ```javascript
    Project.findByIdAndUpdate(req.params.projectid, {
      title: req.body.title,
      // YOUR CODE HERE
    }, (err) => {
      // YOUR CODE HERE
    });
    ```

### Part 7: Sort projects

1. Under `GET /`, add two query parameters: `sort` and `sortDirection`.

    When the `sort` query parameter is specified use `.sort()` when doing
    `.find()` to sort results you're getting back from MongoDb.

    If `sortDirection` is not specified assume ascending (i.e. increasing)
    order.

    [Mongoose `.sort()` usage](http://stackoverflow.com/a/15081087)

    Example query parameter usage with sort:

    ```javascript
    if (req.query.sort) {
      const sortObject = {};
      sortObject[req.query.sort] = 1;
      SomeMongoDbModel.find().sort(sortObject).exec((err, array) => {
        // YOUR CODE HERE
      });
    }
    ```

2. Add buttons or links to `07_mini_project_1/views/index.hbs` to sort
  projects by `start`, `end`, `goal` using the query parameters from
  the previous step.

### Part 8: Sort by total contributions

Make it possible to sort projects by their total contribution.

We can't sort by total contributions inside MongoDb because there is no
`totalContributions` property. Get all projects from MongoDb, then
JavaScript's native array `.sort()` method. You can use `underscorejs` from NPM to help you with the sorting if you'd like.

### Part 9: Filter projects by funding status

Make it possible to filter projects based whether they have met their funding
goal. Similar to "Part 8" we have to get all `Project`s from MongoDb
and filter them ourselves.

You should add links to `index.hbs` to allow:

1. View fully funded projects
2. View projects that are not fully funded

### Bonus: Part 10: Project images

Allow users to specify an optional image URL when creating project.  Display
this image on both the "View all projects" and the "View a single project"
pages.

### Double Bonus: Part 11: Validate forms with Bootstrap

Use
[HTML form validation rules](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Data_form_validation)
to enforce the validation checks performed by mongoose on HTML as well.
