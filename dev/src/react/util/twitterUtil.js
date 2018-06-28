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

  get() {
    // console.log("env:", process.env.TWITTER_CONSUMER_KEY);

    var params = { owner_screen_name: "DZonbitamago", slug: "test" };
    this.client.get(
      "lists/statuses.json",
      params,
      (error, tweets, response) => {
        if (error) {
          console.log("error:", error);

          return;
        }
        console.log(tweets);
        // console.log(response); // Raw response object.
      }
    );
  }
}
