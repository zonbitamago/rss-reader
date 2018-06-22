export const RSS1 = `
    <?xml version="1.0" encoding="utf-8" ?>
<rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://purl.org/rss/1.0/">
<channel rdf:about="http://syncer.jp/about"><title>Syncer</title>
<link>http://syncer.jp/</link>
<description><![CDATA[知識と感動を同期(Sync)するブログ]]></description>
<items>
<rdf:Seq>
<rdf:li resource="http://syncer.jp/how-to-make-feed-by-php"/>
</rdf:Seq>
</items>
</channel>
<item rdf:about="http://syncer.jp/how-to-make-feed-by-php">
<title>PHPでRSS、AtomのFeedを作成する方法</title>
<link>http://syncer.jp/how-to-make-feed-by-php</link>
<dc:date>2014-11-23</dc:date>
<description><![CDATA[PHPを使って、RSS、Atomのフィード・ファイルを作成する方法を解説します。]]></description>
<dc:subject>ここの値を指定</dc:subject>
</item>
<item rdf:about="http://syncer.jp/how-to-make-feed-by-php">
<title>PHPでRSS、AtomのFeedを作成する方法</title>
<link>http://syncer.jp/how-to-make-feed-by-php</link>
<dc:date>2014-11-23</dc:date>
<description><![CDATA[PHPを使って、RSS、Atomのフィード・ファイルを作成する方法を解説します。]]></description>
<dc:subject>ここの値を指定</dc:subject>
</item>
</rdf:RDF>
    `;

export const RSS2 = `
            <?xml version="1.0"?>
<rss version="2.0">
   <channel>
      <title>Liftoff News</title>
      <link>http://liftoff.msfc.nasa.gov/</link>
      <description>Liftoff to Space Exploration.</description>
      <language>en-us</language>
      <pubDate>Tue, 10 Jun 2003 04:00:00 GMT</pubDate>
      <lastBuildDate>Tue, 10 Jun 2003 09:41:01 GMT</lastBuildDate>
      <docs>http://blogs.law.harvard.edu/tech/rss</docs>
      <generator>Weblog Editor 2.0</generator>
      <managingEditor>editor@example.com</managingEditor>
      <webMaster>webmaster@example.com</webMaster>
      <item>
         <title>Star City</title>
         <author>writer@example.com (Writer)</author>
         <link>http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp</link>
         <description>How do Americans get ready to work with Russians aboard the International Space Station? They take a crash course in culture, language and protocol at Russia's &lt;a href="http://howe.iki.rssi.ru/GCTC/gctc_e.htm"&gt;Star City&lt;/a&gt;.</description>
         <pubDate>Tue, 03 Jun 2003 09:39:21 GMT</pubDate>
         <guid>http://liftoff.msfc.nasa.gov/2003/06/03.html#item573</guid>
      </item>
      <item>
         <description>Sky watchers in Europe, Asia, and parts of Alaska and Canada will experience a &lt;a href="http://science.nasa.gov/headlines/y2003/30may_solareclipse.htm"&gt;partial eclipse of the Sun&lt;/a&gt; on Saturday, May 31st.</description>
         <pubDate>Fri, 30 May 2003 11:06:42 GMT</pubDate>
         <guid>http://liftoff.msfc.nasa.gov/2003/05/30.html#item572</guid>
      </item>
      <item>
         <title>The Engine That Does More</title>
         <link>http://liftoff.msfc.nasa.gov/news/2003/news-VASIMR.asp</link>
         <description>Before man travels to Mars, NASA hopes to design new engines that will let us fly through the Solar System more quickly.  The proposed VASIMR engine would do that.</description>
         <pubDate>Tue, 27 May 2003 08:37:32 GMT</pubDate>
         <guid>http://liftoff.msfc.nasa.gov/2003/05/27.html#item571</guid>
      </item>
      <item>
         <title>Astronauts' Dirty Laundry</title>
         <link>http://liftoff.msfc.nasa.gov/news/2003/news-laundry.asp</link>
         <description>Compared to earlier spacecraft, the International Space Station has many luxuries, but laundry facilities are not one of them.  Instead, astronauts have other options.</description>
         <pubDate>Tue, 20 May 2003 08:56:02 GMT</pubDate>
         <guid>http://liftoff.msfc.nasa.gov/2003/05/20.html#item570</guid>
      </item>
   </channel>
</rss>
`;

