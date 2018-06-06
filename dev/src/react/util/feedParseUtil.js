import axios from "axios";
import Feedparser from "feedparser";
import stringToStream from "string-to-stream";

export default function feedParse(url) {
  var feedparser = new Feedparser();
  return axios({ method: "get", url: url, timeout: 3000 })
    .then(res => {
      // res.data.pipe(feedparser);
      stringToStream(res.data).pipe(feedparser);
    })
    .then(() => {
      var promise = new Promise((resolve, reject) => {
        let items = [];
        feedparser.on("readable", function() {
          var stream = this;
          var item;
          while ((item = stream.read())) {
            items.push(item);
          }
        });

        feedparser.on("end", () => {
          resolve(items);
        });

        feedparser.on("error", err => {
          reject(err);
        });
      });

      return Promise.all([promise])
        .then(feed => {
          return feed[0];
        })
        .catch(err => {
          throw err;
        });
    })
    .catch(e => {
      throw new Error();
    });
}
