# Deployment steps

## 1. Create `vercel.json` file

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/api" }]
}
```

## 2. Export `app` in `src/app.js`

```js
const app = express();

// other codes

module.exports = app;
```

## 3. Create `api/index.js` and export `app`

```js
const app = require('../src/app');

module.exports = app;
```

## 4. Create directory `public` and create `.gitkeep` file

`.gitkeep` is an empty file

## 5. Modify `scripts` in package.json

```json
{
  "scripts": {
    "dev": "nodemon src/app.js",
    "start": "node src/app.js",
    "vercel-build": "echo 'vercel-build'"
  }
}
```

## Note
You need to install all dependencies and devDependencies, please take a look at `package.json` file.
