import Twitter from "twitter";
import dotenv from "dotenv";

dotenv.config();

export default class twitterUtil {
  client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  get(url) {
    var host = url
      .split("#")[0]
      .split("?")[0]
      .split("/")[2];
    var path = url
      .split("#")[0]
      .split("?")[0]
      .replace(host, "")
      .replace(/^https*:[\/]{3}/, "");

    var owner_screen_name = path.split("/")[0];
    var slug = path.split("/")[2];
    var params = { owner_screen_name: owner_screen_name, slug: slug };

    return this.client
      .get("lists/statuses.json", params)
      .then(tweet => {
        // console.log(tweet[0]);

        return tweet;
      })
      .catch(error => {
        throw error;
      });
  }
}
