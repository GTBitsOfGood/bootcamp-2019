# Horello: building your first web app

Believe it or not, by this point you've seen all of the fundamental
building blocks of the web: HTML, CSS, Javascript, the Chrome
Developer Tools, and third party libraries. You've got all of the
tools you need to begin building a real web application.

Today we're going to lay the foundations for the Horello web app. Over
the next few days, we'll add more sophisticated features such as
interactive elements, data structures and objects, reading and writing
data over the network, and authentication. Today we'll start by laying
out the look and feel of the application.

## A few important details

- You'll be working in the `skeleton/` directory. HTML goes in the
`index.html` file and CSS goes in `css/style.css`. We've provided a
basic HTML and CSS skeleton, and you'll be filling in all of the
details. For many of the places you need to add code, you'll find
comments indicating this, but _not all of these locations are marked._

- We'll be adding interactive elements such as buttons and form fields,
but we're not going to wire up those elements (i.e., make them
interactive) until tomorrow, so for now, most of these elements won't
actually do anything.

- You'll continue working with Bootstrap. This time, the required CSS
and Javascript libraries have already been included.

- Keep the [specifications][specs] in front of you since you'll need
it throughout the project.

- **DISCLAIMER: You don't have to follow the instructions explicitly AND use Google as a resource for CSS questions**

[specs]: ./SPECIFICATIONS.md

## Goal

Spend some time getting familiar with the [live version][live]. This is what
you final product should look like. Note the following:
- title bar at the top
- lists of cards
  - laid out left to right
  - one or more cards each
  - button at the bottom titled "Add a card..."
- last list (at the very right) is a button titled "Add a list..."

Let's open up `skeleton/index.html` and get started!

1. **open [`horello/skeleton/index.html`](./skeleton/index.html) in
your browser**: Your stylesheet, bootstrap, and jQuery have already been
included for you. Note that there are comments indicating where your code
for each Part should go (in both `index.html` and `style.css`).

1. **open the following files**:
    1. [`horello/skeleton/index.html`](./skeleton/index.html): contains
  	some fundamental HTML tags such as `html`, `head`, `body`, and `meta`&
  	includes Bootstrap, `skeleton/css/style.css`, and jQuery
  	1. [`horello/skeleton/css/style.css`](./skeleton/css/style.css):
  	this is where you should write your CSS classes
  	1. [`horello/SPECIFICATIONS.md`](./SPECIFICATIONS.md): an overview
  	of what styles you need to use

## Part 1: Board and Flexbox

In this part, we're going to complete the basic page styling: body,
header, and board, and we're going to add the first page element.

#### goals (part 1)
- [start][ss-01a]
- [goal][ss-01b]

**Note**: for all styles make sure to refer to the [specs] as a guide

1. **style the `<body>`**: refer to [specs]
1. **style the `<header>`**: refer to [specs]
1. **add the "Add a list..." button**: look for the PART 1 comments
in `skeleton/index.html` and try to figure out which combination of HTML
tags and CSS classes you need for this element (hint: when in doubt, use a `div`)
1. **style the `.add-list` and `.add-list:hover` classes**: refer to [specs]
1. **add [flexbox] to your board**: Turn on flexbox for the following...
    - the top-level board (so the lists are displayed next to one another)
    - the list (so the cards are displayed vertically). Make sure that `flex-direction` is set correctly!
1. **reload the page to see your changes**: You should see a blue canvas w/a header
and a button in the middle.

[live]: http://horizons-school-of-technology.github.io/week02/day2/horello/solution/index.html
[flexbox]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
[ss-01a]: ./img/ss-01a.png
[ss-01b]: ./img/ss-01b.png

Supplemental reading (optional):
- [A Complete Guide to Flexbox][flexbox]

## Part 2: Lists

For this project part, you'll be filling in the list-related
styles in the skeleton CSS file.

#### goals (part 2)
- [goal][ss-02a]

1. **add PART 2 styles**: Look for `/** PART 2 CSS here */` and fill in
the missing styles, based on the [specs]. *Note* that not every required
CSS property is listed in the specs. Do your best to figure out what's
missing and create a pixel perfect clone of the [live version][live].
1. **add the "Add card" button**: Look for `<!-- PART 2. Add card button -->`
and add the "Add card" button here. Try creating this one using the `button` tag
(rather than a plain `div` or `span`).
1. **reload to see your changes**: You should see your first fully-styled
list container!

[ss-02a]: ./img/ss-02a.png

## Part 3: Cards

In this part we're going to style the last core element, the card.

#### goals (part 3)
- [goal (single card, single list)][ss-03a]
- [goal (multiple cards, multiple lists)][ss-03b]

