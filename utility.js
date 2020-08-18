const axios = require("axios");

const getAccessToken = (code) => {
  return new Promise((resolve, reject) => {
    const body = {
      client_id: "cfa7d8c85ec9fa22261b",
      client_secret: "2058b33ebddc1a597593e6546ebe005a21bcb93e",
      redirect_uri: "https://9da285396a3f.ngrok.io/oauth-redirect",
      code,
      scope: "repo",
    };
    axios({
      method: "post",
      url: "https://github.com/login/oauth/access_token",
      data: body,
    })
      .then((response) => {
        const data = response.data.split("&")[0];
        const value = data.split("=");
        console.log("value: ", value[1]);
        if (value[0] === "error") {          
          reject(value[1]);
        } else {
          resolve(value[1]);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getAccessToken,
};
