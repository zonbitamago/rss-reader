import dotenv from "dotenv";
import Twitter from "twitter";

dotenv.config();

export default class twitterUtil {
  client = new Twitter({
    consumer_key: dotenv.config().TWITTER_CONSUMER_KEY,
    consumer_secret: dotenv.config().TWITTER_CONSUMER_SECRET,
    access_token_key: dotenv.config().TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: dotenv.config().TWITTER_ACCESS_TOKEN_SECRET
  });

  constructor() {
    console.log(dotenv.config().TWITTER_CONSUMER_KEY);
  }

  get(url) {
    var path = getPath(url);

    var owner_screen_name = path.split("/")[0];
    var slug = path.split("/")[2];
    var params = { owner_screen_name: owner_screen_name, slug: slug };

    return this.client
      .get("lists/statuses.json", params)
      .then(tweet => {
        return tweet;
      })
      .catch(error => {
        console.error("error", error);

        throw error;
      });
  }
}

export function getHost(url) {
  return url
    .split("#")[0]
    .split("?")[0]
    .split("/")[2];
}

export function getPath(url) {
  var host = getHost(url);
  return url
    .split("#")[0]
    .split("?")[0]
    .replace(host, "")
    .replace(/^https*:[\/]{3}/, "");
}
