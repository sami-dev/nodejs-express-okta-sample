# NodeJS Express Sample OIDC Application for your Okta Org

This repository contains a sample Node JS application that uses Express framework.
It uses OpenID Connect library to integrate with your Okta org.

## Prerequisites
   Make sure you have installed Node JS on your machine
   To check version of Node JS and NPM, run the below commands on your command prompt
   Check the versions of NodeJS and NPM

   ```
   node - v
   npm -v
   ```
       
   <br/>
   <img src="readme-images/pre-req1.jpg" alt="Create a new app integration"/>

## How to integrate this application with your Okta Org

Please follow these steps to configure and run this application in your NodeJS environment

1. Download the sample application from git
   <br/>
   git clone https://github.com/sami-dev/nodejs-express-okta-sample.git

2. Run the below command <br/>
   npm install
   <br/>
   * npm install downloads dependencies defined in a package. json file and generates a node_modules folder with the installed modules

3. Configure a Web Application in your Okta Org
   * Go to Applications --> Applications
      - Click on Create new application
   * Provide below information in "Create a new app integration" wizard
      - Select Sign-On method as OIDC - OpenID Connect
      - Select Application type as "Web Application"
      <br/>
      <img src="readme-images/okta-createapp-1.jpg" alt="Create a new app integration"/>
   * Provide Application configuration information
      For Example:
      - Application Name: My NodeJS Express App
      - Grant Type: Authorization Code
      - Sign-in Redirect URIs: http://localhost:3000/authorization-code/callback
      - Sign-out Redirect URIs: http://localhost:3000
      - Assignments: Limit access to selected groups : Sales
      <br/>
      <img src="readme-images/okta-createapp-2.jpg" alt="Create a new app integration"/>
   *  Review the application configuration and group assignments
      <br/>
      <img src="readme-images/okta-createapp-3.jpg" alt="Create a new app integration"/>
   *  Copy the Client Id and Client secret from the application configuration
      <br/>
      <img src="readme-images/okta-createapp-4.jpg" alt="Copy the client Id and client secret"/>
   *  Go to Security --> API --> Authorization servers --> default
      - Copy the issuer 
      <br/>
      <img src="readme-images/okta-auth-server-1.jpg" alt="Copy the issuer"/>
4. Update the OIDC configuration inside index.js
   ```
      const oidc = new ExpressOIDC({
        issuer: "https://dev-####.oktapreview.com/oauth2/default",
        client_id: "################",
        client_secret: "#######################",
        appBaseUrl: "http://localhost:3000",
        scope: "openid profile",
      });
   ```
5. Run the application
   * Start the application
      - node index.js
   * Access the application in a new browser window
      - http://localhost:3000/
   * Click on Login link and login page should appear
   * Login with an active account of your Okta org
   * After login, you should see a Welcome message
   * Click on Logout to make sure logout is working fine

