// Module Installation

  "npm install" // All
  "npm install --only=prod" // Production
  "npm install --only=dev" // Development

// Hosting

  "start": "node ./bin/www -L" // Deploy to Heroku
  "start": "concurrently \"node-sass -o public/stylesheets public/stylesheets/custom.scss\" \"nodemon ./bin/www -L\""
