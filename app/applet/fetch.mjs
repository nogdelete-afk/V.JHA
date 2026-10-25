import https from "node:https";
https.get("https://urbansocialmedia.in/", (res) => {
  let data = "";
  res.on("data", (chunk) => data += chunk);
  res.on("end", () => {
    // extract 'How we work' section
    const match = data.match(/How we work.*?<\/section>/is);
    if (match) console.log(match[0].substring(0, 1500));
    else console.log("Not found in raw HTML.");
  });
});
