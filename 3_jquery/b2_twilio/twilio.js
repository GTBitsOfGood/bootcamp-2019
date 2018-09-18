"use strict";

window.twilio = {};

// Preface. In this exercise, you're going to be building a Twilio Shoutout Application that communicates with Twilio's API (Application Programming Inerface) over AJAX. You can think of a Web API as an application black-box that you can leverage and interact with using HTTP. If you wanted to get weather data for your city, you could query some weather API and access the data that application generates.
// In this case, we're going to be using Twilio's device SMS messaging service. We're going to build an application that lets you `shoutout` (one-way message) a Twilio-enabled phone number programmatically. You'll be able to send yourself a text message from your browser (and much more)!
// You've been provided with a UI skeleton that you can dig into if you'd like, but the major focus of this exercise are the AJAX calls, validation, and of course OOP.

// Exercise 0. Get Twilio credentials
// Please navigate to https://www.twilio.com, and get a free API Key.
// You're going to be signing up for the service yourself, and it won't be asking you to pay for anything. Enter your name, phone number, and whatever else they ask you for (within reason - if they're asking for an ssn, call one of us over)
// You'll need 3 pieces of information to be able to interact with the Twilio API - your `accountId (or SID)`, an `auth token` and your Twilio phone number.
// Follow the steps listed by Twilio to get familiar with their API console and retrieve your first Twilio phone number!
// When you have all this information, please replace them in the variables down there.

twilio.accountId = "ACb17a6fa7a1323f8d2818ffc7af2e3543";
twilio.authToken = "77b9c7bf69723e131f16bbd471b840b6";
twilio.fromNumber = "12014904984";

// Exercise 1. Implement the `initialize` method
// When the TwilioShoutout class is constructed, it calls its initialize() method. That method should set up event listener(s) that will allow you to capture and send data from your web UI. More information is provided at the method.

// Exercise 2. Implement the `clear` method
// There are going to be two input fields in the application you're building, and it would be nice to have some function to clear their values.

// Exercise 3. Implement the `validateMessageField` method
// TwilioShoutout has a `validateMessageField` method that needs to be implemented. The function takes a string and returns true or false based on whether the string is a valid message or not. More information is provided at the method.

// Exercise 4. Implement the `validatePhoneField` method
// TwilioShoutout has a `validatePhoneField` method that needs to be implemented. The function takes a string and returns true or false based on whether the string is a valid phone number or not. Validating phone numbers can be extremely hard, so we're going to be using the simple no-parentheses, non-hyphenated phone number format, including international code. I.E. +1 (201) - 705 - 1234 becomes 12017051234. More information is provided at the method.

// Exercise 5. Implement the `handleMessageSend` method
// The `handleMessageSend` method is going to act as the callback for the event listener you set up in the initialize() method. It's supposed to make sure all the necessary fields are valid, and if so, make an ajax call to a Twilio API url with our data. Otherwise, it should raise an alert, telling the user (you) that one or both of the input fields are invalid. This is a multipart exercise that requires a few key steps, and we've provided you with a bit of what you need to get you going.

twilio.TwilioShoutout = function(accountId, authToken, fromNumber) {
  // Assign properties
  this.apiUrl = "https://api.twilio.com/2010-04-01";
  this.accountId = accountId;
  this.authToken = authToken;
  this.fromNumber = fromNumber;

  // Reference JQuery objects
  this.messageList = $(".message-list");
  this.messageInputField = $(".message-input-field");
  this.phoneInputField = $(".phone-input-field");
  this.messageSendButton = $(".message-input-button");

  // Set up the event handlers
  this.initialize();

  // Notify user
  console.log("TwilioMessenger is ready.");
};

