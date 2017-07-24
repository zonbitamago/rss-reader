const feed = require('rss-to-json');

module.exports = function(url) {
  feed.load(url, function(err, rss) {
    console.log(rss.items);
  });

}
