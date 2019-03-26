import fetch from "./feedFetchUtil";

it("description", async () => {
  const urls = ["https://feedforall.com/sample-feed.xml"];
  const json = await fetch(urls);

  expect(json.results.length).toBe(1);
  expect(json.results[0].result).toBeTruthy();
});
