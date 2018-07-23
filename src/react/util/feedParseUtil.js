import axios from "axios";
import Feedparser from "feedparser";
import stringToStream from "string-to-stream";

export default class feedParseUtil {
  feedparser = new Feedparser();

  feedParse(url) {
    return axios({ method: "get", url: url, timeout: 3000 })
      .then(res => {
        stringToStream(res.data).pipe(this.feedparser);
      })
      .then(() => {
        return this.parse();
      })
      .catch(e => {
        throw new Error();
      });
  }

  parse() {
    var promise = new Promise((resolve, reject) => {
      let items = [];
      this.feedparser.on("readable", function() {
        var stream = this;
        var item;
        while ((item = stream.read())) {
          items.push(item);
        }
      });

      this.feedparser.on("end", () => {
        resolve(items);
      });

      this.feedparser.on("error", err => {
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
  }
}
