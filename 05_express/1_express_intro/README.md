# Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

Today we will learn how to build a basic CRUD application with Express using Handlebars for our templating needs.

## Contents

1. Section 1: HTTP, Express, and Postman
2. Section 2. Queries, Parameters, and Status codes
3. Section 3. Templating and Handlebars
4. Section 4. HTML Forms

---

## Section 1: HTTP, Express, and Postman

### [Watch me: Express Introduction](https://youtu.be/eSYhlrcjjk8)

### [Watch me: HTTP Introduction + Postman](https://youtu.be/5LHwIfWoL4I)

### Section 1a. Postman

1. [Install Postman][postman] and make a `GET` request to `https://bog-postman.herokuapp.com/`

    When you are successful you will see a message in the output panel:

    ```text
    Woot Woot, Postman rocks!
    ```

2. Make a `GET` request to `https://bog-postman.herokuapp.com/first`
    (**note the `/first` at the end**) with the request query parameter
    `bootcamp` set to `rocks`.

    You can do this by either editing the URL directly or clicking on `Params` and adding a key and value.

    **You should see:**

    ```text
    Yes it does. Part 1 complete!
    ```

    <details><summary>
    Screenshot
    </summary><p>

    ![postman2](img/postman2.png)

    </p></details>

3. Now we can make a `POST` request with some JSON contents. We put the contents of the request in the Body section and change the `Content-Type` header so the server knows how to interpret the data.

    1. Make a request to `https://bog-postman.herokuapp.com/second`
    2. Set method to `POST`
    3. Set the body to be `raw` add the content `{ "skills": ["javascript", "html", "css", "node"] }`. Make sure the content type is set to `application/json`.

        <details><summary>
        Screenshot
        </summary><p>

        ![postman3](img/postman3.png)
        </p></details>


    **You should see:**

    ```text
    Legit. Part 2 complete!
    ```

### Section 1b. Express GET routes

