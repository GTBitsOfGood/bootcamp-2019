# Pair programming exercise: Directory

## Goal

The goal of this exercise is to create a simple directory application using React Router. You can find a live example of the app at this url:  

[https://scenic-bryce-canyon-41169.herokuapp.com/](https://scenic-bryce-canyon-41169.herokuapp.com/)

Play around with the app for a bit to see all the pages. There are pages on `/`, `/directory`, `/directory/SOME_FIRST_NAME`, and `/directory/SOME_FIRST_NAME/SOME_LAST_NAME`.

## Part 1: Some initial navigation

At the moment, the version of the app you have is missing nearly all the functionality in the online example. Any request should be met with `404` displayed on the screen at the moment. Let's add in the landing page and some of its immediate neighbors.

1. In `App.js` (in the `components` folder), put a Route tag between the opening and closing `Switch` tags. A `Switch` is something you can wrap a collection of Routes in such that only the first (from top to bottom) matched Route renders. The Route we're adding right now should be in the Switch at the top and should cause the `Home` component to render when we are on JUST `/`. After this, you should be able to see the `Home` screen on `/`.

1. Now open the `Home.js` component file and add a Link where the comment currently is. It should navigate to `/directory`. After this, running the app and clicking the link should take you to `/directory` which displays `"404"`.

1. Let's resolve that 404 by returning to `App` and adding another Route into the Switch. This one should render the `Directory` component whenever you are on a route _beginning with_ `/directory`. Now if you visit `/directory` you should see a header for the directory.

1. At the top of _every_ page _other_ than `/` we want to display a `Back to Home` Link that takes you to `/` when clicked. You'll need a Route tag above the Switch for this, but can you think of what `path` prop you can pass it that gets the desired behavior? Hint: Think about what `path`s you know that can match multiple urls.

    Note: When this Route is matched, we want to render a Link, which is a component. But if we did `component={Link}` then we wouldn't be able to give the Link the props we want to supply ourselves, such as the all-important `to`. There are 2 workarounds for this. The first is to write a wrapper component whose render function just renders a Link with the desired props. The second (which is secretly the same thing as the first) is to instead use `render={() => <Link to={'/wherever'} />}`.

At this point we have some of the most top level navigational elements completed. One can navigate between the Home Page and the Directory page with ease. It generally would be poor user experience if a user ever had to type into the url bar to go between pages on the same site!

## Part 2: The Directory

The rest of our functionality is all Routes and Links working within the `/directory` 'subapp' you were playing in before starting this assignment, and it all takes place in the `Directory.js` component file. Let's dig in.

1. In `Directory`, add a Route that will display a bunch of Links, one for each person, _only_ when I am on _just_ `/directory`. There is a component provided for you in this file called `LinkList`, and there is an array of static user data called `ppl`, and there is a function called `pplToFullLink` which turns a single person into an object `LinkList` can use to make a Link tag. How generous! Put all the provided stuff together with `<LinkList links={ppl.map(pplToFullLink)} />`. On `/directory` you should see a bunch of Links now.

1. Any one of those Links should take you to the `/directory/FIRSTNAME/LASTNAME` for the clicked person. But following the link right now doesn't actually display that person's info. You can fix this by making it such that a `Person` is displayed when I'm on such a url. `Person` is another component provided for you. If you look at its code you can see it's expecting `this.props.match`, from which it will read params with specific names. Be sure that `Person` gets what it is expecting! Remember that this prop is supplied by Route, not by you.

    Now we should be able to visit `/directory` for a list of people links and click any one of them to see their info on `/directory/john/doe` for example.

1. We would like there to be a "Back to Listings" link back to the user listing (`/directory`) on every page within the directory subapp other than `/directory` itself. Got any ideas? You did this earlier with the "Back to Home" link.

1. We have yet to include the `/directory/FIRSTNAME` pages into our app at all. Let's first make a link there from the `Person` page. In the `Person` component, replace the `Too bad!!!` with a Link that goes to `/directory/whatever` where `whatever` is that `Person`'s first name.

1. The last thing our app should need to do is to display a list of links much like the one on `/directory`, but containing the users whose first names match the first name after the `/directory` in the url. `LinkList` was written to be general enough to be used in both cases. When you are one of these new first name route, you can render

    ```javascript
    <LinkList
      links={ppl
        .filter(p => p.fName === /* the first name */)
        .map(pplToFullLink)}
    />
    ```

    Note: We have seen that components rendered with `component={MyComponent}` get passed special props by Route, including one useful prop called `match`. But what about components rendered with Route's `render` prop? Well the function given to `render` can actually take an argument, which will be the an object containing all the props just like `this.props` is in a class component (again, render is actually using the function syntax for writing a component). You can access `match` and other props supplied by Route either by doing `render={(props) => ... }` and using `props.match` inside, or by using object destructuring and doing `render={({ match }) => ... }` and just using `match` inside.

Is the app complete? Play around with both it and the online example to see if they match.

## Part 3: Other filters

Right now you can filter by first name by visiting `/directory/FIRSTNAME`, but there's no way to narrow someone down by other fields, like last name or area code. You may wish to add more people to the `ppl` array to test this part out.

1. Add a Route for `directory/surname/LASTNAME` and make this Route display all the users that have the specified surname. You'll have to account for the fact that this Route would normally also match `/directory/:fName/:lName`. A Switch tag should help you to only match one of the two.

1. Add a Route for `directory/areacode/3DIGITAREACODE` with similar logic.

1. Normally search filters like this use the querystring rather than the params. Update the code at this point to use a route like `/directory?fname=darwish&area=222`. Querystrings are not considered while finding a Route with matching `path`, so this Route already exists. You can find its querystring from another special prop supplied by Route `this.props.location` which has a field called `search` with what you are looking for. You can either parse alues out of it yourself with splits or install a querystring parsing library. [Here's a useful small code example](https://github.com/ReactTraining/react-router/issues/4527).

## Part 4: Swiss Army App

Switch up the Home Page to be for Swiss Army App instead of Horizons Directory. We are now going to make it such that Directory is just one of the subapps on this project.

1. Put your other React Router apps into this app as separate subapps. The Home page should be able to take you to the directory app, the chicken contest app, and the hangman app. Once you put an app on `/subapp` you will find that you need to update it's Links and Routes to reflect that fact.

Now you should have a cool app with many features that serves as a mini portfolio!

## Bonus: Have some fun

You have demonstrated that you can use Routes and Links to make most anything you want to happen come true. Now stretch out some and see what fun you can have when you have the freedom to write whatever routing you want rather than being told to do some specific thing. Here are some ideas if you want inspiration:

1. Move more apps into the Swiss Army App, even those that aren't React Router enabled such as TodoApp and TicTacToe. Use Hangman's code as an example of how to make a Redux App into a React Router app. Things to look for are `ConnectedRouter` and the `routing` reducer.

1. Contrive an excuse to try out some recursive Route nesting and make it another app in the Swiss Army App.

1. Write a Route that renders data that has to be fetched from somewhere. The pattern for this is to have the Route render a component which renders `Loading...` before it has any data. That component's `componentDidMount` would request data, which when received would go into your Redux state, causing a rerender which this time displays the data. So navigating to the page should load data, and then switching away and back should already have data right away. You can choose whether the component should fetch every mount in case there's new data or whether it should only fetch the first time when there's no data already in the Redux state.
