# Node App for AliceChuang.com > Spring 2018
##### By Alice Chuang 2017

Source files for AliceChuang.com.

This node app runs on Node, Express, React, Postgres on a Linux (Ubuntu 16.04) Nginx Server. See this website running on http://alicechuang.com/

Run this site on your local machine by following the below instructions.

#### Pre-Installation
Before forking this repo and cloning down to your computer, make sure Node and Postgres are installed.

- Download and install Node.js https://docs.npmjs.com/getting-started/installing-node
- Download and install Postgres DB http://postgresapp.com/
- Check to see if Node or NPM is installed by typing `node -v` or `npm -v` into your Terminal

#### Installation
- Fork this repo to your Github (Hit the Fork button at the top right of this repo. Choose where you'd like to fork it.)
- From your Terminal or Shell Prompt:
- Browse to folder where you will download this repo
- Clone down the repo, `git clone https://github.com/your-username/react-boilerplater.git` (this clones into a folder `react-boilerplater`)
- Browse to this folder
- Run `npm install` (This installs all the necessary packages required to run this app)
- Run `npm run start-dev` (Make sure Postgres is running. If not, stop the server by hitting ctrl+c. Start Postgres, you should see the icon in the top right menu bar next to the battery life icon, re-run start-dev)
- Open your web browser (Chrome), browse to http://localhost:3000/ to see the app running!

#### Main Files
- `package.json` This file lists all the scripts and required packages to install
- `app.js` This file is equivalent to the index.html file in the web root of your site
- `/server/index.js` Server configuration file
- `/db/index.js` Database configuration file and tables
- `/client` This folder contains all the react templates for the pages in your web app

#### Includes:
- Node.js
- Express
- React
- React-Redux
- Sequelize
- Postgres
- Thunk
- Bootstrap

#### Supporting Packages:
- Node.js
- NPM
- Nodemon
- Webpack
- Babel
