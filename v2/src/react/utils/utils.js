"use strict";
import moment from "moment";
import axios from "axios";
import Feedparser from "feedparser";
import stringToStream from "string-to-stream";

export function getRssList() {
  return localStorage.getItem("rssList") == null
    ? undefined
    : JSON.parse(localStorage.getItem("rssList"));
}

export function transformDate(timeInMS) {
  var momentDate = moment(timeInMS);
  var momentNow = moment(new Date());
  if (momentNow.diff(momentDate, "days") > 0) {
    return momentDate.format("LL");
  }
  return momentDate.startOf("minute").fromNow();
}

export function feedParse(url) {
  var feedparser = new Feedparser();
  return axios({ method: "get", url: url })
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
    });
}
