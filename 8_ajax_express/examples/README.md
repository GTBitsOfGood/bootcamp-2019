# Week 3 Day 4 Morning Videos & Individual Exercises

Today we will learn how to use AJAX in applications built with Express.

**All videos have the password `horizonites`**

---

## Section 1: Validation

### [Watch Me: Form validation](https://vimeo.com/221131674)

### Complete the [forms exercise](forms/) in `week03/day4/examples/forms`.

---

## Section 2: Redirection

### [Watch Me: Redirection](https://vimeo.com/221382208)

1. Edit `week03/day4/examples/counter/app.js`
1. Create a `POST /up` route. When this route is called, increase the global
variable `count` by 1 and redirect back to `/`
1. Create a `POST /down` route. When this route is called, decrease the global
variable `count` by 1 and redirect back to `/`
1. Run your app, go to [localhost:3000](http://localhost:3000) and verify
that the up and down buttons work.

    <details><summary>
    Screenshot
    </summary><p>

    ![Redirection exercise result](https://cl.ly/1a1l2U3V3i0N/Screen%20Recording%202017-06-13%20at%2012.07%20AM.gif)

    </p></details>

---

## Section 3: Server JavaScript vs Browser JavaScript

### [Watch Me: Server JavaScript vs Browser JavaScript](https://vimeo.com/221696598)

---

## Section 4: AJAX in Express

### [Watch Me: AJAX in Express](https://vimeo.com/221702422)

1. Edit `week03/day4/examples/ajax-counter/app.js`
    1. Create a `POST /up` route. When this route is called, increase the global
    variable `count` by 1 and respond with a JSON object that indicates the new
    value:

        ```json
        { "count": 5 }
        ```
    1. Create a `POST /down` route. When this route is called, decrease the global
    variable `count` by 1 and respond with a JSON object that indicates the new
    value.
1. Edit `week03/day4/examples/ajax-counter/views/index.hbs`
    1. Add a click handler to the `Up` button and make an AJAX request to
    `/up` with the method `POST`.

        If the request is successful update the counter on the page based
        on the response you get from the server.

        <details><summary>
        Hint
        </summary><p>

        Remember to [`.preventDefault()`](https://api.jquery.com/event.preventdefault/)

        </p></details>
    1. Add a click handler to the `Down` button and make an AJAX request to
    `/down` with the method `POST`.

        If the request is successful update the counter on the page based
        on the response you get from the server.

1. When you're done your app should look like this

    <details><summary>
    Screenshot
    </summary><p>

    ![AJAX exercise result](https://cl.ly/1a1l2U3V3i0N/Screen%20Recording%202017-06-13%20at%2012.07%20AM.gif)

    </p></details>