twilio.TwilioShoutout.prototype = {
  // Exercise 1. `initialize()` method
  // Implement the initialize method. The initialize method is called when the TwilioApp class is instantiated.
  // It should set up a click handler for `messageSendButton`, and fire `this.handleMessageSend` .
  //
  // hint. remember about context and maybe .bind()? you should, you'll run into some problems if you don't use the right context.
  initialize: function() {
    // YOUR CODE HERE
    // set up event listeners to DOM
    this.messageSendButton.on("click", this.handleMessageSend.bind(this));
  },
  // Exercise 2. `clearField(jqField<JQuery Element>)` method
  // Write a function that takes a JQuery input field                                                                                                                                                                                                                                                      m./and clears the text inside it. It should not return anything.
  //
  // hint. use $.trim(), see https://api.jquery.com/jQuery.trim/
  // hint. what does it mean to `clear` a field? Set it to an empty string.
  // hint. user .val() to get (and set) the value of an input object!
  clearField: function(jqField) {
    // YOUR CODE HERE
    jqField.val("");
  },
  // Exercise 3. `validateMessageField(textStr<String>)` method
  // Write a function that validates the message input field. It should return true if the `validateMessageField` passes these conditions:
  // (1) The field should not be a blank string ("")
  // (2) The field should not be an 'empty' string ("           ")
  //
  // hint. $.trim() is useful
  validateMessageField: function(textStr) {
    // YOUR CODE HERE
    return $.trim(textStr).length !== 0;
  },
  // Exercise 4. `validatePhoneField(phoneStr<String>)` method
  // Write a function that validates the message input field. It should return true if the `validatePhoneField` passes these conditions:
  // (1) The field should not have any non-numeric characters ('201-123-4321' is bad)
  // (2) The field should not be a blank string ("")
  // (3) The field should not be an 'empty' string ("           ")
  //
  // hint. use $.trim(), see https://api.jquery.com/jQuery.trim/
  // hint. remember to take care of both upper and lower case letters!
  // hint. .charAt might be useful, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
  validatePhoneField: function(phoneStr) {
    // YOUR CODE HERE
    var modStr = $.trim(phoneStr);
    var whiteList = "1234567890";
    for (var i = 0; i <= modStr.length - 1; i++) {
      if (whiteList.indexOf(modStr[i]) === -1) return false;
    }

    return modStr.length !== 0;
  },
  // Exercise 5. `handleMessageSend(evt<Event>)` method
  // Write a method that will check the validity of the phone and message fields, and if they're both valid, calls the Twilio API with our data so that it can send a text to your phone. If not, it should throw an error "Invalid fields";
  //
  // note. here's where `validatePhoneField` and `validateMessageField` come in handy!
  // note. also `clear`
  // note. also `sendMessage`
  handleMessageSend: function(evt) {
    evt.preventDefault();

    // only send if both fields are valid
    var toPhone = this.phoneInputField.val();
    var thisMessage = this.messageInputField.val();
    if (
      this.validatePhoneField(toPhone) &&
      this.validateMessageField(thisMessage)
    ) {
      // send the message
      this.sendMessage(toPhone, thisMessage);
      // clear the message field
      this.clearField(this.messageInputField);
    } else {
      throw "Invalid fields";
    }
  },
  // Exercise 6. `sendMessage(toNumber<String>, messageBody<String>)` method
  // Write a function that POSTS to the Twilio Messages REST Api with a destination number `toNumber` and message `messageBody`.
  //
  // hint. see https://api.jquery.com/jquery.post/
  // hint. see https://www.twilio.com/docs/api/rest
  sendMessage: function(toNumber, messageBody) {
    // It might be easier to access these variables like this
    var acctId = this.accountId;
    var authTok = this.authToken;
    var messageList = this.messageList;

    // Exercise 6.A `callback`
    // This callback should create a new Message object and generate a JQuery object using its render() method. It should append the gnerated JQuery object to the DOM messageList.
    var cb = function(data) {
      // YOUR CODE HERE
      messageList.append(new Message(toNumber, messageBody).render());
    };

    // `Call` the Twilio API service with our data
    $.ajax({
      method: "POST",
      // Exercise 6.B `url`
      // Write the url of the POST request you're going to be sending!
      // Please examine the API docs for sending messages with Twilio (https://www.twilio.com/docs/api/rest/sending-messages)
      //
      // hint. use string concatenation (addition)!
      // hint. the 'base' url is provided for you in this.apiUrl
      // hint. your account id is also accessible via this.accountId
      url: this.apiUrl + "/Accounts/" + this.accountId + "/Messages",
      // Exercise 6.C `data`
      // Use the variables you have and actually send it to Twilio's services.
      //
      // note. see the Twilio docs (https://www.twilio.com/docs/api/rest/sending-messages) for more details about these fields you're sending.
      data: {
        To: "+" + toNumber,
        From: "+" + this.fromNumber,
        Body: messageBody
      },
      success: cb,
      headers: {
        Authorization: "Basic " + btoa(acctId + ":" + authTok)
      },
      error: function(xhr, textStatus, error) {
        console.log(xhr);
        console.log(xhr.responseText);
      }
    });
  }
};

// [Helper] `Message(sender<String>, body<String>)`
// This is a helper class that appends your sent message to the DOM.
var Message = function(sender, body) {
  this.sender = sender;
  this.body = body;
};

// [Helper] `render`
// This part actually does the work.
// It returns a jQuery object that encloses span and p tags that encapsulat the sender and body properties, respectively.
Message.prototype = {
  render: function() {
    var listElem = $("<li></li>").addClass("message");
    var sender = $("<span></span>")
      .addClass("sender")
      .text(this.sender);
    var body = $("<p></p>").text(this.body);
    listElem.append(sender);
    listElem.append(body);

    return listElem;
  }
};

// Nice, you got to the end. Right now, the test is instantiating the app and allowing you to run it, but if you wanted to use it yourself (removing the tests) you can use it by
// var app = new twilio.TwilioShoutout(twilio.accountId, twilio.authToken, twilio.fromNumber)
// Just instantiating the app will set up the event handlers and make the give UI interactive (as you should know, you built it haha)
