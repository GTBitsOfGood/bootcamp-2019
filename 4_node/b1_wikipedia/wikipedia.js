var _ = require('underscore')
var fs = require('fs');
var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin
});

var maxVisitors = {all: [], en: [], es: [], ru: []};
var maxVisitorsKeys = _.keys(maxVisitors);
var languages = {};
reader.on('line', function(line) {
  var parts = line.split(' ');
  if (parts.length === 4 && parts[0].indexOf('.mw') === -1 && parts[1].indexOf('Special:') === -1) {
    var visitors = parseInt(parts[2]);
    parts[2] = visitors;
    for (var i = 0; i < maxVisitorsKeys.length; i++ ){
      var currentKey = maxVisitorsKeys[i];
      if (currentKey === 'all' || currentKey === parts[0]) {
        var currentMaxVisitors = maxVisitors[currentKey];
        currentMaxVisitors.push(parts);
        if (currentMaxVisitors.length > 10) {
          currentMaxVisitors.sort(function(l1, l2) {
            return l2[2] - l1[2];
          });
          currentMaxVisitors.pop();
        }
      }
    }

    var lang = parts[0];
    if (!_.has(languages, lang)) {
      languages[lang] = 0;
    }
    languages[lang] += visitors;
  }
});


reader.on('close', function() {
  console.log(maxVisitors);
  console.log(_.chain(languages).pairs().sortBy(x => -x[1]).first(10).value());

  var topPagesDay1 = {};
  maxVisitors.all.forEach(function(page) {
    topPagesDay1[page.slice(0, 2).join(' ')] = [page[2]];
  });

  var day2Reader = readline.createInterface({
    input: fs.createReadStream(process.argv[2])
  });
  day2Reader.on('line', function(line) {
    line = line.split(' ');
    if (_.has(topPagesDay1, line.slice(0, 2).join(' '))) {
      topPagesDay1[line.slice(0, 2).join(' ')].push(parseInt(line[2]));
    }
  });
  day2Reader.on('close', function() {
    console.log(topPagesDay1);
  });
});
