import nodefetch from "node-fetch";

const fetch = async urls => {
  urls = urls.map(url => {
    return { url: url };
  });

  const body = {
    urls: urls
  };

  const res = await nodefetch("https://goparallelfeed.now.sh", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });

  const json = await res.json();
  return json;
};

export default fetch;
