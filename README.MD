angular-intro

Make sure you have node and bower installed:

  node -v
  bower -v

Otherwise you will need to install them:

  brew install node
  npm install -g bower

Now lets get some boilerplate working. Make a new directory, cd into it then run:

  bower init

Choose the defaults (keep hitting return) and you're all good. Now let's install some packages:

  bower install jquery --save
  bower install bootstrap --save
  bower install angular --save
  bower install angular-resource --save

The --save will add the package into your bower.json file as dependencies. Then when you clone your repo again you can do a bower install in exactly the same way as you bundle install with Ruby.

created basic html page and added script links to header area

bower install angular-mocks --save-dev
bower install angular-route --save-dev

npm install karma --save-dev
npm install karma-jasmine karma-chrome-launcher karma-phantomjs-launcher --save-dev
npm install -g karma-cli