1. **add PART 3 styles**: Look for `/** PART 3 CSS here */` and fill in
the missing styles, based on the [specs].
1. **reload to see your changes**: You should see your first card, properly
styled, sitting on top of your first list.
1. **add an icon**: This will indicate that the card contains more
text--check out how this looks on the [live version][live]. For
the cards that contain a description, we need a visual indication since
the description isn't visible before tapping on the card to open it up.
    1. look up Bootstrap [glyphicons]
    1. find the `glyphicon-align-left` icon and add it at the bottom left
    corner of the card (*use the `.card-more` class to style the element*)
    1. you'll have to figure out where to put the HTML for the icon on your own
1. **reload to see your changes**: You should see that your first card and
list are fully styled.

Up to this point--and for the rest of today--the elements you've
added aren't tied to any real data (that will
change tomorrow when things will really come to life). But we can add
more hardcoded elements to get a better sense for what our app will look
like once we've entered more data. Using the list and card elements that
you've already created, try adding multiple lists and multiple cards
with varying amounts of data, like you see in the live version.

- Icon resources (optional):
  - [Glyphicons][glyphicons-orig]
  - [fontawesome]
  - Google's [material] icon set
  - [the noun project]
  - [feather]

[glyphicons]: https://getbootstrap.com/components/#glyphicons
[fontawesome]: http://fontawesome.io/
[material]: http://materializecss.com/icons.html
[glyphicons-orig]: http://glyphicons.com/
[the noun project]: https://thenounproject.com/
[feather]: https://feathericons.com/
[ss-03a]: ./img/ss-03a.png
[ss-03b]: ./img/ss-03b.png

## Part 4: Collapse

Let's go ahead and add our first dynamic, interactive element to this
baby so that it really starts to feel like an app. For now, we're just going
to style these forms and add the "collapse" action that shows and hides the form.

#### goals (part 4)
- [goal (collapsed)][ss-04a]
- [goal (expanded)][ss-04b]

1. **take a moment and check out the [live version][live]**: When you tap the
button, a form slides out that lets you enter the title of the new list or card.
1. **read about [Collapse] (a Bootstrap plugin)**: Bootstrap ships with a
number of custom jQuery plugins: small, useful pieces of Javascript that
allow us to quickly add interactive elements to our app.
    - take a moment to read the description and the sample code
    - play with the examples
    - in the [Usage] section, you'll see that the plugin can be used
    either via Javascript or using simple "data attributes" (we will stick
    with the data attributes approach)

1. **recreate these two buttons & forms: "Add list" and "Add Card"**: You're
on your own creating the HTML and styles to add these forms, but here are a few tips:
    - Put the form inside a Bootstrap [Well] component to set it off from
    the rest of the list.
    - Use Bootstrap's [Forms] CSS for the text input.
    - Use Bootstrap's button classes and glyphicons for the buttons. See
    [Glyphicon Examples].
    - Tie the button that triggers the collapse to the hidden content
    using the `data-target` or `href` attributes on the button and the `id`
    attribute on the target.
1. **refresh to view your changes**: reload and tap the buttons to see the
expand/collapse in action!

[Collapse]: https://getbootstrap.com/javascript/#collapse
[Usage]: https://getbootstrap.com/javascript/#collapse-usage
[Well]: https://getbootstrap.com/components/#wells
[Forms]: https://getbootstrap.com/css/#forms
[Glyphicon Examples]: https://getbootstrap.com/components/#glyphicons-examples
[ss-04a]: ./img/ss-04a.png
[ss-04b]: ./img/ss-04b.png

## Part 5: Modal

We will use Bootstrap's [Modals] component to create a modal. Since the
static elements we create aren't tied to any read data model, the
data on the modal may not match the card you tap on (you goal is to merely
make the modal appear).

By the end of this part, when you tap a card a perfectly styled
modal should appear.

#### goals (part 5)
- [goal][ss-05a]

#### what is a modal?

A **modal** is a way to temporarily present information,
or an interactive form, on top of existing content without navigating
away from that content (this is part of a larger topic called routing
that you'll explore more in the coming weeks). From an information
architecture standpoint, the content in the modal is _subordinate to_
the main content. (Read more about the concept at [Modal window].)

1. **add a modal to the app**: Use Bootstrap's [sample modal code]. You
can use stick with the default modal styles for now, no need to do
custom styling. Your modal should contain:
    - a text input for the card header
    - another text input for the card description
1. **refresh to view your changes**: Tap on a card and you should be able to
see a working modal!

## c'est fini!

Go for a run, watch some Game of Thrones, do whatever it
takes to unwind, then get some sleep because, trust me, you're going to
need it when you see what comes tomorrow.

Supplemental reading (optional):
- [Modal window]

[Modal window]: https://en.wikipedia.org/wiki/Modal_window
[Modals]: https://getbootstrap.com/javascript/#modals
[sample modal code]: https://getbootstrap.com/javascript/#modals-examples
[ss-05a]: ./img/ss-05a.png