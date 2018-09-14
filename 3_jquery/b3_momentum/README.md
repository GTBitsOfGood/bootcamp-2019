# Momentum

At some point, you've probably used, or seen someone use **Momentum** - a popular Chrome extension that replaces your New Tab page with a beautiful view that looks something like:

<sub>*Sidenote: did you know Momentum supports [Safari](http://static.momentumdash.com/Momentum.safariextz) too? Safari is pretty neat!*</sub>

<img src="https://cdn2.hubspot.net/hub/313892/file-609829972-png/Mom1.png?t=1464717344331" width="500">

Using your skills in AJAX requests, HTML/CSS, JQuery and event handlers, you will be creating your own personal Momentum Dashboard!

## Part 1 - The Skeleton

Before we do any JavaScript-ing or AJAX requests, let's start with the HTML skeleton that you need to build.

The layout of Momentum is fairly straightforward - you have the time of day, front-and-center, a short salutation below, weather in the top right, and a quote at the bottom.

To style this with CSS, we'll be focusing on the following components:

* **Centered column**: `<div>` element: *suggestion: `col-md-4 col-md-offset-4`?* (set all to static values for now):
	* **Time**: `<h1>` element
	* **Salutation**: `<h3>` element
	* **Quote**: `<p>` element
* **Weather Widget** (also set to static value) in the top right
	* **Temperature**: `<span>` element
	* ***Icon***: Depending on what you what you use (maybe [fontawesome](http://fontawesome.io/icons/) or [ionicons]())
	
## Part 1 - Wow, You're Pretty, Let's Go On A Date

In this part, we're going to be using the [Unsplash API](https://source.unsplash.com) to pimp out our dashboard background. You should have experience setting an image to be particularly huge and fill a whole screen (sometimes known as a **"hero image"**) from doing that in the Kickstarter clone. We're going to be doing that again here, but pulling the image from an API.

We're also going to learn about a technique using something called a `pseudo-tag` that can be used to improve readability and usage of your web-app. `Pseudo-tags` are a big part of web development and can be used to pull off some particularly tricky things without using extra elements ([everything here](http://a.singlediv.com) was made with a single div).

Your tasks in this part will be to:

1. Create an img tag and style it so that it fills
2. Improve readability
3. Use the Date() object and setInterval to create a text-based clock


First things first, let's get that image up there. To take advantage of the `pseudo-tag` later, I want you to structure your HTML and CSS like so:

**`momentum.html`**
```html
...
<div class="bg-wrapper">
	<img src="..." />
</div>
...
```

**`momenutm.css`**
```css
/* selector for the wrapper - use this for positioning?*/
.bg-wrapper {
	...
}

/* selector for the actual image - use this to control img dimensions*/
.bg-wrapper > img {
	...
}
```

I recommend using the `.bg-wrapper` selector to position the entire image so that it'll fill up the entire size of the screen. Use the child selector `>` to actually reach the image and style that to be full-screen however you'd like.
Remember, documentation is always helpful! Refer to the [Mozilla Developer Network](https://developer.mozilla.org/en-US/) for information about properties and techniques that might come helpful in accomplishing these tasks.

Once you've finished with that, head over to [Unsplash](https://source.unsplash.com) and familiarize yourself with their docs.

In our case, we're only going to be using their *Source* service, which is a bit different from how typical APIs work (figures, given how they're not a typical web company - they serve images, rather than text data).

The particular URL we're going to use will be: `https://source.unsplash.com/daily/`.
You don't have to set up any Javascript/do any AJAX calls - here's how you use it:

```html
...
	<img src="https://source.unsplash.com/daily/" />
...
```

You can use it like any other image, just by pasting the url into the `src` attribute of the `img` tag. Your browser will make the necessary call and load the image for you, just like it would any other image. The cool thing about this is on **Unsplash**'s end - each day, they change the image that is served to that URL so that if you opened your html file with that in it tomorrow, the image that comes from **Unsplash**'s servers would be different.

Now, you probably have to do some tweaking to get this to work with your current page structure. If you read through the docs, you'll see that you can also change the size of the image you're requesting by changing the url. Spend some time getting that full-screen image working, then move on this next part.

Now, we're going to improve the usability of your momentum by applying a translucent **mask** or **layer** of black over the full-screen image. Why, you say?

**This is why.**

<img src="http://ptgmedia.pearsoncmg.com/images/irf_guide_webdesign_evans/elementLinks/horton7_fig05.gif"/>

When you use an image as a background, it can be hard to read the text of your webpage because, while the text color stays the same, the image colors will not, so you will most likely end up experiencing contrast issues with your text. We can fix this by making the images slightly darker so that our white text can shine out against the dark-ish background, and we're going to do that using a `::before` pseudo-tag. Now, this is where things get tricky - you've never seen this `::before` non-sense before.

`::before` references a **pseudo-element**, which you can think of as a *hidden element* that lives inside the elements you write. That means when you write this:

```html
...
<div class="my-thing">
</div>
...
```

you actually have **something like this:**

```html
...
<div class="my-thing">
	::before <!-- <= this thing over here actually acts like an element! -->
</div>
```

Then, you can style this **fake element** like so:

```css
.my-thing::before {
	content: ""; /* <= it's required, this is how you set the "text" of an item.*/
}
```

The `content` property is required by all `pseudo` selectors, so even though we won't be using it, we'll need to set it to an empty string.

Okay, to actually use it, we want to set these properties:
+ **position** - absolute
+ **width** and  **height** - full-screen
+ **background** - black, 15-25%  opacity (up to you)

If you've done everything right, you should see that your image is now noticeably darker than it was before.

If you'd like, you can learn more about them [here](https://css-tricks.com/almanac/selectors/a/after-and-before/) and [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

Finally, the last thing we're gonna be doing is adding the text. We want to put the current time in this format below:

<img src="text-example.png"/>

Make the text:
+ white
+ Helvetica
+ huge (192px)

Use`Date` objects and `setInterval` to update the text. Remember how to get the current hour and minute? Use those to methods, along with string concatenation (addition -> hours + ":" + minutes) to produce the time text. Additionally, use `setInterval` to automatically update the time every 30 seconds.

Your job is to build a `CoreCtrl` object that will fetch the time and render it onto your screen. Do your work in `js/momentum.js`.

By the end of this part, you'll have an application that gets a random pretty picture every day and also tells you the time of the day. 

## Part 3 - Is It Going to Rain?

Next up, we're going to build the weather module of Momentum. We'll use the [Open Weather API](http://openweathermap.org/api) for retrieving weather information and JQuery to update our DOM with the weather information.

In this part, you will:

+ Create a weather controller object that:
	+ (1) performs AJAX calls for weather data from the API
	+ (2) updates the DOM with the current temperature data.

Do your work in `js/momentum-weather.js`, and remember to put the object in the `momentum` namespace.

First things first, you're going to need to sign up for the OpenWeatherMap API. As you can probably tell, this is something you're usually going to have to do for APIs you want to use in the future - companies will make their data and services available, so long as your sign up, authenticate, and join their community.

Navigate to the [OpenWeatherMap API Instructions Page](http://openweathermap.org/appid) to read about what you need to do in order to use OW's weather services. You'll need to get yourself an **APPID** and and `APIKEY` in order to use their weather API services. Don't worry, we'll just be sticking to the free version so no money out of your wallets.

In particular, we're going to be using the **City Name** route:

`api.openweathermap.org/data/2.5/weather?q={city name}`

and using that to make our AJAX calls.

You job will be to create a `weatherController` object that will do two things: query the **OpenWeatherMap API** for the current temperature of a given city, and insert this information into the DOM.

It should look something like this (minus the bit about the TODOs):

<img src="weather-example.png" />

<sub>But **better** - look at that terrible contrast! Good thing we used that mask.</sub>

By the end of this part of this part, you should have a dashboard with a pretty sweet full-screen background image that also tells you the time and current temperature outside.

[Bonus] Look into using `navigator.geoLocation` to automatically get our position and make the AJAX call. You'll have to use a different URL instead

## Part 4 - You know they say... "Love is friendship set on fire."

Finally, we're going to be adding a quote of the day using the [TheySaidSo API](https://theysaidso.com/api/).

In this exercise, you'll need to write a `QuoteController` object that:

+ Fetches a daily quote from the API and
+ renders it onto the screen.

You should do your work in `js/momentum-quote.js` and remember to keep your `QuoteController` in the `momentum` namespace.

**TheySaidSo** does not require you to make an account or sign up for API credentials - they have *public* APIs that you can use, much like *Unpslash*. We're going to be using their **Quote of the Day** service, located at:

`http://quotes.rest/qod.json`

If you visit this url in your browser, you can see what kind of output it's going to return. Knowing the structure of the data you get will be helpfully for parsing the output of the AJAX call you'll be making to the API.

When you have the AJAX call working, make sure to render the quote onto the screen.

Once you've finished this, you should have your own fully-functional **Momentum** dashboard that tells you the time, the weather, and shows you some random, nice image.
