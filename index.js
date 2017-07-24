var feed = require('rss-to-json');

feed.load('https://www.lifehacker.jp/feed/index.xml', function(err, rss) {
  console.log(rss.items);
})
