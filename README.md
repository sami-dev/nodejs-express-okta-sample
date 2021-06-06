# NodeJS Express Sample OIDC Application for Okta

This repository contains a sample Node JS application that uses Express framework.
It uses OpenID Connect library to integrate with your Okta org.

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
   Click on Create new application
   * Provide below information in "Create a new app integration" wizard
      Select Sign-On method as OIDC - OpenID Connect
      Select Application type as "Web Application"
      <br/>
      <img src="readme-images/okta-createapp-1.jpg" alt="Create a new app integration"/>

4. Update the configuration inside index.js

5. Run the application