export const ATOM = `
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
        <title>Example Feed</title>
        <subtitle>Insert witty or insightful remark here</subtitle>
        <link href="http://example.org/"/>
        <updated>2003-12-13T18:30:02Z</updated>
        <author>
                <name>John Doe</name>
                <email>johndoe@example.com</email>
        </author>
        <id>urn:uuid:60a76c80-d399-11d9-b93C-0003939e0af6</id>
        <entry>
                <title>Atom-Powered Robots Run Amok</title>
                <link href="http://example.org/2003/12/13/atom03"/>
                <id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>
                <updated>2003-12-13T18:30:02Z</updated>
                <summary>Some text.</summary>
        </entry>
        <entry>
                <title>Atom-Powered Robots Run Amok</title>
                <link href="http://example.org/2003/12/13/atom03"/>
                <id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>
                <updated>2003-12-13T18:30:02Z</updated>
                <summary>Some text.</summary>
        </entry>
</feed>
`;

export const RSS_FEED = [
  {
    author: "Writer",
    categories: [],
    comments: null,
    date: "2003-06-03T09:39:21.000Z",
    description:
      'How do Americans get ready to work with Russians aboard the International Space Station? They take a crash course in culture, language and protocol at Russia\'s <a href=\\"http://howe.iki.rssi.ru/GCTC/gctc_e.htm\\">Star City</a>.',
    enclosures: [],
    guid: "http://liftoff.msfc.nasa.gov/2003/06/03.html#item573",
    image: {},
    link: "http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp",
    meta: {
      "#ns": [],
      "#type": "rss",
      "#version": "2.0",
      "#xml": {
        version: "1.0"
      },
      "@": [],
      author: "editor@example.com",
      categories: [],
      cloud: {},
      copyright: null,
      date: "2003-06-10T09:41:01.000Z",
      description: "Liftoff to Space Exploration.",
      favicon: null,
      generator: "Weblog Editor 2.0",
      image: {},
      language: "en-us",
      link: "http://liftoff.msfc.nasa.gov/",
      pubDate: "2003-06-10T04:00:00.000Z",
      pubdate: "2003-06-10T04:00:00.000Z",
      "rss:@": {},
      "rss:description": {
        "#": "Liftoff to Space Exploration.",
        "@": {}
      },
      "rss:docs": {
        "#": "http://blogs.law.harvard.edu/tech/rss",
        "@": {}
      },
      "rss:generator": {
        "#": "Weblog Editor 2.0",
        "@": {}
      },
      "rss:language": {
        "#": "en-us",
        "@": {}
      },
      "rss:lastbuilddate": {
        "#": "Tue, 10 Jun 2003 09:41:01 GMT",
        "@": {}
      },
      "rss:link": {
        "#": "http://liftoff.msfc.nasa.gov/",
        "@": {}
      },
      "rss:managingeditor": {
        "#": "editor@example.com",
        "@": {},
        email: "editor@example.com",
        name: ""
      },
      "rss:pubdate": {
        "#": "Tue, 10 Jun 2003 04:00:00 GMT",
        "@": {}
      },
      "rss:title": {
        "#": "Liftoff News",
        "@": {}
      },
      "rss:webmaster": {
        "#": "webmaster@example.com",
        "@": {},
        email: "webmaster@example.com",
        name: ""
      },
      title: "Liftoff News",
      xmlUrl: null,
      xmlurl: null
    },
    origlink: null,
    permalink: "http://liftoff.msfc.nasa.gov/2003/06/03.html#item573",
    pubDate: "2003-06-03T09:39:21.000Z",
    pubdate: "2003-06-03T09:39:21.000Z",
    "rss:@": {},
    "rss:author": {
      "#": "writer@example.com (Writer)",
      "@": {},
      email: "writer@example.com",
      name: "Writer"
    },
    "rss:description": {
      "#":
        'How do Americans get ready to work with Russians aboard the International Space Station? They take a crash course in culture, language and protocol at Russia\'s <a href=\\"http://howe.iki.rssi.ru/GCTC/gctc_e.htm\\">Star City</a>.',
      "@": {}
    },
    "rss:guid": {
      "#": "http://liftoff.msfc.nasa.gov/2003/06/03.html#item573",
      "@": {}
    },
    "rss:link": {
      "#": "http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp",
      "@": {}
    },
    "rss:pubdate": {
      "#": "Tue, 03 Jun 2003 09:39:21 GMT",
      "@": {}
    },
    "rss:title": {
      "#": "Star City",
      "@": {}
    },
    source: {},
    summary:
      'How do Americans get ready to work with Russians aboard the International Space Station? They take a crash course in culture, language and protocol at Russia\'s <a href=\\"http://howe.iki.rssi.ru/GCTC/gctc_e.htm\\">Star City</a>.',
    title: "Star City"
  },
  {
    author: "editor@example.com",
    categories: [],
    comments: null,
    date: "2003-05-31T11:06:42.000Z",
    description:
      'Sky watchers in Europe, Asia, and parts of Alaska and Canada will experience a <a href=\\"http://science.nasa.gov/headlines/y2003/30may_solareclipse.htm\\">partial eclipse of the Sun</a> on Saturday, May 31st.',
    enclosures: [],
    guid: "http://liftoff.msfc.nasa.gov/2003/05/30.html#item572",
    image: {},
    link: "http://liftoff.msfc.nasa.gov/2003/05/30.html#item572",
    meta: {
      "#ns": [],
      "#type": "rss",
      "#version": "2.0",
      "#xml": {
        version: "1.0"
      },
      "@": [],
      author: "editor@example.com",
      categories: [],
      cloud: {},
      copyright: null,
      date: "2003-06-10T09:41:01.000Z",
      description: "Liftoff to Space Exploration.",
      favicon: null,
      generator: "Weblog Editor 2.0",
      image: {},
      language: "en-us",
      link: "http://liftoff.msfc.nasa.gov/",
      pubDate: "2003-06-10T04:00:00.000Z",
      pubdate: "2003-06-10T04:00:00.000Z",
      "rss:@": {},
      "rss:description": {
        "#": "Liftoff to Space Exploration.",
        "@": {}
      },
      "rss:docs": {
        "#": "http://blogs.law.harvard.edu/tech/rss",
        "@": {}
      },
      "rss:generator": {
        "#": "Weblog Editor 2.0",
        "@": {}
      },
      "rss:language": {
        "#": "en-us",
        "@": {}
      },
      "rss:lastbuilddate": {
        "#": "Tue, 10 Jun 2003 09:41:01 GMT",
        "@": {}
      },
      "rss:link": {
        "#": "http://liftoff.msfc.nasa.gov/",
        "@": {}
      },
      "rss:managingeditor": {
        "#": "editor@example.com",
        "@": {},
        email: "editor@example.com",
        name: ""
      },
      "rss:pubdate": {
        "#": "Tue, 10 Jun 2003 04:00:00 GMT",
        "@": {}
      },
      "rss:title": {
        "#": "Liftoff News",
        "@": {}
      },
      "rss:webmaster": {
        "#": "webmaster@example.com",
        "@": {},
        email: "webmaster@example.com",
        name: ""
      },
      title: "Liftoff News",
      xmlUrl: null,
      xmlurl: null
    },
    origlink: null,
    permalink: "http://liftoff.msfc.nasa.gov/2003/05/30.html#item572",
    pubDate: "2003-05-31T11:06:42.000Z",
    pubdate: "2003-05-31T11:06:42.000Z",
    "rss:@": {},
    "rss:description": {
      "#":
        'Sky watchers in Europe, Asia, and parts of Alaska and Canada will experience a <a href=\\"http://science.nasa.gov/headlines/y2003/30may_solareclipse.htm\\">partial eclipse of the Sun</a> on Saturday, May 31st.',
      "@": {}
    },
    "rss:guid": {
      "#": "http://liftoff.msfc.nasa.gov/2003/05/30.html#item572",
      "@": {}
    },
    "rss:pubdate": {
      "#": "Fri, 30 May 2003 11:06:42 GMT",
      "@": {}
    },
    source: {},
    summary:
      'Sky watchers in Europe, Asia, and parts of Alaska and Canada will experience a <a href=\\"http://science.nasa.gov/headlines/y2003/30may_solareclipse.htm\\">partial eclipse of the Sun</a> on Saturday, May 31st.',
    title: null
  },
  {
    author: "editor@example.com",
    categories: [],
    comments: null,
    date: "2003-05-27T08:37:32.000Z",
    description:
      "Before man travels to Mars, NASA hopes to design new engines that will let us fly through the Solar System more quickly.  The proposed VASIMR engine would do that.",
    enclosures: [],
    guid: "http://liftoff.msfc.nasa.gov/2003/05/27.html#item571",
    image: {},
    link: "http://liftoff.msfc.nasa.gov/news/2003/news-VASIMR.asp",
    meta: {
      "#ns": [],
      "#type": "rss",
      "#version": "2.0",
      "#xml": {
        version: "1.0"
      },
      "@": [],
      author: "editor@example.com",
      categories: [],
      cloud: {},
      copyright: null,
      date: "2003-06-10T09:41:01.000Z",
      description: "Liftoff to Space Exploration.",
      favicon: null,
      generator: "Weblog Editor 2.0",
      image: {},
      language: "en-us",
      link: "http://liftoff.msfc.nasa.gov/",
      pubDate: "2003-06-10T04:00:00.000Z",
      pubdate: "2003-06-10T04:00:00.000Z",
      "rss:@": {},
      "rss:description": {
        "#": "Liftoff to Space Exploration.",
        "@": {}
      },
      "rss:docs": {
        "#": "http://blogs.law.harvard.edu/tech/rss",
        "@": {}
      },
      "rss:generator": {
        "#": "Weblog Editor 2.0",
        "@": {}
      },
      "rss:language": {
        "#": "en-us",
        "@": {}
      },
      "rss:lastbuilddate": {
        "#": "Tue, 10 Jun 2003 09:41:01 GMT",
        "@": {}
      },
      "rss:link": {
        "#": "http://liftoff.msfc.nasa.gov/",
        "@": {}
      },
      "rss:managingeditor": {
        "#": "editor@example.com",
        "@": {},
        email: "editor@example.com",
        name: ""
      },
      "rss:pubdate": {
        "#": "Tue, 10 Jun 2003 04:00:00 GMT",
        "@": {}
      },
      "rss:title": {
        "#": "Liftoff News",
        "@": {}
      },
      "rss:webmaster": {
        "#": "webmaster@example.com",
        "@": {},
        email: "webmaster@example.com",
        name: ""
      },
      title: "Liftoff News",
      xmlUrl: null,
      xmlurl: null
    },
    origlink: null,
    permalink: "http://liftoff.msfc.nasa.gov/2003/05/27.html#item571",
    pubDate: "2003-05-27T08:37:32.000Z",
    pubdate: "2003-05-27T08:37:32.000Z",
    "rss:@": {},
    "rss:description": {
      "#":
        "Before man travels to Mars, NASA hopes to design new engines that will let us fly through the Solar System more quickly.  The proposed VASIMR engine would do that.",
      "@": {}
    },
    "rss:guid": {
      "#": "http://liftoff.msfc.nasa.gov/2003/05/27.html#item571",
      "@": {}
    },
    "rss:link": {
      "#": "http://liftoff.msfc.nasa.gov/news/2003/news-VASIMR.asp",
      "@": {}
    },
    "rss:pubdate": {
      "#": "Tue, 27 May 2003 08:37:32 GMT",
      "@": {}
    },
    "rss:title": {
      "#": "The Engine That Does More",
      "@": {}
    },
    source: {},
    summary:
      "Before man travels to Mars, NASA hopes to design new engines that will let us fly through the Solar System more quickly.  The proposed VASIMR engine would do that.",
    title: "The Engine That Does More"
  },
  {
    author: "editor@example.com",
    categories: [],
    comments: null,
    date: "2003-05-20T08:56:02.000Z",
    description:
      "Compared to earlier spacecraft, the International Space Station has many luxuries, but laundry facilities are not one of them.  Instead, astronauts have other options.",
    enclosures: [],
    guid: "http://liftoff.msfc.nasa.gov/2003/05/20.html#item570",
    image: {},
    link: "http://liftoff.msfc.nasa.gov/news/2003/news-laundry.asp",
    meta: {
      "#ns": [],
      "#type": "rss",
      "#version": "2.0",
      "#xml": {
        version: "1.0"
      },
      "@": [],
      author: "editor@example.com",
      categories: [],
      cloud: {},
      copyright: null,
      date: "2003-06-10T09:41:01.000Z",
      description: "Liftoff to Space Exploration.",
      favicon: null,
      generator: "Weblog Editor 2.0",
      image: {},
      language: "en-us",
      link: "http://liftoff.msfc.nasa.gov/",
      pubDate: "2003-06-10T04:00:00.000Z",
      pubdate: "2003-06-10T04:00:00.000Z",
      "rss:@": {},
      "rss:description": {
        "#": "Liftoff to Space Exploration.",
        "@": {}
      },
      "rss:docs": {
        "#": "http://blogs.law.harvard.edu/tech/rss",
        "@": {}
      },
      "rss:generator": {
        "#": "Weblog Editor 2.0",
        "@": {}
      },
      "rss:language": {
        "#": "en-us",
        "@": {}
      },
      "rss:lastbuilddate": {
        "#": "Tue, 10 Jun 2003 09:41:01 GMT",
        "@": {}
      },
      "rss:link": {
        "#": "http://liftoff.msfc.nasa.gov/",
        "@": {}
      },
      "rss:managingeditor": {
        "#": "editor@example.com",
        "@": {},
        email: "editor@example.com",
        name: ""
      },
      "rss:pubdate": {
        "#": "Tue, 10 Jun 2003 04:00:00 GMT",
        "@": {}
      },
      "rss:title": {
        "#": "Liftoff News",
        "@": {}
      },
      "rss:webmaster": {
        "#": "webmaster@example.com",
        "@": {},
        email: "webmaster@example.com",
        name: ""
      },
      title: "Liftoff News",
      xmlUrl: null,
      xmlurl: null
    },
    origlink: null,
    permalink: "http://liftoff.msfc.nasa.gov/2003/05/20.html#item570",
    pubDate: "2003-05-20T08:56:02.000Z",
    pubdate: "2003-05-20T08:56:02.000Z",
    "rss:@": {},
    "rss:description": {
      "#":
        "Compared to earlier spacecraft, the International Space Station has many luxuries, but laundry facilities are not one of them.  Instead, astronauts have other options.",
      "@": {}
    },
    "rss:guid": {
      "#": "http://liftoff.msfc.nasa.gov/2003/05/20.html#item570",
      "@": {}
    },
    "rss:link": {
      "#": "http://liftoff.msfc.nasa.gov/news/2003/news-laundry.asp",
      "@": {}
    },
    "rss:pubdate": {
      "#": "Tue, 20 May 2003 08:56:02 GMT",
      "@": {}
    },
    "rss:title": {
      "#": "Astronauts' Dirty Laundry",
      "@": {}
    },
    source: {},
    summary:
      "Compared to earlier spacecraft, the International Space Station has many luxuries, but laundry facilities are not one of them.  Instead, astronauts have other options.",
    title: "Astronauts' Dirty Laundry"
  }
];
