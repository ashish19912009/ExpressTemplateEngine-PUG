# ExpressTemplateEngine-PUG
A template engine enables you to use static template files in your application. At runtime, the template engine 
replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. 
This approach makes it easier to design an HTML page.Some popular template engines that work with Express are Pug, 
Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.

A simple Login Form made with the help of bootstrap 4 components and used PUG (Express Template Engine) to load form and user home.
Also used Bower Package Manager for Bootstrap.

Pug is a templating engine for Express. Templating engines are used to remove the cluttering of our server code with HTML, 
concatenating strings wildly to existing HTML templates. Pug is a very powerful templating engine which has a variety 
of features including filters, includes, inheritance, interpolation, etc. There is a lot of ground to cover on this.
To use Pug with Express, we need to install it,

npm install --save pug

Now that Pug is installed, set it as the templating engine for your app. You don't need to 'require' it. Add the following code to your index.js file.

