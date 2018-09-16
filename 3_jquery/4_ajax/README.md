# [AJAX](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) Self Directed Examples

- **All videos have the password `horizonites`**
- Ask for help early and often! 🙋

### Tourbleshooting: **`XMLHttpRequest cannot load`**

If you see an error message in your console that says **`XMLHttpRequest cannot load`**, do the following:

1. Open your DevTools console, switch to the Network tab
1. Click the `Disable Cache` checkbox
1. Refresh the page

<details><summary>
Watch this screen recording to see how
</summary><p>

![How to disable cache animation](https://cl.ly/2K1u0n0i1l2p/Screen%20Recording%202017-06-08%20at%2009.45%20AM.gif)

</p></details>


### [Watch me: JSON](https://vimeo.com/209255707)

### [Watch me: Intro. to AJAX](https://vimeo.com/210894693)

1. __Poetry Slam:__ In this example you will `GET` a poem from [https://horizons-json-cors.s3.amazonaws.com/poem.txt](https://horizons-json-cors.s3.amazonaws.com/poem.txt). Then you are to calculate the number of words it contains, and add that number to the element where `id="count"`.

    - Files to work on:
	    - `/week02/day4/examples/ajax/poetry_slam/index.html`: Open this in your favourite web browser to read the instructions and test your solution.
		- `/week02/day4/examples/ajax/poetry_slam/js/index.js`: This is where you will make an AJAX request.
		
1. __Population:__ GET data from [http://horizons-json-cors.s3-website-us-east-1.amazonaws.com/data.json](http://horizons-json-cors.s3-website-us-east-1.amazonaws.com/data.json) and find the city with the highest population. Put that name in the `<h1>` tag with id `out`.

    - File to work on:
	    - `/week02/day4/examples/ajax/population.html`: Write your JS/jQuery code in the `<script>` tag at the bottom of this file. Open it in your favourite web browser to test your solution.

### [Watch me: AJAX Error Handling](https://vimeo.com/210897988)

1. __List of Links:__ You will be given a list of links where some of them are broken. Your job is to perform `GET` requests to all of them, and remove the ones that do not work.

    - File to work on:
	    - `/week02/day4/examples/errors.html`: Open this in your favourite web browser & text editor. Write your code in the `<script>` tags at the bottom of the `HTML` file.

### [Watch me: AJAX is Asynchronous](https://vimeo.com/210971431)

1. __AJAX Async:__ Your job is to GET data from [https://horizons-json-cors.s3.amazonaws.com/products.json](https://horizons-json-cors.s3.amazonaws.com/products.json) which will be an array of urls. You are to subsequently make AJAX requests to those links and retrieve product information. Lastly, the sorted list of products must be put in the `div` with `id="products"`.

    - File to work on:
	    - `/week02/day4/examples/async.html`: Open this in your favourite web browser & text editor. Write your code in the `<script>` tag at the bottom of the `HTML` file.

### [Watch me: AJAX APIs and Trello](https://vimeo.com/212287922)

Get started on today's Pair Programming Exercises: [Pair Programming Exercises]

[Pair Programming Exercises]: https://github.com/horizons-school-of-technology/week02/tree/master/day4#pair-programming-exercises
