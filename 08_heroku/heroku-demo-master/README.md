# Heroku Tutorial

Up until this point, all the work you've done has been locally on your computer and you've used `localhost` to test your code. This is great for development, but at some point you want to put your web app on the internet for the entire world to bask in its glory. 

Introducing Heroku -- your quick stop shop for deploying web apps. (Note there are lots of alternative deployment solutions: AWS, Google Cloud, Microsoft Azure, etc... but Heroku is one of the easiest options ).

In this tutorial we will use the Heroku Free Tier which is great for development but is not suited for production. To learn about other tiers that are production ready check out [Heroku's Pricing Page](https://www.heroku.com/pricing).

After going through this tutorial you may find more useful reference material at the [Heroku Dev Center Node.JS Guide](https://devcenter.heroku.com/categories/nodejs-support)

----

## Setup

[WATCH ME: Heroku Intro](https://youtu.be/U8HoWHf2f7Y)

1. [Create a Heroku Account](https://signup.heroku.com) and verify your email
2. Download the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Deploying Your First App

[WATCH ME: Deploying with Heroku](https://youtu.be/lV8ipZpRCTI)

1. Clone this repo locally: `git clone https://github.com/GTBitsOfGood/heroku-demo`
2. Log into Heroku CLI: `heroku login`
3. Create Heroku App: `heroku create`
4. Deploy Code to Heroku w/ Git: `git push heroku master`
5. Open your deployed app: `heroku open`

## Heroku Environment Variables
To set environment variables in your Heroku Remote server you can either use the CLI tool or log into your Heroku account on the web.

- `heroku config:set MY_CUSTOM_ENV_VARIABLE=foobar`

Check out the [documentation](https://devcenter.heroku.com/articles/nodejs-support#environment-variables) if you have more questions about Heroku Enviornment Variables.

## Common Mistakes

- The app you are trying to deploy must be in a valid git repo.
- You must create a commit before the code can be deployed to Heroku.
- Your code must use `process.env.PORT` for the port on which to listen. Heroku will set the environemnt `PORT` variable for you.
- Ensure all your dependencies are listed in the `package.json`

## Debugging Heroku

- Use `heroku logs` to access the terminal output from the heroku remote server. This is similar to what you see in your terminal when you run the app locally. Errors and `console.log()` output will be viewable. For more info on how to use the Heroku Logs check out the [documentation](https://devcenter.heroku.com/articles/logging).



