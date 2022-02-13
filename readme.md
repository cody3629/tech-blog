# Tech Blog

## Description
  "Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."

## Deployed Link


## User Story


## Languages
* Node.js
* Express
* MySQL
* Sequelize
* Javascript

## License
MIT

## Instructions
* Clone repo
* npm i to install dependancies
* Create an .env file to put in database name, your sql username, and your sql password like the example below

![image](https://user-images.githubusercontent.com/92649046/152701262-ccf048b0-32d8-4366-aab2-b98134164039.png)

* Run mysql -u root -p and enter password
* Run source db/schema.sql, then quit out of mysql
* Run npm run seed
* Run node server.js
