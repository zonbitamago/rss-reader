import mockAxios from "jest-mock-axios";
import feedParse from "./feedParseUtil";

describe("feedParseUtil", () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  describe("正常系", () => {
    it("RSS1.0", () => {
      var responseObj = {
        status: 200,
        statusText: "OK",
        data: `
           <?xml version='1.0' encoding='UTF-8'?>
<rss version='2.0'>
    <channel>
        <title>PHP & JavaScript：更新情報</title>
        <link>http://phpjavascriptroom.com/</link>
        <description>PHP & JavaScript Room：新着3件</description>
        <item>
            <title>記事タイトル3</title>
            <link>http://phpjavascriptroom.com/post3.html</link>
            <description>記事の内容です。</description>
            <pubDate>Wed, 11 Jun 2008 15:30:59 +0900</pubDate>
        </item>
        <item>
            <title>記事タイトル2</title>
            <link>http://phpjavascriptroom.com/post2.html</link>
            <description>記事の内容です。</description>
            <pubDate>Tue, 10 Jun 2008 15:30:59 +0900</pubDate>
        </item>
        <item>
            <title>記事タイトル1</title>
            <link>http://phpjavascriptroom.com/post1.html</link>
            <description>記事の内容です。</description>
            <pubDate>Mon, 9 Jun 2008 20:50:30 +0900</pubDate>
        </item>
    </channel>
</rss>
`
      };

      var feed = feedParse("http://example.com/");

      mockAxios.mockResponse(responseObj);

      console.log(feed);
    });

    it("RSS2.0", () => {});

    it("Atom", () => {});
  });

  describe("異常系", () => {
    it("axios error", () => {});
  });
});
