# Programming Exercise: Trello CSV Download and Uploader

## Goal

The goal of this exercise is to build a script for uploading and downloading
Trello boards as CSV files. This will give you experience with using API's
inside node and dealing with files and the file system.

We'll be using [this Trello client](https://github.com/norberteder/trello) for
communicating with Trello's API. You still have to get your corresponding auth
token and API keys, but this should make using Trello a bit easier.

In addition to Trello, we'll also be using the
[`csv`](https://www.npmjs.com/package/csv) package for manipulating the csv
data, the [`commander`](https://www.npmjs.com/package/commander) package
for parsing command line input, and the `fs` library (included with node -
part of the *standard lib*).

## Instructions

You will be building a single script `trello-csv.js` to download and upload
Trello boards as CSV files.


This script should have two modes of operation:


1. Upload given CSV file to a Trello board

  ```bash
  $ node trello-csv.js --upload [board id] [csv file]
  OR
  $ node trello-csv.js -u [board id] [csv file]
  ```

1. Download a given Trello board to a CSV file

  ```bash
  $ node trello-csv.js --download [board id] [csv file]
  OR
  $ node trello-csv.js -d [board id] [csv file]
  ```

First things first, you should install the libraries we're going to be using.
You install packages like so:

  ```bash
  $ npm install  antigravity
  ```

***hint:*** You can install more than one package at once!

### File format

csv stands for comma-separated values. Each line is a row and rows are broken up into columns using commas.

In our case we will be using the first row (i.e. line) to represent all the list names in a Trello board. Each
subsequent line represents cards in the corresponding list.

This board
![](img/trello.png)

Becomes

```
List 1 has 1 card,List 2 is empty,List 3 has 3 cards
Card 1 in list1,,Card 1 in list 3
,,Card 2 in list 3
,,Card 3 in list 3
```

As you can see, the first row of the csv file corresponds to the names of each
of the lists. The following rows show the names of each card in its respective
list, by position. Since the second list does not have any cards at all, the
second position of every row after the first will be blank (**like this:**
`column 1,,column 3`);

There's a sample csv file included with this folder, [`sample.csv`](sample.csv).
You can use the NPM package [`csv`](https://www.npmjs.com/package/csv) for
parsing csv files.

### Upload

When you upload to a Trello board your lists should be added to the left of all previous lists.

**Note**: Use `fs` and `csv`'s [`parse`](http://csv.adaltas.com/parse/) functionality to organize the data before you build the cards.

### Download

When you download a Trello board you should retain list and card ordering. You only need to keep list and card names.

**Note**: To write a csv to the filesystem, use fs and `csv`'s [stringify](http://csv.adaltas.com/stringify/) functionality.
