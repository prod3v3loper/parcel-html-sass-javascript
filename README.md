# Parcel

The small bundler give us a fast building and development envoirement.
Here you found a simple example of a project with HTML, SASS and JS

package.json
```
    "devDependencies": {
        "cssnano": "^4.1.8",
        "sass": "^1.16.0"
    }
```

# INSTALL

We need [Node.js](https://nodejs.org/en/) for the NPM (Node Package Manager)

And install [Parcel](https://parceljs.org/) global
```
npm install -g parcel-bundler
```

You can download this project and start it directly.
Create a Project folder and open your Terminal, to switch in the project folder.
```
cd /Users/username/project/path/
```
Clone the repo to your local envoirement
```
git clone https://github.com/prod3v3loper/parcel-html-sass-javascript.git /Users/username/Projects/
```
And now install all Dev Dependencies in package.json
```
npm install
```

# USE
We added commands in our package.json to run with npm instead of npx

package.json
```
    "scripts": {
        "watch": "parcel watch public/index.html",
        "dev": "parcel public/index.html",
        "build": "parcel build public/index.html"
    },
```

And this we use in which we npm run and our command names.
This command start the Server with the hotmodule.
```
npm run dev
```
This command build the dist folder with the end product.
```
npm run build
```

# Contribute

Please [file an issue](https://github.com/prod3v3loper/parcel-html-sass-javascript/issues) if you
think something could be improved. Please submit Pull Requests when ever
possible.

# Authors

* **Samet Tarim** - *All works* - [prod3v3loper](https://www.tnado.com/author/prod3v3loper/)

# License

[MIT](https://github.com/prod3v3loper/parcel-html-sass-javascript/blob/master/LICENSE)