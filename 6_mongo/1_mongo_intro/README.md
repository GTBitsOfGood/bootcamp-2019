# Inline exercise: Mongoose

## Goal

Write to and read from MongoDb using a Mongoose model.

## Instructions

1. Login to [mLab](https://mlab.com/home)
1. Click on your database

    ![](img/mlab1.png)

1. Copy the MongoDb URI

    ![](img/mlab2.png)

1. Open `6_mongo/1_mongo_intro` and create a file name `env.sh` and put
the following code in it

    ```bash
    export MONGODB_URI=YOUR MONGODB URI HERE
    ```

    **Note:** Do not put spaces before or after `=`!

1. Replace `<dbuser>` and `<dbpassword>` with the database username and password
you created in the previous exercise. Mine looks like this:

    ```bash
    export MONGODB_URI=mongodb://moose:pass123@ds55555.mlab.com:55555/moose-mongo
    ```

1. Load this file into your command-line environment

    ```bash
    source env.sh
    ```

    You need to do this every time you restart your terminal.

    **Note:** Windows users should use *git-bash* as their terminal
    (not PowerShell).
1. Edit `models.js` and create a model `Cat` with two properties

    1. `name: String`
    1. `furColor: String`

1. Run your script and `node models.js` and check output. Use <kbd>Control</kbd>+<kbd>C</kbd> to exit. (Don't forget `npm install` first!)

1. Edit `models.js` and add code to create 3 cats and save them to MongoDb.

    1. Name: Crookshanks Color: Black
    1. Name: Mr. Bigglesworth Color: White
    1. Name: Empurress Color: Calico

1. Run your script and `node models.js` and check output. Use <kbd>Control</kbd>+<kbd>C</kbd> to exit. (Don't forget `npm install` first!)
1. Open mLab, click on your database, click on the `cats` collection, verify that Crookshanks and friends are there.

    ![](img/mlab3.png)

1. Edit `models.js`, write a `Cats.findOne()` query that only returns Mr. Bigglesworth.

### Reading from MongoDb

You can read from MongoDb with Mongoose using `.find()`. This query will return all things named 'Jiggy':

```javascript
var Model = mongoose.model('Model', { name: String });
Model.find({name: "Jiggy"}, function(error, m) { });
```

### Writing to MongoDb

You can write to MongoDb with Mongoose using `.save()`:

```javascript
var Model = mongoose.model('Model', { name: String });
var document = new Model({ name: 'Johnson' });
document.save(function (err) { });
```
