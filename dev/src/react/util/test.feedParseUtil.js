import mockAxios from "jest-mock-axios";
import feedParse from "./feedParseUtil";

describe("feedParseUtil", () => {
  let thenFn, catchFn;
  beforeEach(() => {
    thenFn = jest.fn();
    catchFn = jest.fn();
  });
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
            <? xml version = "1.0" encoding = "UTF-8" ?>
                <rdf: RDF xmlns="http://purl.org/rss/1.0/"
                    xmlns: rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    xmlns: dc="http://purl.org/dc/elements/1.1/"
                    xmlns: content="http://purl.org/rss/1.0/modules/content/"
                    xml: lang="ja">

                    <channel rdf: about="サイトのRSSのURL">
        <title>サイトのタイトル</title>
                    <link>サイトのURL</link>
                    <description>サイトの内容</description>
                    <dc: date>RSSの最終更新日時</dc: date >
                <dc: language>ja</dc: language>
                    <items>
                        <rdf: Seq>
        <rdf: li rdf:resource="記事1のURL" />
        <rdf: li rdf:resource="記事2のURL" />
        </rdf: Seq >
        </items >
    </channel >

            <item rdf: about="記事1のURL">
                <title>記事1のタイトル</title>
                <link>記事1のURL</link>
                <description><![CDATA[記事1の内容]]></description>
                <dc: creator>記事1の作者名</dc: creator >
                    <dc: date>記事1の作成日時</dc: date >
    </item >

            <item rdf: about="記事2のURL">
                <title>記事2のタイトル</title>
                <link>記事2のURL</link>
                <description><![CDATA[記事2の内容]]></description>
                <dc: creator>記事2の作者名</dc: creator >
                    <dc: date>記事2の作成日時</dc: date >
    </item >
</rdf: RDF >
`
      };

      var feed = feedParse("http://example.com/");

      feed.then(thenFn).catch(catchFn);

      mockAxios.mockResponse(responseObj);

      console.log(feed);

      //   expect(thenFn).toHaveBeenCalled();
      //   expect(catchFn).not.toHaveBeenCalled();
      expect(feed.error).toBeUndefined();
    });

    it("RSS2.0", () => {});

    it("Atom", () => {});
  });

  describe("異常系", () => {
    it("axios error", () => {});
  });
});
