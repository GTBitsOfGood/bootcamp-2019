# Advanced Mongoose Self Directed Examples Part II

---

**Make sure to complete the exercises in the order they are presented.
They build off of each other.**

## Setup

1. Create an `env.sh` file in `week04/day2/examples/part2`

1. Set up your `MONGODB_URI` in `env.sh`

1. Source your env.sh file by running `source env.sh` from the terminal

1. Install dependencies with `npm install`

---

## Aside: Schema
### [Watch me](https://vimeo.com/album/4604349/video/219170165)

## Section 1: `populate()`
### [Watch me](https://vimeo.com/album/4604349/video/218892434)

1. Edit `week04/day2/examples/part2/pet.js` and change the `owner` property of the `Pet` model to
be reference (i.e. a `ref`) to the `User` model

    <details><summary>
    Hint
    </summary><p>

    Set the `type` of `owner` to be `Schema.ObjectId` and `ref` to be `user`

    </p></details>

1. Edit the `GET /pets` route in `week04/day2/examples/part2/server.js` and `populate` the `owner`
property of each

    <details><summary>
    Hint
    </summary><p>

    Switch the query to use `.exec()` and add `.populate('owner')`

    </p></details>

3. Go to `localhost:3000/pets` and verify that the owner's first name, last
name and birthday are properly displayed

    <details><summary>
    Before
    </summary><p>

    ![](https://cl.ly/1K1k2R0L2t0y/Screen%20Shot%202017-06-19%20at%2011.47.47%20PM.png)

    </p></details>

    <details><summary>
    After
    </summary><p>

    ![](https://cl.ly/2F1L43280h2a/Screen%20Shot%202017-06-19%20at%2011.51.32%20PM.png)

    </p></details>

## Aside: Ref
### [Watch me](https://vimeo.com/album/4604349/video/219170731)

## Section 2: Virtuals
### [Watch me](https://vimeo.com/album/4604349/video/218990923)

1. Edit `week04/day2/examples/part2/user.js` and add an `age` virtual property the `User` schema

    The `age` virtual property should contain the age of the current user
    in years rounded down to the nearest integer.

    <details><summary>
    Hint
    </summary><p>

    This function calculates the age of user given a birthday (date object)

    ```javascript
    function getAge(birthday) {
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    ```

    [source](https://stackoverflow.com/a/21984136)

    </p></details>

3. Go to `localhost:3000/` and verify that the `age` of each user is displayed

    <details><summary>
    Before
    </summary><p>

    ![](https://cl.ly/3N0Q3X350O3K/Image%202017-06-20%20at%2012.01.16%20AM.png)

    </p></details>

    <details><summary>
    After
    </summary><p>

    ![](https://cl.ly/3f0K0M1X2l2e/Image%202017-06-20%20at%2012.08.23%20AM.png)

    </p></details>

## Section 3: Methods
### [Watch me](https://vimeo.com/221365169)

1. Edit `week04/day2/examples/part2/user.js` and add a method called `toggleGender` to the
`User` schema

    When called `toggleGender` should set the `gender` property of the current
    user to be `male` if the current user is `female` and vice versa.

    You do **not** need to `.save()` the user after modifying it.

    You can see how this static is called in `week04/day2/examples/part2/server.js` in the
    `GET /toggle` route
2. Go to `localhost:3000/toggle` in your browser, every time you refresh
the page you should see the gender alternate between `male` and `female`

    <details><summary>
    Screenshot
    </summary><p>

    ![](https://cl.ly/3C3t0T231L46/Screen%20Recording%202017-06-20%20at%2012.32%20AM.gif)

    </p></details>


## Section 4: Statics
### [Watch me](https://vimeo.com/album/4604349/video/219184740)

1. Edit `week04/day2/examples/part2/user.js` and add a static called `findByName` to the
`User` schema

    `findByName` should take a String `name` argument and a callback
    function, and should find all users with that first name then
    call the callback function with `error, users`.

    You can see how this static is called in `week04/day2/examples/part2/server.js` in the
    `GET /users/:name` route

    <details><summary>
    Hint
    </summary><p>

    Inside `findByName` call `.find({"name.first": name})` from the
    user model.

    </p></details>

2. Go to `localhost:3000/users/darrell` in your browser, you should see

    <details><summary>
    Screenshot
    </summary><p>

    ![](https://cl.ly/0r3P0d0w1A3n/Image%202017-06-20%20at%2012.19.38%20AM.png)

    </p></details>
