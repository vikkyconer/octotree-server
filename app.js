const express = require("express");
const { getAccessToken } = require("./utility");
const app = express();

app.get("/oauth-redirect", async (req, res) => {
  console.log("req: ", req);
  console.log("req: ", req.query.code);
  const code = req.query.code;
  console.log("getAccessToken: ", getAccessToken);
  const accessToken = await getAccessToken(code);
  res.redirect(`https://github.com/?access_token=${accessToken}`);
});

app.listen(3000, () => console.log("Server listening on port 3000!"));
