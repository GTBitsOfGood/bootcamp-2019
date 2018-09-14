# Pair Programming Exercise: Twilio Messenger

# Before beginning follow the directions here
https://codepen.io/moose-horizons/pen/aZdvWa?editors=1010

## Introduction

In this exercise, we're going to build an app that can send text messages using
Twilio's API. The app will send messages to our Twilio-enabled phone number.

You've been provided with a static HTML interface. Your task is to write
JavaScript to turn this into a dynamic application.

To get started open `week02/day4/twilio/twilio.js` in your editor and
`week02/day4/twilio/twilio.html` in your browser.

## Part 0. Get Twilio credentials

Add your Twilio credentials from the previous exercise to `twilio.js`:

```javascript
this.accountId = "YOUR ACCOUNT ID HERE";
this.authToken = "YOUR AUTH TOKEN HERE";
this.fromNumber = "YOUR TWILIO NUMBER HERE";
```

## Part 1. Implement the `initialize` method
The `this.initialize()` method is called when the app is started inside the `TwilioApp`
constructor.

1. In `this.initialize()`, add a click handler to the "Send" button (i.e., the `this.messageSendButton` element) so that it will call `this.handleMessageSend`.
1. The "Send" button has a default submit behavior when clicked, but we're going to implement our own behavior. In `this.handleMessageSend()`, prevent this default behavior for the click `event`. Don't get rid of the test message yet.
1. When you click send, you should see the test message.

<details><summary>
Hint
</summary><p>

Inside event handlers, `this` points to the current element (i.e., the click handler itself), but we don't want
that. Use `.bind()` when you call `this.handleMessageSend()` to bind it to the `TwilioApp` `this` instead.

</p></details>

#### End goal:

![](https://cl.ly/3D0w3a330B10/Screen%20Recording%202017-06-07%20at%2011.34%20PM.gif)

## Part 2. Implement the `validateMessageField` method

Write a function that validates the message input field. It should return true
if the given string passes these conditions:

1. It should not be a empty string (i.e., `""`).
1. It should not be an 'blank' string  containing only spaces
(i.e., `"           "`).

<details><summary >
Hint
</summary><p>

[`$.trim()`](https://api.jquery.com/jQuery.trim/) might be useful here.

</p></details>

## Part 3. Implement the `validatePhoneField` method

Write a function that validates the phone input field. It should return true
if the given string passes these conditions:

1. It contains only numbers

    **Good:** 123

    **Bad:** 1-2

1. It contains exactly 11 digits

    **Good:** 14155005000

    **Bad:** 4155005000

**Note:** With a Twilio trial account, you can only send messages to your own phone number.

## Part 4. Implement the `handleMessageSend` method

In Part 1, we added a click handler to the `Send` button to call `this.handleMessageSend()`, which displayed a test message. Now we're going to use it to actually send SMS messages.
Follow these steps to send an SMS via the Twilio API:

1. When `Send` is clicked, get the contents of `this.messageInputField` and `this.phoneInputField`.
1. Validate the message using `this.validateMessageField()` and the phone number using `this.validatePhoneField()`.
1. If both fields are valid, make an AJAX request to Twilio to send the message.

    Use the AJAX request from [the previous exercise](https://codepen.io/moose-horizons/pen/aZdvWa?editors=1010). Update the from/to phone numbers, the account id, the token, and the message body.

    1. If the AJAX request succeeds, use `this.displayMessage()` to display the sent message to the user. Make sure to also clear the contents of `messageInputField`.
    1. If the AJAX request fails, notify the user using the browser built-in [`alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) function.

#### End goal:

![](https://cl.ly/3J230H00320X/Screen%20Recording%202017-06-07%20at%2011.11%20PM.gif)
