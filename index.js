const express = require("express");
const session = require("express-session");
const { ExpressOIDC } = require("@okta/oidc-middleware");

const app = express();
const path = require("path");
const oidc = new ExpressOIDC({
  issuer: "https://dev-217355.oktapreview.com/oauth2/default",
  client_id: "0oazmcgd4iRiO4h4T0h7",
  client_secret: "DxNfeKFYd574iRDK0_K8e7N42R8HXVc5XLezZ189",
  appBaseUrl: "http://localhost:3000",
  scope: "openid profile",
});

app.use(
  session({
    secret: "this-should-be-very-random",
    resave: true,
    saveUninitialized: false,
  })
);
app.use(oidc.router);

app.get("/", (req, res) => {
  if (req.userContext) {
    res.send(`Hello ${req.userContext.userinfo.name}!
      <form method="POST" action="/logout">
        <button type="submit">Logout</button>
      </form>
    `);
  } else {
    //res.send('Please <a href="/login">login</a>');
    res.sendFile(path.join(__dirname, "/index.html"));
  }
});

app.get("/protected", oidc.ensureAuthenticated(), (req, res) => {
  res.send("Top Secret");
});

oidc.on("ready", () => {
  app.listen(3000, () => console.log("app started at 3000"));
});

oidc.on("error", (err) => {
  console.log("An error occurred");
  // An error occurred while setting up OIDC, during token revokation, or during post-logout handling
});