1. Open your terminal and navigate to the `/05_express/1_express_intro/1_poet` folder
2. Run `npm install`
3. Open `/05_express/1_express_intro/1_poet/server.js` in your favourite text editor.
4. Require the `express` library (`const express = require('express')`)
5. Initialize your express app instance (`const app = express()`)
6. Create the following routes:
    - __`GET /`__: Send the string `"Welcome to the Bootcamp Poetry API"`.
    - __`GET /api/*`__: Send the string `"We couldn’t find any routes matching this endpoint"`.
        - `*` denotes any string (i.e. `/api/anything`, `/api/unicorn`, `/api/p/r/a/t/h`, etc.)
        - you will need to use `app.use()` for this
    - __`GET /api/poem`__: Send the text from the file `/5_express/1_express_intro/1_poet/poem.txt`
        - use the following code to read `poem.txt`
            ```javascript
            const fs = require('fs');
            const poem = fs.readFileSync('./poem.txt', 'utf8');
            ```
    - __`POST /api/success`__: Send the json `{success: true}` using `res.json()`. [Reference docs](http://expressjs.com/en/api.html#res.json)
7. Listen on port __3000__
8. Use Postman to verify all the routes you have created. You can

connect to your local server at `http://localhost:3000`

---

## Section 2. Queries, Parameters, and Status codes

### [Watch me: HTTP Queries and Parameters](https://youtu.be/FWbis5Ntkzg)

### [Watch me: Status Codes](https://youtu.be/nSIapuXms3w)

1. Open this folder (`/05_express/1_express_intro/2_express_echo`) in your Terminal on Mac or Git Bash on Windows.
2. Install dependencies with NPM:
    ```bash
    npm install
    ```
3. Open `app.js` in your editor of choice and add an express http endpoint so that it prints correctly on step 5 (follow the directions in the `app.js` file).
4. Start your server. **Note**: When you change `app.js` you have to restart it to see your changes!
    ```bash
    npm start
    ```
5. Verify that your code is working correctly by opening [http://localhost:3000/hello?name=Simba](http://localhost:3000/hello?name=Simba) in Chrome. It should display:

    ```text
    Hello there Simba!
    ```
6. Stop your server with <kbd>Control</kbd>+<kbd>C</kbd> in your Terminal/PowerShell.

---

## Section 3. Templating and [Handlebars](http://handlebarsjs.com/)

### Section 3a. Setting up Handlebars

### [Watch me: Express Templating](https://youtu.be/nVZ9zaMspm8)

The following set of tasks will require setting up your own Express app with Handlebars templating. You should refer back to the video if you get stuck on a task.

1. Navigate to `/05_express/1_express_intro/3_handlebars_examples/1_hello_world/`: This is the folder you will be working in
2. Start your Node app (you can use `npm init`)
3. Install the required packages
    - `express`
    - `express-handlebars`
4. Create an `app.js` file: This is where you will set up Express to use handlebars
5. Create the following routes:
    - `/`: Displays the text `"Hello World"` from a `.hbs` file
    - `/:error`: Displays the text `"<error> page not found, did you enter the correct url?"` where `<error>` is the text entered as a param.
        - __Example:__ `/about` will render a handlebars page with the text `about page not found, did you enter the corrent url?`.
6. Run your node app and make sure the above routes work!

### Section 3b. If-Else in Handlebars

### [Watch me: If-Else Handlebars](https://youtu.be/oNHFELqxazo)

1. Open `/05_express/1_express_intro/3_handlebars_examples/2_conditional/app.js` and note how the `/:word` endpoint is implemented.

    This endpoint renders `condition.hbs` with the following data:

    ```js
    {
      isEven: Boolean, // true if word has even number of letters
      word: String // the word entered at :word
    }
    ```

2. Edit `/05_express/1_express_intro/3_handlebars_examples/2_conditional/views/condition.hbs` and display `<h1>The word <entered-word-here> has an even number of letters!</h1>` if `isEven` is true, otherwise display `<h1>The word <entered-word-here> has an odd number of letters!</h1>`

    <details><summary>
    Odd letter screenshot
    </summary><p>

    ![odd]

    </p></details>

    <details><summary>
    Even letter screenshot
    </summary><p>

    ![even]

    </p></details>

[odd]: img/odd.png
[even]: img/even.png

3. Run `npm install`, `node app.js`, and open to serve your handlebars files on `localhost:3000`, and make sure your above routes work as intended!

### [Watch me: Looping in Handlebars](https://youtu.be/LRD-8JFGPWc)

1. Open `/05_express/1_express_intro/3_handlesbars_examples/3_profiles/` in your Terminal
2. Run `npm install`
3. Take a look at `data.json`; this is a list of student info that contains `first_name`, `last_name`, `email`, and `gender`.
4. In `/views/index.hbs`, create a Handlebars template that, given an array of students, displays their first name, last name, and email in a list.
    - You can name the array in your loop whatever you like, since you're the one writing the Express code.
5. Create the following routes that render the template you created in the previous step:
    - `/`: A directory of __ALL__ students
    - `/male`: A directory of __ALL MALE__ students
    - `/female`: A directory of __ALL FEMALE__ students
6. Run `node app.js` to serve your handlebars files on `localhost:3000`
7. Make sure your above routes work as intended!

---

## Section 4. HTML Forms

### Section 4a. Input Fields & Names

### [Watch Me: Input Fields & Names](https://youtu.be/iOZEf8rr7vM)

1. Open `/05_express/1_express_intro/4_forms_examples/`: For this example you will write code in the following files:
    - `example1.js`
    - `views/example1.hbs`
1. Create a `GET /` route that renders a page with a header and a form.
    - `h1`: A heading tag whose text is based on the input box (in the form).
    - `form`: A form with an `input` box and a submit button
    - If the header hasn't been set yet, the header should by default say 'Default Header'.
1. Test your route by running `npm install` then `node example1.js` in the terminal. The following steps should work:
    1. Open your favourite web browser and navigate to `localhost:3000`
    1. You should see a heading titled __Default Header__ and a input box with a submit button (like below)

        <details><summary>
        Screenshot
        </summary><p>

        ![form_1_1]

        </p></details>

    1. Type __Change The Header__ into the input box and press submit
    1. The heading should change to __Change The Header__ like below

        <details><summary>
        Screenshot
        </summary><p>

        ![form_1_2]

        </p></details>

[form_1_1]: img/form_1_1.png
[form_1_2]: img/form_1_2.png

### Section 4b. Form Action Attribute

### [Watch Me: Form Action Attribute](https://youtu.be/99zshXbq1FM)

In this example you are to make a registration form.

1. Open `/05_express/1_express_intro/4_forms_examples/`: For this example you will write code in the following files
        - `example2.js`
        - `views/example2.hbs`
2. In `views/example2.hbs`, create a register form with the following inputs:
    - username (text input box)
    - password (password input box, with `type="password"`)
    - name (text input box)
    - pronouns: he/his, she/her, they/their ([radio buttons](https://www.w3schools.com/tags/att_input_type_radio.asp))
    - __BONUS__ state ([dropdown](https://www.freeformatter.com/usa-state-list-html-select.html))
3. __BONUS__ Add logic in `example2.js` to make sure the data in your form will __NOT__ be cleared when you press _Register_ (hint: use the `value` attribute).
4. `npm install && node example2.js` to test your app.
5. Fill in the form (it should look something like the one below once filled) and click register.

    <details><summary>
    Screenshot
    </summary><p>

    ![form_2_1]

    </p></details>

[form_2_1]: img/form_2_1.png

### Section 4c. Form Method Attribute

### [Watch Me: Form Method Attribute](https://youtu.be/MCFkzx3Irmw)

Now for this example we're going to implement login functionality for our users. You are to create a __Login Form__ which contains an `email` and `password` field. The list of accounts (along with their passwords) are stored as `JSON` in accounts.js.

1. Open `/05_express/1_express_intro/4_forms_examples/`: For this example you will write code in the following files
    - `example3.js`
    - `views/example3.hbs`
1. Create a login form (in `views/example3.hbs`) with the following inputs:
    - email (text input field)
    - password (password input field)
1. Add functionality for your form to `POST` to `/login` on submit
1. In `example3.js` create a `POST` route at `/login` which uses `req.body` to check if the entered email/password fields are in `accounts.json`
    - Given __correct__ credentials render a `h1` tag that says `"Hi [insert-first-name-here]!"` (example below). __NOTE__ that first name can be found in `accounts.json`
    - Given __incorrect__ credentials render a _RED_ error message on your page.

    <details><summary>
    Screenshot
    </summary><p>

    ![form_3_1]

    </p></details>
1. Fill in the form with random credentials and make sure the error message pops up
1. Fill in the form with someone's credentials from `accounts.js` and press Login. You should see the correct heading for that person pop up!

[form_3_1]: img/form_3_1.png

Woohoo! You've completed Express & Handlebars exercises! :)

[postman]: https://www.getpostman.com/