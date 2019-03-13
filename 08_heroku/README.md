# Heroku

Today we will learn how to use Heroku to deploy our applications to the internet.

## What is Heroku

Heroku is a "Platform as a Service" (PaaS) cloud host that offers free basic
accounts. Heroku makes it fast and easy to host your backend apps in the cloud
so that anyone, anywhere can access your apps--from e.g. a web browser or a
mobile app. This process is called "deployment." Heroku also integrates with
git, so the learning curve is not too steep.

## Tasks

1. Please visit the [Heroku-Demo](https://github.com/GTBitsOfGood/heroku-demo) repo and complete the tutorial outlined there.
2. Deploy your Mini Project 1 to Heroku.
	- First, copy all the stuff from your `07_mini_project_1` into a separate directory (outside of your `bootcamp` directory) and create a new git repo in that directory using `git init`. You probably do *not* want to try to connect Heroku from inside your bootcamp directory because Heroku is not going to understand that you only want to deploy the stuff from `07_mini_project_1`
	- In `app.js`, remove the following line:
	```javascript
	if (!fs.existsSync("./env.sh")) {
 	   throw new Error("env.sh file is missing");
	}
	```
	- In `package.json`, change `"start": "nodemon app.js"` to `"start": "node app.js"`.
	- Remember to do `heroku config:set MONGODB_URI=blahblah`