# Bonus Exercise: Wikipedia Traffic Patterns

## Goal

The goal of this exercise is to learn how to deal with large real-world datasets.

## Introduction

Wikipedia is one of the largest sites on the internet and they publish their
hourly visitor statistics for the world to see.

In this exercise we will be analyizing real visitor data from Wikipedia for
June 6th and 7th 2016.

## The data 📀

We will be working with 2 files, each containing traffic stats for one hour.
Each file is ~100 Mb compressed, ~400 Mb uncompressed.

- [Day #1: 1 hour of Wikipedia traffic from June 6th](https://dumps.wikimedia.org/other/pagecounts-raw/2016/2016-06/pagecounts-20160606-170000.gz)
- [Day #2: 1 hour of Wikipedia traffic from June 7th](https://dumps.wikimedia.org/other/pagecounts-raw/2016/2016-06/pagecounts-20160607-170000.gz)

These files are compressed with GZip. On Mac and Linux you can unzip them
by double clicking on the file. On Windows, you can use [7-zip](http://www.7-zip.org/)
to unzip them.

Each line in each file contains 4 fields separated by a single space character:

```
[language] [page name] [number of visits] [bandwidth usage in bytes]
```

For example the following line means the page (i.e. article) on Annie Villeneuve
in the French language Wikipedia received 4 visits, which resulted in 40,831
bytes (~40 Kb)being downloaded.

```
fr Annie_Villeneuve 4 40831
```

### Data cleanup

As with most real world data, there is some data format issues we need to account for. When processing the dataset follow these rules:

1. Ignore lines where the language contains the string `.mw`. These are
  mobile subtotals that we don't care about. Example:

    ```
    en.mw en 5178493 118985328227
    ady.mw ady 1 12033
    ```

1. Ignore lines where the page name contains a `:`. These pages
  don't contain articles so we don't care about them. Example:

    ```
    en Special:Search 25189 190452063
    aa Talks:Contributions/Sirmylesnagopaleentheda 1 5812
    ```

### Sample data for testing

Our dataset is very large so you may find it convenient to test your
code the smaller subset below.

Sample data is in file [`4_node/b1_wikipedia/sample.data`](sample.data).

### Checking your answers

To check if your code is correct compare the results of your calculations to
[`4_node/b1_wikipedia/answers.md`](answers.md).

## Dealing with "big" data

We can process very large files faster by dealing with only one line at a time.
This way no matter how much data we are dealing with, we only need to keep one
line of data in our computer's memory.

The function `countLines` counts the lines in a given file one line at a time
[`readline` library](https://nodejs.org/api/readline.html):

```javascript
var fs = require('fs');
var readline = require('readline');

function countLines(fileName) {
  var input = fs.createReadStream(fileName);
  var rl = readline.createInterface({
    input: input
  });
  var count = 0;
  rl.on('line', function(line) {
    // This is called for each line in file
    count++;
  });
  rl.on('close', function() {
    // This is called when the file is done being read finished
    console.log('There are %s lines in file %s', count, fileName);
  });
}
```

### Part 1: Most popular pages

Calculate which pages received the most visits during the one hour starting June 6th
2016 1700 GMT.

### Part 2: Most popular languages

Calculate which languages received the most visits during one hour starting June
6th 2016 1700 GMT.

### Part 3: Most popular pages for the three most popular languages

For the top 3 most popular languages from Part 2, calculate which pages
written in that language received the most visits during one hour starting June
6th 2016 1700 GMT.

### (Bonus) Part 4: Wikipedia traffic trends

For some use cases it may be useful to know which topics are trending. In this part we will be calculating changes in traffic for the top 10 pages you found in Part 1. Calculate the total gain or loss in traffic compared to the same hour the next day, June 7th 2016 1700
GMT.


[File Information](https://wikitech.wikimedia.org/wiki/Analytics/Data/Pagecounts-raw)
